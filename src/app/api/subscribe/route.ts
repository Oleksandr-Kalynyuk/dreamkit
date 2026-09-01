import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiting (max 5 requests per 15 minutes per IP)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000;
  const limit = 5;

  const record = rateLimitMap.get(ip) || { count: 0, lastReset: now };

  if (now - record.lastReset > windowMs) {
    record.count = 1;
    record.lastReset = now;
  } else {
    record.count += 1;
  }

  rateLimitMap.set(ip, record);
  return record.count > limit;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, honeypot } = body;

    // 1. Honeypot check (silently drop bot requests)
    if (honeypot) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // 2. IP Rate Limit check
    const ip = request.headers.get("x-forwarded-for") || "127.0.0.1";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many attempts. Please try again later." },
        { status: 429 }
      );
    }

    // 3. Normalize & validate email
    const cleanEmail = email?.trim().toLowerCase();
    if (!cleanEmail) {
      return NextResponse.json(
        { error: "Email address is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // 4. Create contact in Resend
    const { data, error } = await resend.contacts.create({
      email: cleanEmail,
      unsubscribed: false,
    });

    if (error) {
      const errorMsg = String(error.message || "");

      // Handle duplicate subscribers gracefully
      if (errorMsg.includes("already exists") || errorMsg.includes("conflict")) {
        return NextResponse.json(
          { success: true, message: "You are already on the waitlist!" },
          { status: 200 }
        );
      }

      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: "Unable to subscribe right now." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, id: data?.id, message: "You're on the list!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
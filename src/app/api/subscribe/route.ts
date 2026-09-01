import { NextResponse } from "next/server";
import { Resend } from "resend";
import crypto from "crypto";

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

function generateToken(email: string): string {
  const secret = process.env.WAITLIST_SECRET || "fallback_secret";
  return crypto.createHmac("sha256", secret).update(email).digest("hex");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, honeypot } = body;

    if (honeypot) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const ip = request.headers.get("x-forwarded-for") || "127.0.0.1";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many attempts. Please try again later." },
        { status: 429 }
      );
    }

    const cleanEmail = email?.trim().toLowerCase();
    if (!cleanEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const token = generateToken(cleanEmail);
    
    // Формуємо посилання підтвердження
    const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL 
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` 
      : "http://localhost:3000";

    const confirmLink = `${baseUrl}/api/confirm?email=${encodeURIComponent(cleanEmail)}&token=${token}`;

    // Відправляємо лист підтвердження
    const { error } = await resend.emails.send({
      from: "DreamKit <onboarding@resend.dev>", // Або твій верифікований домен
      to: cleanEmail,
      subject: "Confirm your DreamKit waitlist subscription",
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>Confirm your email</h2>
          <p>Click the button below to join the DreamKit Pro waitlist:</p>
          <a href="${confirmLink}" style="background-color: #000; color: #fff; padding: 12px 20px; text-decoration: none; border-radius: 6px; display: inline-block;">Confirm Email</a>
          <p style="margin-top: 20px; color: #666; font-size: 12px;">If you didn't request this, please ignore this email.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend send error:", error);
      return NextResponse.json(
        { error: "Failed to send confirmation email." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Check your inbox to confirm your email!" },
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
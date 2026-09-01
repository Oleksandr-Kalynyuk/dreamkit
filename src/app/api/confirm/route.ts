import { NextResponse } from "next/server";
import { Resend } from "resend";
import crypto from "crypto";

function verifyToken(email: string, token: string): boolean {
  const secret = process.env.WAITLIST_SECRET || "fallback_secret";
  const expectedToken = crypto.createHmac("sha256", secret).update(email).digest("hex");
  return crypto.timingSafeEqual(Buffer.from(token), Buffer.from(expectedToken));
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");
  const token = searchParams.get("token");

  if (!email || !token) {
    return NextResponse.redirect(new URL("/?error=invalid_link", request.url));
  }

  try {
    const isValid = verifyToken(email, token);
    if (!isValid) {
      return NextResponse.redirect(new URL("/?error=invalid_token", request.url));
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Додаємо контакт у Resend Audiences тільки після підтвердження
    await resend.contacts.create({
      email: email.trim().toLowerCase(),
      audienceId: process.env.RESEND_AUDIENCE_ID!,
      unsubscribed: false,
    });

    // Редірект на головну або окрему сторінку про успішне підтвердження
    return NextResponse.redirect(new URL("/?confirmed=true", request.url));
  } catch (error) {
    console.error("Confirm error:", error);
    return NextResponse.redirect(new URL("/?error=server_error", request.url));
  }
}
// DEPLOY TEST — dynamic nodemailer import only

export const runtime = "nodejs";

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  // ✅ Dynamic import (required for Turbopack)
  const nodemailer = (await import("nodemailer")).default;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Adlacson Construction – Website Inquiry" <${process.env.EMAIL_FROM}>`,
      to: "adlacson3devconscorp.itdep@gmail.com",
      replyTo: `"${name}" <${email}>`,
      subject: "New Inquiry – Contact Form Submission",
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; color: #333; line-height: 1.6;">
          <h2 style="color: #1f2937; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">
            New Website Inquiry
          </h2>

          <p>You have received a new message from the company website contact form.</p>

          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px; font-weight: bold; width: 140px;">Client Name:</td>
              <td style="padding: 8px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Email Address:</td>
              <td style="padding: 8px;">${email}</td>
            </tr>
          </table>

          <div style="margin-top: 20px;">
            <p style="font-weight: bold;">Message:</p>
            <div style="background: #f9fafb; border-left: 4px solid #3b82f6; padding: 12px;">
              ${message.replace(/\n/g, "<br />")}
            </div>
          </div>

          <p style="margin-top: 24px; font-size: 13px; color: #6b7280;">
            This message was sent from the Adlacson Construction website contact form.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}

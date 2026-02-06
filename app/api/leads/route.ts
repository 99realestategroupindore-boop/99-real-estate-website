import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = body.name?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim();
    const service = body.service?.trim();
    const message = body.message?.trim();

    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER!,
        pass: process.env.GMAIL_APP_PASSWORD!,
      },
    });

    await transporter.sendMail({
      from: `"99 Real Estate Group" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL!,
      replyTo: email,
      subject: `New Enquiry – ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6;">
          <h2>New Contact Enquiry</h2>
          <hr/>

          <p><strong>Full Name:</strong><br/>${name}</p>
          <p><strong>Email:</strong><br/>${email}</p>
          <p><strong>Phone:</strong><br/>${phone}</p>
          <p><strong>Service:</strong><br/>${service}</p>

          <p><strong>Message:</strong></p>
          <div style="padding:12px;background:#f4f4f4;border-radius:6px;">
            ${message}
          </div>

          <hr/>
          <p style="font-size:12px;color:#777;">
            Sent from 99 Real Estate Group website
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Leads API error:", err);
    return NextResponse.json(
      { error: "Failed to send enquiry" },
      { status: 500 }
    );
  }
}
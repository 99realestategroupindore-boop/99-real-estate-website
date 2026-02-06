import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      friendName,
      friendPhone,
      city,
      yourName,
      yourPhone,
    } = data;

    // ✅ Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // ✅ Email content
    const mailOptions = {
      from: `"99 Real Estate Website" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: "📩 New Refer & Earn Submission",
      html: `
        <h2>New Referral Received</h2>
        <hr />
        <h3>Friend Details</h3>
        <p><strong>Name:</strong> ${friendName}</p>
        <p><strong>Phone:</strong> ${friendPhone}</p>
        <p><strong>City / Project:</strong> ${city || "Not provided"}</p>

        <h3>Your Details</h3>
        <p><strong>Name:</strong> ${yourName}</p>
        <p><strong>Phone:</strong> ${yourPhone}</p>
      `,
    };

    // ✅ Send mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return NextResponse.json(
      { success: false, error: "Email failed" },
      { status: 500 }
    );
  }
}
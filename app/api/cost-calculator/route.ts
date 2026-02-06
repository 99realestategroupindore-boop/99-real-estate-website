import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      mobile,
      area,
      quality,
      rate,
      totalCost,
    } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Cost Calculator" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: "New Cost Calculator Lead 🚧",
      html: `
        <h2>New Cost Calculator Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Built-up Area:</strong> ${area} sq ft</p>
        <p><strong>Package:</strong> ${quality}</p>
        <p><strong>Rate:</strong> ₹${rate} / sq ft</p>
        <p><strong>Estimated Cost:</strong> ₹${totalCost.toLocaleString()}</p>
        <hr/>
        <p>This customer just calculated project cost and is a hot lead.</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}
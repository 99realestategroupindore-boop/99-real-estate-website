import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { chatbotKnowledge } from "@/lib/chatbotKnowledge";

/**
 * Expected request body:
 * {
 *   message: string,
 *   name?: string,
 *   phone?: string,
 *   conversation?: string[],
 *   page?: string
 * }
 */

export async function POST(req: Request) {
  try {
    console.log("✅ CHAT API HIT");

    const body = await req.json();

    const {
      message,
      name = "Not provided",
      phone = "Not provided",
      conversation = [],
      page = "Unknown page",
    } = body;

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    /* ================= RULE-BASED CHATBOT LOGIC ================= */

    const text = message.toLowerCase();
    let reply =
      "Thank you for contacting 99 Real Estate Group. How may I assist you today?";

    // PRICING
    if (text.includes("price") || text.includes("cost")) {
      reply = `
We offer transparent construction packages (excluding GST):

• Standard – ${chatbotKnowledge.packages.standard.price}
• Premium – ${chatbotKnowledge.packages.premium.price}
• Luxury – ${chatbotKnowledge.packages.luxury.price}

Would you like detailed inclusions for any package?
`;
    }

    // PACKAGES
    else if (text.includes("package")) {
      reply = `
We offer three construction packages:

• Standard
• Premium
• Luxury

All packages include design, construction, plumbing, electrical work, and warranty.
`;
    }

    // PROCESS
    else if (text.includes("process") || text.includes("how")) {
      reply = `
Our construction process:

${chatbotKnowledge.process
  .map((step: string, i: number) => `${i + 1}. ${step}`)
  .join("\n")}
`;
    }

    // WARRANTY
    else if (text.includes("warranty")) {
      reply = `
We provide:
• ${chatbotKnowledge.company.warranty.structural} structural warranty
• ${chatbotKnowledge.company.warranty.service} service warranty
`;
    }

    // LOCATION
    else if (text.includes("location") || text.includes("city")) {
      reply = `
We are based in ${chatbotKnowledge.company.city} and provide construction services across Madhya Pradesh.
`;
    }

    // CONTACT / CALL
    else if (text.includes("contact") || text.includes("call")) {
      reply =
        "Please share your name and mobile number. Our construction expert will contact you shortly.";
    }

    // UNKNOWN → LEAD
    else {
      reply =
        "To assist you better, may I have your name and mobile number? Our expert will personally connect with you.";
    }

    /* ================= EMAIL SETUP ================= */

    console.log("📧 Preparing chatbot email...");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const formattedConversation =
      conversation.length > 0
        ? conversation.join("\n")
        : "No previous conversation";

    const emailHTML = `
      <h2>New Chatbot Enquiry – 99 Real Estate Group</h2>

      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Page:</strong> ${page}</p>
      <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>

      <hr />

      <h3>Latest Message</h3>
      <p>${message}</p>

      <hr />

      <h3>Conversation History</h3>
      <pre style="background:#f4f4f4;padding:12px;border-radius:6px;font-size:13px;">
${formattedConversation}
      </pre>
    `;

    await transporter.sendMail({
      from: `"99 Real Estate Chatbot" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: "New Chatbot Lead – 99 Real Estate Group",
      html: emailHTML,
    });

    console.log("✅ Chatbot email sent successfully");

    return NextResponse.json({
      success: true,
      reply,
    });
  } catch (error) {
    console.error("❌ Chatbot API Error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
import { NextResponse } from "next/server";
import { contactSubmissionSchema } from "@/lib/validators";

type ContactPayload = {
  fullName: string;
  company: string;
  email: string;
  phone?: string;
  topic: string;
  originCountry: string;
  destinationCountry: string;
  avgWeight?: number;
  weeklyVolume?: string;
  message: string;
  consent: true;
};

async function sendWithResend(payload: ContactPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ?? "no-reply@dhl-express.example";

  if (!apiKey || !toEmail) {
    throw new Error("Missing RESEND_API_KEY or CONTACT_TO_EMAIL");
  }

  const text = [
    "New DHL Express business contact submission",
    `Name: ${payload.fullName}`,
    `Company: ${payload.company}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || "N/A"}`,
    `Topic: ${payload.topic}`,
    `Origin: ${payload.originCountry}`,
    `Destination: ${payload.destinationCountry}`,
    `Avg Weight (kg): ${payload.avgWeight ?? "N/A"}`,
    `Weekly Volume: ${payload.weeklyVolume ?? "N/A"}`,
    `Consent: ${payload.consent ? "Yes" : "No"}`,
    "",
    "Message:",
    payload.message,
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: `New contact form submission: ${payload.topic}`,
      text,
      reply_to: payload.email,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Resend error: ${response.status} ${errorBody}`);
  }
}

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = contactSubmissionSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid request payload",
          issues: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    if (process.env.CONTACT_PROVIDER === "resend") {
      await sendWithResend(data);
    } else {
      console.info("Contact submission (demo mode):", data);
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Thanks—your message has been received. A DHL Express advisor will reach out within 1 business day.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("POST /api/contact error:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          "Something went wrong while sending your message. Please try again later.",
      },
      { status: 500 }
    );
  }
}

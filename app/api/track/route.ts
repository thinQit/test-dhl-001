import { NextResponse } from "next/server";
import {
  singleTrackingResultSchema,
  trackRequestSchema,
} from "@/lib/validators";

function normalizeTrackingNumbers(
  input: string | string[]
): string[] {
  if (Array.isArray(input)) {
    return input.map((s) => s.trim()).filter(Boolean);
  }

  return input
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function mockTrackingResult(trackingNumber: string) {
  const hash = [...trackingNumber].reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const states = ["In transit", "Delivered", "Exception", "Label created"] as const;
  const status = states[hash % states.length];

  const base = {
    trackingNumber,
    status,
    estimatedDelivery:
      status === "Delivered" ? null : "Thu, Apr 10",
    origin: "Miami, FL, US",
    destination: "Frankfurt, DE",
    events: [
      {
        dateTime: "2026-04-06 09:12",
        location: "Miami, FL, US",
        description: "Shipment picked up",
      },
      {
        dateTime: "2026-04-06 22:40",
        location: "Cincinnati Hub, US",
        description: "Processed at DHL facility",
      },
      {
        dateTime: "2026-04-07 03:15",
        location: "Cincinnati Hub, US",
        description:
          status === "Label created" ? "Label created" : "Departed facility",
      },
    ],
  };

  if (status === "Delivered") {
    base.events.unshift({
      dateTime: "2026-04-08 14:05",
      location: "Frankfurt, DE",
      description: "Delivered - Signed by recipient",
    });
  }

  if (status === "Exception") {
    base.events.unshift({
      dateTime: "2026-04-08 10:20",
      location: "Frankfurt, DE",
      description: "Delivery exception - Awaiting customs documentation",
    });
  }

  return singleTrackingResultSchema.parse(base);
}

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = trackRequestSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid tracking request payload",
          issues: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const trackingNumbers = normalizeTrackingNumbers(parsed.data.trackingNumbers);

    if (trackingNumbers.length === 0) {
      return NextResponse.json(
        { success: false, error: "At least one tracking number is required" },
        { status: 400 }
      );
    }

    const results = trackingNumbers.map((number) => mockTrackingResult(number));

    return NextResponse.json(
      {
        success: true,
        count: results.length,
        emailUpdates: parsed.data.emailUpdates || null,
        results,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("POST /api/track error:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          "Could not retrieve tracking details. Please verify the number(s) and try again.",
      },
      { status: 500 }
    );
  }
}

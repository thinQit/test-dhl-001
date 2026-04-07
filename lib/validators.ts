import { z } from "zod";

export const contactTopicSchema = z.enum([
  "Tracking help",
  "Get a quote",
  "Schedule a pickup",
  "Customs & documentation",
  "eCommerce shipping",
  "Other",
]);

export const contactSubmissionSchema = z.object({
  fullName: z.string().min(2).max(100),
  company: z.string().min(2).max(120),
  email: z.string().email().max(254),
  phone: z.string().min(7).max(30).optional().or(z.literal("")),
  topic: contactTopicSchema,
  originCountry: z.string().min(2).max(80),
  destinationCountry: z.string().min(2).max(80),
  avgWeight: z.coerce.number().positive().max(100000).optional(),
  weeklyVolume: z
    .enum(["1–5", "6–20", "21–50", "51–200", "200+"])
    .optional(),
  message: z.string().min(10).max(3000),
  consent: z.literal(true),
});

export type ContactSubmissionInput = z.infer<typeof contactSubmissionSchema>;

export const trackRequestSchema = z.object({
  trackingNumbers: z.union([
    z.string().min(3).max(500),
    z.array(z.string().min(3).max(50)).min(1).max(25),
  ]),
  emailUpdates: z.string().email().optional().or(z.literal("")),
});

export type TrackRequestInput = z.infer<typeof trackRequestSchema>;

export const singleTrackingEventSchema = z.object({
  dateTime: z.string(),
  location: z.string(),
  description: z.string(),
});

export const singleTrackingResultSchema = z.object({
  trackingNumber: z.string(),
  status: z.enum(["In transit", "Delivered", "Exception", "Label created"]),
  estimatedDelivery: z.string().nullable(),
  origin: z.string(),
  destination: z.string(),
  events: z.array(singleTrackingEventSchema),
});

export type SingleTrackingResult = z.infer<typeof singleTrackingResultSchema>;

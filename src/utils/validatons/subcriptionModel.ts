import { z } from "zod";

export const createSubscriptionModelSchema = z.object({
  planName: z
    .string()
    .min(3, "Plan name must be at least 3 characters"),

  planDescription: z
    .string()
    .min(5, "Description should be meaningful")
    .optional(),

  price: z
    .number()
    .int("Price must be an integer")
    .positive("Price must be greater than 0"),

  currency: z
    .string()
    .length(3, "Use 3-letter currency code (e.g. USD, INR)")
    .toUpperCase(),

  features: z
    .array(z.string().min(1, "Feature cannot be empty"))
    .min(1, "At least one feature is required"),
});

export const updateSubscriptionModelSchema =
  createSubscriptionModelSchema.partial();
import { z } from "zod";

export const createSubscriptionOrderSchema = z.object({
  subscriptionModelId: z
    .string()
    .uuid("Invalid subscription ID"),
});
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSubscriptionModelSchema = exports.createSubscriptionModelSchema = void 0;
const zod_1 = require("zod");
exports.createSubscriptionModelSchema = zod_1.z.object({
    planName: zod_1.z
        .string()
        .min(3, "Plan name must be at least 3 characters"),
    planDescription: zod_1.z
        .string()
        .min(5, "Description should be meaningful")
        .optional(),
    price: zod_1.z
        .number()
        .int("Price must be an integer")
        .positive("Price must be greater than 0"),
    currency: zod_1.z
        .string()
        .length(3, "Use 3-letter currency code (e.g. USD, INR)")
        .toUpperCase(),
    features: zod_1.z
        .array(zod_1.z.string().min(1, "Feature cannot be empty"))
        .min(1, "At least one feature is required"),
});
exports.updateSubscriptionModelSchema = exports.createSubscriptionModelSchema.partial();

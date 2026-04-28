"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSubscriptionOrderSchema = void 0;
const zod_1 = require("zod");
exports.createSubscriptionOrderSchema = zod_1.z.object({
    subscriptionModelId: zod_1.z
        .string()
        .uuid("Invalid subscription ID"),
});

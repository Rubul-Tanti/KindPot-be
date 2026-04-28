"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.charitySchema = exports.charityImageSchema = void 0;
const zod_1 = require("zod");
exports.charityImageSchema = zod_1.z.object({
    altText: zod_1.z.string().min(3).optional(),
    order: zod_1.z.number().int().min(0).optional()
});
exports.charitySchema = zod_1.z.object({
    name: zod_1.z.string().min(5),
    description: zod_1.z.string().min(8),
    websiteUrl: zod_1.z.url().optional(),
    country: zod_1.z.string().min(2).max(100),
    images: zod_1.z.string().transform(charityImage => JSON.parse(charityImage)).pipe(zod_1.z.array(exports.charityImageSchema).min(1, 'At least one image is required'))
});

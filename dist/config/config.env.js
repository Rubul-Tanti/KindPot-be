"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const zod_1 = require("zod");
dotenv_1.default.config();
const envSchema = zod_1.z.object({
    PORT: zod_1.z.coerce.number().default(3000),
    SMTP_HOST: zod_1.z.coerce.string(),
    SMTP_PORT: zod_1.z.coerce.number().default(587),
    EMAIL: zod_1.z.string().email(),
    EMAILPASS: zod_1.z.string(),
    JWT_REFRESH_SECRET: zod_1.z.string(),
    JWT_ACCESS_SECRET: zod_1.z.string(),
    JWT_REFRESH_TOKEN_EXPIRES: zod_1.z.string(),
    JWT_ACCESS_TOKEN_EXPIRES: zod_1.z.string(),
    FRONTEND_URL: zod_1.z.url(),
    CLOUDINARY_API_SECRET: zod_1.z.string(),
    CLOUDINARY_API: zod_1.z.string(),
    CLOUD_NAME: zod_1.z.string(),
    STRIPE_SECRET_KEY: zod_1.z.string()
});
const envResult = envSchema.safeParse(process.env);
if (!envResult.success) {
    console.error(" Invalid environment variables:", envResult.error.format());
    process.exit(1);
}
exports.env = envResult.data;

import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  PORT: z.coerce.number().default(3000),
    SMTP_HOST:z.coerce.string(),
    SMTP_PORT:z.coerce.number().default(587)
    ,EMAIL:z.string().email(),
    EMAILPASS:z.string(),
    JWT_REFRESH_SECRET:z.string()
    ,JWT_ACCESS_SECRET:z.string(),
    JWT_REFRESH_TOKEN_EXPIRES:z.string(),
    JWT_ACCESS_TOKEN_EXPIRES:z.string(),
    FRONTEND_URL:z.url(),
    CLOUDINARY_API_SECRET:z.string(),
    CLOUDINARY_API:z.string(),
    CLOUD_NAME:z.string(),
    STRIPE_SECRET_KEY:z.string()
});

const envResult = envSchema.safeParse(process.env);

if (!envResult.success) {
  console.error(" Invalid environment variables:", envResult.error.format());
  process.exit(1);
}

export const env = envResult.data;
import { v2 as cloudinary } from "cloudinary"
import { env } from "./config.env"

cloudinary.config({
  cloud_name: env.CLOUD_NAME,
  api_key: env.CLOUDINARY_API,
  api_secret: env.CLOUDINARY_API_SECRET,
  secure: true,
  upload_prefix: "https://api-eu.cloudinary.com"
})

export { cloudinary }
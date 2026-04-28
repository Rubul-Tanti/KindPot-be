"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloudinary = void 0;
const cloudinary_1 = require("cloudinary");
Object.defineProperty(exports, "cloudinary", { enumerable: true, get: function () { return cloudinary_1.v2; } });
const config_env_1 = require("./config.env");
cloudinary_1.v2.config({
    cloud_name: config_env_1.env.CLOUD_NAME,
    api_key: config_env_1.env.CLOUDINARY_API,
    api_secret: config_env_1.env.CLOUDINARY_API_SECRET,
    secure: true,
    upload_prefix: "https://api-eu.cloudinary.com"
});

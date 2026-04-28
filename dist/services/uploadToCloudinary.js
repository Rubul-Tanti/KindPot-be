"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadToCloudinary = void 0;
const cloudinaryConfig_1 = require("../config/cloudinaryConfig");
const fs_1 = __importDefault(require("fs"));
const uploadToCloudinary = async (file) => {
    const uniqueName = file.filename;
    console.log(uniqueName);
    const result = await cloudinaryConfig_1.cloudinary.uploader.upload(file.path, {
        folder: "products",
        public_id: file.filename
    });
    fs_1.default.unlinkSync(file.path);
    return {
        public_id: uniqueName,
        url: result.secure_url
    };
};
exports.uploadToCloudinary = uploadToCloudinary;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailTransporter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const config_env_1 = require("../config/config.env");
exports.emailTransporter = nodemailer_1.default.createTransport({
    host: config_env_1.env.SMTP_HOST,
    port: Number(config_env_1.env.SMTP_PORT),
    secure: Number(config_env_1.env.SMTP_PORT) === 465,
    auth: {
        user: config_env_1.env.EMAIL,
        pass: config_env_1.env.EMAILPASS,
    },
});

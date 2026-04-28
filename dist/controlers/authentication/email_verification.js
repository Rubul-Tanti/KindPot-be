"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailverification = void 0;
const prisma_1 = require("../../db/prisma");
const emailvalidation_1 = __importDefault(require("../../utils/validatons/emailvalidation"));
const logger_1 = __importDefault(require("../../utils/logger"));
const sendOtp_1 = require("../../services/emailService/sendOtp");
const generateOtp_1 = require("../../utils/generateOtp");
const emailverification = async (req, res) => {
    logger_1.default.info("hit emailverification");
    const result = emailvalidation_1.default.safeParse(req.body);
    if (result.error) {
        logger_1.default.warn("Invalid email input", { error: result.error });
        return res.status(400).json({ message: "Invalid email" });
    }
    const { email } = result.data;
    const userAlreadyExist = await prisma_1.prisma.user.findFirst({ where: { email } });
    if (userAlreadyExist !== null) {
        logger_1.default.warn('user already exist', userAlreadyExist);
        return res.status(400).json({ message: 'user already exist' });
    }
    const otp = (0, generateOtp_1.generateOtp)().toString();
    try {
        const existingOtp = await prisma_1.prisma.otp.findFirst({
            where: { email }
        });
        if (existingOtp) {
            const diffMinutes = (Date.now() - existingOtp.createdAt.getTime()) / 1000 / 60;
            if (diffMinutes < 5) {
                const remaining = 5 - diffMinutes;
                logger_1.default.warn("OTP rate limit hit", { email });
                return res.status(429).json({
                    message: `Please wait ${Math.ceil(remaining)} minutes before requesting another OTP`
                });
            }
            await prisma_1.prisma.otp.deleteMany({ where: { email } });
        }
        await prisma_1.prisma.otp.create({
            data: { email, otp, expiresAt: new Date(Date.now() + 5 * 60 * 1000) }
        });
    }
    catch (dbError) {
        logger_1.default.error("Database error during OTP flow", { email, error: dbError });
        return res.status(500).json({
            success: false,
            message: "An internal server error occurred. Please try again later."
        });
    }
    try {
        await (0, sendOtp_1.sendOtp)(email, otp);
    }
    catch (emailError) {
        logger_1.default.error("Failed to send OTP email", { email, error: emailError });
        try {
            await prisma_1.prisma.otp.deleteMany({ where: { email } });
        }
        catch (rollbackError) {
            logger_1.default.error("Failed to rollback OTP after email failure", { email, error: rollbackError });
        }
        return res.status(500).json({
            success: false,
            message: "Failed to send OTP. Please try again later."
        });
    }
    logger_1.default.info("OTP sent successfully", { email });
    return res.status(200).json({
        success: true,
        message: "If the email exists, an OTP has been sent for verification."
    });
};
exports.emailverification = emailverification;

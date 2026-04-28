"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerWithGoogle = void 0;
const errorHandler_1 = require("../../middleware/errorHandler");
const logger_1 = __importDefault(require("../../utils/logger"));
const prisma_1 = require("../../db/prisma");
const generateToken_1 = require("../../utils/generateToken");
const registerWithGoogle = async (req, res) => {
    try {
        const { token } = req.body;
        if (!token) {
            logger_1.default.warn("google auth failed: token missing");
            return res.status(400).json({ success: false, message: "token not found" });
        }
        const googleResponse = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        if (!googleResponse.ok) {
            logger_1.default.error("google auth failed: invalid token response from google");
            return res.status(401).json({ message: 'invalid token' });
        }
        const googleUser = await googleResponse.json();
        if (!googleUser.email_verified) {
            logger_1.default.warn(`google auth rejected: email not verified for ${googleUser.email}`);
            return res
                .status(403)
                .json({ success: false, message: "google email not verified try different gmail" });
        }
        const existingUser = await prisma_1.prisma.user.findFirst({
            where: {
                OR: [{ email: googleUser.email }, { googleId: googleUser.sub }],
            },
        });
        if (existingUser) {
            const access_token = await (0, generateToken_1.generateAccessToken)(existingUser.publicId);
            const refresh_token = await (0, generateToken_1.generateRefreshToken)(existingUser.publicId);
            logger_1.default.info(`google login success for ${existingUser.email}`);
            const ActiveSubs = await prisma_1.prisma.subscriptionOrder.findFirst({ where: { userId: req?.user?.id, status: "COMPLETED", periodEnd: { gte: new Date() } } });
            if (existingUser.role !== 'ADMIN') {
                if (!ActiveSubs) {
                    const vuser = await prisma_1.prisma.user.update({ where: { id: existingUser.id }, data: { role: "VIEWER" } });
                }
                else {
                    const vuser = await prisma_1.prisma.user.update({ where: { id: existingUser.id }, data: { role: "SUBSCRIBER" } });
                }
            }
            return res
                .status(200)
                .cookie("refresh_token", refresh_token, {
                httpOnly: true,
                secure: true,
                sameSite: "strict",
            })
                .json({
                success: true,
                message: "login successful",
                data: {
                    userName: existingUser.userName,
                    email: existingUser.email,
                    role: existingUser.role,
                    profilePicture: existingUser.profilePicture,
                },
                subscription: ActiveSubs,
                access_token,
            });
        }
        const newUser = await prisma_1.prisma.user.create({
            data: {
                userName: googleUser.name,
                email: googleUser.email,
                profilePicture: googleUser.picture,
                googleId: googleUser.sub,
                authProvider: "GOOGLE",
            },
        });
        const access_token = await (0, generateToken_1.generateAccessToken)(newUser.publicId);
        const refresh_token = await (0, generateToken_1.generateRefreshToken)(newUser.publicId);
        logger_1.default.info(`google account created for ${newUser.email}`);
        return res
            .status(201)
            .cookie("refresh_token", refresh_token, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
        })
            .json({
            success: true,
            message: "user created successfully",
            data: {
                userName: newUser.userName,
                email: newUser.email,
            },
            access_token,
        });
    }
    catch (error) {
        logger_1.default.error("error while registering with google", error);
        throw new errorHandler_1.ApiError("internal server error", 500);
    }
};
exports.registerWithGoogle = registerWithGoogle;

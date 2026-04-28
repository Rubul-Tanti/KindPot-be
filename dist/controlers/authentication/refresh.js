"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshUser = void 0;
const logger_1 = __importDefault(require("../../utils/logger"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_env_1 = require("../../config/config.env");
const errorHandler_1 = require("../../middleware/errorHandler");
const prisma_1 = require("../../db/prisma");
const loginUser_1 = require("./loginUser");
const generateToken_1 = require("../../utils/generateToken");
const refreshUser = async (req, res) => {
    try {
        logger_1.default.info("hit refresh user");
        const cookie = req.cookies.refresh_token;
        if (!cookie) {
            return res.status(401).json({ message: "no cookie found" });
        }
        const decode = jsonwebtoken_1.default.verify(cookie, config_env_1.env.JWT_REFRESH_SECRET);
        const user = await prisma_1.prisma.user.findUnique({ where: { publicId: decode.userId } });
        if (!user) {
            return res.status(404).json({ message: 'not found' });
        }
        const access_token = (0, generateToken_1.generateAccessToken)(user.publicId);
        const refresh_token = (0, generateToken_1.generateRefreshToken)(user.publicId);
        res.status(200).cookie('refresh_token', refresh_token, { httpOnly: true, secure: true }).json({ message: "refreash successfully", success: true, data: (0, loginUser_1.getsafeUser)(user), access_token });
    }
    catch (e) {
        console.log(e);
        if (e && typeof e === "object" && "name" in e && e === 'TokenExpiredError') {
            return res.status(404).json({ message: 'token expired' });
        }
        throw new errorHandler_1.ApiError("Token invalid", 500);
    }
};
exports.refreshUser = refreshUser;

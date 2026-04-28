"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getsafeUser = void 0;
const errorHandler_1 = require("../../middleware/errorHandler");
const logger_1 = __importDefault(require("../../utils/logger"));
const userValidation_1 = require("../../utils/validatons/userValidation");
const prisma_1 = require("../../db/prisma");
const hashPassword_1 = require("../../utils/hashPassword");
const generateToken_1 = require("../../utils/generateToken");
const getsafeUser = (user) => {
    return {
        email: user.email,
        profilePicture: user.profilePicture,
        role: user.role,
        id: user.publicId,
        phoneNumber: user.phoneNumber,
        userName: user.userName,
    };
};
exports.getsafeUser = getsafeUser;
const LoginUser = async (req, res) => {
    try {
        const validationResult = await userValidation_1.loginUserSchema.safeParse(req.body);
        if (validationResult.error) {
            logger_1.default.warn('error while validation', validationResult.error.flatten());
            return res.status(400).json({ error: validationResult.error.flatten(), message: 'validation error' });
        }
        const { email, password } = validationResult.data;
        const user = await prisma_1.prisma.user.findFirst({ where: { email, authProvider: 'EMAIL' } });
        if (user === null) {
            logger_1.default.warn('email or password is incorrect');
            return res.status(401).json({ message: "email or password is incorrect" });
        }
        const matchedPassword = await (0, hashPassword_1.comparePassword)(password, user.password);
        if (!matchedPassword) {
            logger_1.default.warn('email or password is incorrect');
            return res.status(401).json({ message: "email or password is incorrect" });
        }
        const ActiveSubs = await prisma_1.prisma.subscriptionOrder.findFirst({ where: { userId: req?.user?.id, status: "COMPLETED", periodEnd: { gte: new Date() } } });
        if (user.role !== 'ADMIN') {
            if (!ActiveSubs) {
                const vuser = await prisma_1.prisma.user.update({ where: { id: user.id }, data: { role: "VIEWER" } });
            }
            else {
                const vuser = await prisma_1.prisma.user.update({ where: { id: user.id }, data: { role: "SUBSCRIBER" } });
            }
        }
        const access_token = (0, generateToken_1.generateAccessToken)(user.publicId);
        const refresh_token = (0, generateToken_1.generateRefreshToken)(user.publicId);
        logger_1.default.info('login successfully', user.id);
        res.status(200).cookie("refresh_token", refresh_token, { httpOnly: true, secure: true }).json({ success: true, message: "login successfully", subscription: ActiveSubs, data: (0, exports.getsafeUser)(user), access_token });
    }
    catch (e) {
        logger_1.default.error('error while login user', e);
        throw new errorHandler_1.ApiError('internal server error', 500);
    }
};
exports.default = LoginUser;

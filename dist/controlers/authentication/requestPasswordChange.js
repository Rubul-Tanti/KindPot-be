"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler_1 = require("../../middleware/errorHandler");
const zod_1 = require("zod");
const prisma_1 = require("../../db/prisma");
const resetPasswordToken_1 = require("../../utils/resetPasswordToken");
const sendResetToken_1 = __importDefault(require("../../services/emailService/sendResetToken"));
const loginUser_1 = require("./loginUser");
const logger_1 = __importDefault(require("../../utils/logger"));
const zod = zod_1.z.object({
    email: zod_1.z.string().email("invalid email")
});
const requestPasswordChange = async (req, res) => {
    try {
        const { email } = req.body;
        const validationResult = await zod.safeParse(req.body);
        if (validationResult.error) {
            return res.status(400).json({ message: 'validation error', error: validationResult.error.flatten() });
        }
        const user = await prisma_1.prisma.user.findUnique({ where: { email } });
        if (!user) {
            return res.status(400).json({ message: 'user now found', });
        }
        const { token, hashedToken } = (0, resetPasswordToken_1.generateResetPasswordToken)();
        const updateUser = await prisma_1.prisma.user.update({ where: { email }, data: {
                resetPasswordToken: hashedToken,
                resetPasswordTokenExpires: new Date(Date.now() + 15 * 60 * 1000)
            } });
        await (0, sendResetToken_1.default)(token, email);
        res.status(200).json({ success: true, message: 'is account exist with this email we will send a email with reset link', data: (0, loginUser_1.getsafeUser)(updateUser) });
    }
    catch (e) {
        logger_1.default.error('error while requesting for password reset', e);
        throw new errorHandler_1.ApiError("internal server error", 500);
    }
};
exports.default = requestPasswordChange;

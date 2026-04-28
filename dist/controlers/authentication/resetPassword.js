"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const errorHandler_1 = require("../../middleware/errorHandler");
const prisma_1 = require("../../db/prisma");
const resetPasswordToken_1 = require("../../utils/resetPasswordToken");
const hashPassword_1 = require("../../utils/hashPassword");
const loginUser_1 = require("./loginUser");
const zod = zod_1.z.object({
    url: zod_1.z.string(),
    newPassword: zod_1.z.string().min(3).max(12),
    email: zod_1.z.string().email('invalid email')
});
const resetPassword = async (req, res) => {
    try {
        const validationResult = await zod.safeParse(req.body);
        if (validationResult.error) {
            return res.status(400).json({ message: 'validation error', error: validationResult.error.flatten() });
        }
        const { email, url, newPassword } = validationResult.data;
        const token = (0, resetPasswordToken_1.HashResetPasswordToken)(url);
        const user = await prisma_1.prisma.user.findFirst({ where: { resetPasswordToken: token, resetPasswordTokenExpires: { gt: new Date() }, email } });
        console.log(user);
        if (!user) {
            return res.status(404).json({ message: "reset token expired please try again" });
        }
        const hashedPassword = await (0, hashPassword_1.hashPassword)(newPassword);
        const updatedUser = await prisma_1.prisma.user.update({ where: { id: user.id }, data: { password: hashedPassword, resetPasswordToken: null, resetPasswordTokenExpires: null } });
        res.status(200).json({ success: true, message: "password reset successfully", data: (0, loginUser_1.getsafeUser)(updatedUser) });
    }
    catch (e) {
        console.log(e);
        throw new errorHandler_1.ApiError("internal server error", 500);
    }
};
exports.default = resetPassword;

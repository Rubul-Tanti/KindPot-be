"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userValidation_1 = require("../../utils/validatons/userValidation");
const prisma_1 = require("../../db/prisma");
const hashPassword_1 = require("../../utils/hashPassword");
const errorHandler_1 = require("../../middleware/errorHandler");
const generateToken_1 = require("../../utils/generateToken");
const logger_1 = __importDefault(require("../../utils/logger"));
const loginUser_1 = require("./loginUser");
const registerUser = async (req, res) => {
    logger_1.default.info("hit register user");
    try {
        const date = new Date();
        const validationResult = await userValidation_1.registerUserSchema.safeParse(req.body);
        if (validationResult.error) {
            logger_1.default.error('validation failed at register user', req.body);
            return res.status(400).json({ message: validationResult.error.flatten() });
        }
        const { email, password, otp, userName } = validationResult.data;
        const userAlreadyExist = await prisma_1.prisma.user.findFirst({ where: { email } });
        if (userAlreadyExist !== null) {
            logger_1.default.warn("user already exist");
            return res.status(400).json({ message: "user already exist" });
        }
        const otpObj = await prisma_1.prisma.otp.findFirst({ where: { email, otp } });
        if (otpObj === null) {
            return res.status(402).json({ message: 'otp does not match' });
        }
        const now = date.getTime();
        const createdAt = otpObj.createdAt.getTime();
        const remainingTime = (now - createdAt) / 1000 / 60;
        if (remainingTime > 5) {
            prisma_1.prisma.user.deleteMany({ where: { email } });
            return res.status(402).json({ message: 'otp expired, please try again later' });
        }
        const hashedPassword = await (0, hashPassword_1.hashPassword)(password);
        const newUser = await prisma_1.prisma.user.create({ data: {
                email: email,
                userName,
                password: hashedPassword
            } });
        logger_1.default.info('new user create', newUser);
        if (newUser == null) {
            throw new errorHandler_1.ApiError('error create new user', 500);
        }
        await prisma_1.prisma.otp.delete({ where: { email } });
        const access_token = await (0, generateToken_1.generateAccessToken)(newUser.publicId);
        const refresh_token = await (0, generateToken_1.generateRefreshToken)(newUser.publicId);
        res.status(200).cookie("refresh_token", refresh_token, { httpOnly: true, secure: true }).json({ success: true, message: 'user created successfully', data: (0, loginUser_1.getsafeUser)(newUser), access_token });
    }
    catch (e) {
        logger_1.default.error("error registering user", e);
        throw new errorHandler_1.ApiError('internal server error', 500);
    }
};
exports.default = registerUser;

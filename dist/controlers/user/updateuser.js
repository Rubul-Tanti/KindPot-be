"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.handleIsActive = exports.asignRole = exports.updateUser = void 0;
const errorHandler_1 = require("../../middleware/errorHandler");
const logger_1 = __importDefault(require("../../utils/logger"));
const userValidation_1 = require("../../utils/validatons/userValidation");
const prisma_1 = require("../../db/prisma");
const client_1 = require("@prisma/client/runtime/client");
const loginUser_1 = require("../authentication/loginUser");
const updateUser = async (req, res) => {
    logger_1.default.info("hit update user");
    try {
        const validationResult = await userValidation_1.updateUserSchema.safeParse(req.body);
        if (validationResult.error) {
            return res.status(400).json({ message: 'validation error', error: validationResult.error.flatten() });
        }
        try {
            const user = await prisma_1.prisma.user.update({ where: { id: req.user?.id, deletedAt: null }, data: validationResult.data });
            res.status(200).json({ message: "updated successfully", data: user, });
            logger_1.default.info("updated user", user);
        }
        catch {
            return res.status(402).json({ message: 'not authorized' });
        }
    }
    catch (e) {
        logger_1.default.error("error while updating user", e);
        throw new errorHandler_1.ApiError("internal server error", 500);
    }
};
exports.updateUser = updateUser;
const asignRole = async (req, res) => {
    try {
        const validRoles = ['ADMIN', 'SUBSCRIBER', 'VIEWER'];
        const userId = req.params.id;
        const role = req.body.role;
        if (!role || !validRoles.includes(role)) {
            return res.status(400).json({ message: "valid role is required" });
        }
        const newUser = await prisma_1.prisma.user.update({ where: { publicId: userId, deletedAt: null }, data: { role } });
        return res.status(200).json({ message: "successfully assigned role ", data: (0, loginUser_1.getsafeUser)(newUser) });
    }
    catch (e) {
        logger_1.default.error("error while updating user", e);
        if (e instanceof client_1.PrismaClientKnownRequestError && e.code === 'P2025') {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        throw new errorHandler_1.ApiError("internal server error", 500);
    }
};
exports.asignRole = asignRole;
const handleIsActive = async (req, res) => {
    try {
        const userId = req.params.id;
        const isActive = req.body.isActive;
        if (typeof isActive !== 'boolean') {
            return res.status(400).json({ message: "isActive is required" });
        }
        const newUser = await prisma_1.prisma.user.update({ where: { publicId: userId, deletedAt: null }, data: { isActive } });
        return res.status(200).json({ message: "successfully updatedIsActive ", data: (0, loginUser_1.getsafeUser)(newUser) });
    }
    catch (e) {
        logger_1.default.error("error while updating user", e);
        if (e instanceof client_1.PrismaClientKnownRequestError && e.code === 'P2025') {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        throw new errorHandler_1.ApiError("internal server error", 500);
    }
};
exports.handleIsActive = handleIsActive;
const deleteUser = async (req, res) => {
    try {
        logger_1.default.info('hit delete user controler');
        const id = req.user?.id;
        if (!id) {
            return res.status(401).json({ message: 'not authorized' });
        }
        const deletedUser = await prisma_1.prisma.user.update({ where: { id: req.user?.id }, data: { deletedAt: new Date() } });
        res.status(200).json({ message: 'user deleted successfully', data: (0, loginUser_1.getsafeUser)(deletedUser) });
    }
    catch (e) {
        logger_1.default.error("error deleting user", req.user?.id);
        throw new errorHandler_1.ApiError('internal server error', 500);
    }
};
exports.deleteUser = deleteUser;

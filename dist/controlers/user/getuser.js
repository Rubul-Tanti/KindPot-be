"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.getUsers = void 0;
const errorHandler_1 = require("../../middleware/errorHandler");
const logger_1 = __importDefault(require("../../utils/logger"));
const prisma_1 = require("../../db/prisma");
const zod_1 = require("zod");
// Validation schema for pagination query params
const paginationSchema = zod_1.z.object({
    page: zod_1.z.string().transform(Number).refine(n => n > 0, 'Page must be greater than 0').optional().default(1),
    limit: zod_1.z.string().transform(Number).refine(n => n > 0 && n <= 100, 'Limit must be between 1 and 100').optional().default(10),
});
const getUsers = async (req, res) => {
    logger_1.default.info("hit get users");
    try {
        // Validate pagination params
        const validationResult = paginationSchema.safeParse(req.query);
        if (validationResult.error) {
            return res.status(400).json({
                message: 'validation error',
                error: validationResult.error.flatten()
            });
        }
        const { page, limit } = validationResult.data;
        const skip = (page - 1) * limit;
        // Fetch total count of users
        const totalCount = await prisma_1.prisma.user.count({
            where: { deletedAt: null }
        });
        // Fetch users with pagination
        const users = await prisma_1.prisma.user.findMany({
            where: { deletedAt: null },
            skip,
            take: limit || 10,
            select: {
                id: true,
                publicId: true,
                email: true,
                userName: true,
                firstName: true,
                lastName: true,
                profilePicture: true,
                phoneNumber: true,
                role: true,
                isActive: true,
                createdAt: true,
                updatedAt: true,
            },
            orderBy: { createdAt: 'desc' }
        });
        const totalPages = Math.ceil(totalCount / limit);
        res.status(200).json({
            message: 'Users fetched successfully',
            data: users,
            pagination: {
                currentPage: page,
                pageSize: limit,
                totalCount,
                totalPages,
                hasNextPage: page < totalPages,
                hasPreviousPage: page > 1,
            }
        });
        logger_1.default.info(`Fetched ${users.length} users with pagination`, { page, limit });
    }
    catch (e) {
        logger_1.default.error("error while fetching users", e);
        throw new errorHandler_1.ApiError("internal server error", 500);
    }
};
exports.getUsers = getUsers;
// Optional: Get single user by ID
const getUserById = async (req, res) => {
    logger_1.default.info("hit get user by id");
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({ message: 'User ID is required' });
        }
        const user = await prisma_1.prisma.user.findUnique({
            where: { publicId: id, deletedAt: null },
            select: {
                id: true,
                publicId: true,
                email: true,
                userName: true,
                firstName: true,
                lastName: true,
                profilePicture: true,
                phoneNumber: true,
                role: true,
                isActive: true,
                createdAt: true,
                updatedAt: true,
            }
        });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({
            message: 'User fetched successfully',
            data: user
        });
        logger_1.default.info("fetched user", user);
    }
    catch (e) {
        logger_1.default.error("error while fetching user", e);
        throw new errorHandler_1.ApiError("internal server error", 500);
    }
};
exports.getUserById = getUserById;

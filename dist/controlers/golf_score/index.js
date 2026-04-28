"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLastFiveScores = exports.getAllGolfScores = exports.getUserScoreStats = exports.deleteGolfScore = exports.updateGolfScore = exports.getGolfScoreById = exports.getUserGolfScores = exports.createGolfScore = void 0;
const errorHandler_1 = require("../../middleware/errorHandler");
const logger_1 = __importDefault(require("../../utils/logger"));
const golfScoreValidation_1 = require("../../utils/validatons/golfScoreValidation");
const prisma_1 = require("../../db/prisma");
// CREATE GOLF SCORE
const createGolfScore = async (req, res) => {
    try {
        const validation = golfScoreValidation_1.golfScoreSchema.safeParse(req.body);
        const userId = req.user?.id;
        if (!userId) {
            return res.status(401).json({
                message: "Unauthorized - User not found",
            });
        }
        if (!validation.success) {
            return res.status(400).json({
                message: "Invalid input data",
                error: validation.error.flatten().fieldErrors,
            });
        }
        // Check if user exists
        const userExists = await prisma_1.prisma.user.findUnique({
            where: { id: userId },
        });
        if (!userExists) {
            return res.status(404).json({
                message: "User not found",
            });
        }
        // Check for duplicate score on same date
        const dateOnly = validation.data.playedOn.split('T')[0];
        const existingScore = await prisma_1.prisma.golfScore.findFirst({
            where: {
                userId,
                playedOn: new Date(dateOnly),
            },
        });
        if (existingScore) {
            return res.status(409).json({
                message: "Score already exists for this date",
            });
        }
        const golfScore = await prisma_1.prisma.golfScore.create({
            data: {
                userId,
                score: validation.data.score,
                playedOn: new Date(dateOnly),
            },
            include: { user: { select: { id: true, userName: true, email: true } } },
        });
        logger_1.default.info(`Golf score created: ${golfScore.id}`);
        res.status(201).json({
            message: "Golf score created successfully",
            data: golfScore,
        });
    }
    catch (error) {
        logger_1.default.error("Error creating golf score:", error);
        throw new errorHandler_1.ApiError("Internal server error", 500);
    }
};
exports.createGolfScore = createGolfScore;
// GET ALL GOLF SCORES (User's own scores)
const getUserGolfScores = async (req, res) => {
    try {
        const userId = req.user?.id;
        const { page = 1, limit = 10, sortBy = "playedOn", order = "desc" } = req.query;
        if (!userId) {
            return res.status(401).json({
                message: "Unauthorized - User not found",
            });
        }
        const pageNum = Math.max(1, parseInt(page) || 1);
        const limitNum = Math.min(100, Math.max(1, parseInt(limit) || 10));
        const skip = (pageNum - 1) * limitNum;
        const sortOrder = order.toLowerCase() === "asc" ? "asc" : "desc";
        const sortField = sortBy === "score" ? "score" : "playedOn";
        const [scores, total] = await Promise.all([
            prisma_1.prisma.golfScore.findMany({
                where: { userId },
                skip,
                take: limitNum,
                orderBy: { [sortField]: sortOrder },
            }),
            prisma_1.prisma.golfScore.count({ where: { userId } }),
        ]);
        res.status(200).json({
            message: "Golf scores retrieved successfully",
            data: scores,
            pagination: {
                total,
                page: pageNum,
                limit: limitNum,
                pages: Math.ceil(total / limitNum),
            },
        });
    }
    catch (error) {
        logger_1.default.error("Error fetching golf scores:", error);
        throw new errorHandler_1.ApiError("Internal server error", 500);
    }
};
exports.getUserGolfScores = getUserGolfScores;
// GET SINGLE GOLF SCORE
const getGolfScoreById = async (req, res) => {
    try {
        const id = req.params.id;
        const userId = req.user?.id;
        if (!userId) {
            return res.status(401).json({
                message: "Unauthorized - User not found",
            });
        }
        const golfScore = await prisma_1.prisma.golfScore.findUnique({
            where: { id },
            include: { user: { select: { id: true, userName: true, email: true } } },
        });
        if (!golfScore) {
            return res.status(404).json({
                message: "Golf score not found",
            });
        }
        // Check if user owns this score (unless they're admin)
        if (golfScore.userId !== userId && req.user?.role !== "ADMIN") {
            return res.status(403).json({
                message: "You don't have permission to access this score",
            });
        }
        res.status(200).json({
            message: "Golf score retrieved successfully",
            data: golfScore,
        });
    }
    catch (error) {
        logger_1.default.error("Error fetching golf score:", error);
        throw new errorHandler_1.ApiError("Internal server error", 500);
    }
};
exports.getGolfScoreById = getGolfScoreById;
// UPDATE GOLF SCORE
const updateGolfScore = async (req, res) => {
    try {
        const id = req.params.id;
        const userId = req.user?.id;
        const validation = golfScoreValidation_1.golfScoreUpdateSchema.safeParse(req.body);
        if (!userId) {
            return res.status(401).json({
                message: "Unauthorized - User not found",
            });
        }
        if (!validation.success) {
            return res.status(400).json({
                message: "Invalid input data",
                error: validation.error.flatten().fieldErrors,
            });
        }
        const golfScore = await prisma_1.prisma.golfScore.findUnique({
            where: { id },
        });
        if (!golfScore) {
            return res.status(404).json({
                message: "Golf score not found",
            });
        }
        // Check if user owns this score (unless they're admin)
        if (golfScore.userId !== userId && req.user?.role !== "ADMIN") {
            return res.status(403).json({
                message: "You don't have permission to update this score",
            });
        }
        // If updating playedOn, check for duplicate
        if (validation.data.playedOn) {
            const existingScore = await prisma_1.prisma.golfScore.findFirst({
                where: {
                    userId: golfScore.userId,
                    playedOn: new Date(validation.data.playedOn).toISOString().split('T')[0],
                    id: { not: id },
                },
            });
            if (existingScore) {
                return res.status(409).json({
                    message: "Score already exists for this date",
                });
            }
        }
        const updateData = {};
        if (validation.data.score)
            updateData.score = validation.data.score;
        if (validation.data.playedOn)
            updateData.playedOn = new Date(validation.data.playedOn);
        const updatedScore = await prisma_1.prisma.golfScore.update({
            where: { id },
            data: updateData,
            include: { user: { select: { id: true, userName: true, email: true } } },
        });
        logger_1.default.info(`Golf score updated: ${id}`);
        res.status(200).json({
            message: "Golf score updated successfully",
            data: updatedScore,
        });
    }
    catch (error) {
        logger_1.default.error("Error updating golf score:", error);
        throw new errorHandler_1.ApiError("Internal server error", 500);
    }
};
exports.updateGolfScore = updateGolfScore;
// DELETE GOLF SCORE
const deleteGolfScore = async (req, res) => {
    try {
        const id = req.params.id;
        const userId = req.user?.id;
        if (!userId) {
            return res.status(401).json({
                message: "Unauthorized - User not found",
            });
        }
        const golfScore = await prisma_1.prisma.golfScore.findUnique({
            where: { id },
        });
        if (!golfScore) {
            return res.status(404).json({
                message: "Golf score not found",
            });
        }
        // Check if user owns this score (unless they're admin)
        if (golfScore.userId !== userId && req.user?.role !== "ADMIN") {
            return res.status(403).json({
                message: "You don't have permission to delete this score",
            });
        }
        await prisma_1.prisma.golfScore.delete({
            where: { id },
        });
        logger_1.default.info(`Golf score deleted: ${id}`);
        res.status(200).json({
            message: "Golf score deleted successfully",
        });
    }
    catch (error) {
        logger_1.default.error("Error deleting golf score:", error);
        throw new errorHandler_1.ApiError("Internal server error", 500);
    }
};
exports.deleteGolfScore = deleteGolfScore;
// GET USER SCORE STATISTICS
const getUserScoreStats = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            return res.status(401).json({
                message: "Unauthorized - User not found",
            });
        }
        const scores = await prisma_1.prisma.golfScore.findMany({
            where: { userId },
        });
        if (scores.length === 0) {
            return res.status(200).json({
                message: "No scores found",
                data: {
                    totalScores: 0,
                    averageScore: 0,
                    bestScore: null,
                    worstScore: null,
                },
            });
        }
        const scoreValues = scores.map((s) => s.score);
        const totalScores = scoreValues.length;
        const averageScore = Math.round((scoreValues.reduce((a, b) => a + b, 0) / totalScores) * 100) / 100;
        const bestScore = Math.min(...scoreValues);
        const worstScore = Math.max(...scoreValues);
        res.status(200).json({
            message: "Score statistics retrieved successfully",
            data: {
                totalScores,
                averageScore,
                bestScore,
                worstScore,
            },
        });
    }
    catch (error) {
        logger_1.default.error("Error fetching score statistics:", error);
        throw new errorHandler_1.ApiError("Internal server error", 500);
    }
};
exports.getUserScoreStats = getUserScoreStats;
// GET ALL USERS' SCORES (Admin only)
const getAllGolfScores = async (req, res) => {
    try {
        const { page = 1, limit = 10, userId } = req.query;
        const pageNum = Math.max(1, parseInt(page) || 1);
        const limitNum = Math.min(100, Math.max(1, parseInt(limit) || 10));
        const skip = (pageNum - 1) * limitNum;
        const where = userId ? { userId: userId } : {};
        const [scores, total] = await Promise.all([
            prisma_1.prisma.golfScore.findMany({
                where,
                skip,
                take: limitNum,
                include: { user: { select: { id: true, userName: true, email: true } } },
                orderBy: { playedOn: "desc" },
            }),
            prisma_1.prisma.golfScore.count({ where }),
        ]);
        res.status(200).json({
            message: "All golf scores retrieved successfully",
            data: scores,
            pagination: {
                total,
                page: pageNum,
                limit: limitNum,
                pages: Math.ceil(total / limitNum),
            },
        });
    }
    catch (error) {
        logger_1.default.error("Error fetching all golf scores:", error);
        throw new errorHandler_1.ApiError("Internal server error", 500);
    }
};
exports.getAllGolfScores = getAllGolfScores;
// GET LAST FIVE SCORES
const getLastFiveScores = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            return res.status(401).json({
                message: "Unauthorized - User not found",
            });
        }
        const scores = await prisma_1.prisma.golfScore.findMany({
            where: { userId },
            orderBy: { playedOn: "desc" },
            take: 5,
            include: { user: { select: { id: true, userName: true, email: true } } },
        });
        res.status(200).json({
            message: "Last five golf scores retrieved successfully",
            data: scores,
            count: scores.length,
        });
    }
    catch (error) {
        logger_1.default.error("Error fetching last five golf scores:", error);
        throw new errorHandler_1.ApiError("Internal server error", 500);
    }
};
exports.getLastFiveScores = getLastFiveScores;

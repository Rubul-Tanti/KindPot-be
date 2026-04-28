"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleFeaturedStatus = exports.getFeaturedCharities = exports.toggleCharityStatus = exports.deleteCharity = exports.updateCharity = exports.getCharityById = exports.getAllCharities = exports.createCharity = void 0;
const errorHandler_1 = require("../../middleware/errorHandler");
const logger_1 = __importDefault(require("../../utils/logger"));
const charityValidation_1 = require("../../utils/validatons/charityValidation");
const prisma_1 = require("../../db/prisma");
const uploadToCloudinary_1 = require("../../services/uploadToCloudinary");
const user_1 = require("../../types/user");
// CREATE CHARITY
const createCharity = async (req, res) => {
    try {
        const validation = charityValidation_1.charitySchema.safeParse(req.body);
        const files = req.files;
        if (!validation.success) {
            return res.status(400).json({
                message: "Invalid input data",
                error: validation.error.flatten().fieldErrors,
            });
        }
        // Upload files to Cloudinary
        let uploads = [];
        if (files && files.length > 0) {
            uploads = await Promise.all(files.map((file) => (0, uploadToCloudinary_1.uploadToCloudinary)(file)));
        }
        // Get charity logo from first upload
        const charityLogo = uploads[0]?.url || user_1.dummyCharityUrl;
        const charityData = validation.data;
        const slug = charityData.name
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9\-]/g, "");
        // Create charity with images
        const charity = await prisma_1.prisma.charity.create({
            data: {
                name: charityData.name,
                description: charityData.description,
                websiteUrl: charityData.websiteUrl,
                country: charityData.country,
                slug,
                logoUrl: charityLogo,
                images: {
                    create: charityData.images.map((image, index) => ({
                        url: uploads[index + 1]?.url || uploads[0]?.url || user_1.dummyCharityUrl,
                        altText: image.altText,
                        order: image.order || index,
                    })),
                },
            },
            include: { images: true },
        });
        logger_1.default.info(`Charity created: ${charity.id}`);
        res.status(201).json({
            message: "Charity created successfully",
            data: charity,
        });
    }
    catch (error) {
        logger_1.default.error("Error creating charity:", error);
        throw new errorHandler_1.ApiError("Internal server error", 500);
    }
};
exports.createCharity = createCharity;
// GET ALL CHARITIES
const getAllCharities = async (req, res) => {
    try {
        const { page = 1, limit = 10, isActive, name } = req.query;
        const pageNum = Math.max(1, parseInt(page) || 1);
        const limitNum = Math.min(100, Math.max(1, parseInt(limit) || 10));
        const skip = (pageNum - 1) * limitNum;
        const where = {};
        if (isActive !== undefined) {
            where.isActive = isActive === "true";
        }
        if (name !== undefined) {
            where.slug = {
                startsWith: name,
            };
        }
        const [charities, total] = await Promise.all([
            prisma_1.prisma.charity.findMany({
                where,
                skip,
                take: limitNum,
                include: { userCharities: true, images: { orderBy: { order: "asc" } } },
                orderBy: { createdAt: "desc" },
            }),
            prisma_1.prisma.charity.count({ where })
        ]);
        res.status(200).json({
            message: "Charities retrieved successfully",
            data: charities,
            pagination: {
                total,
                page: pageNum,
                limit: limitNum,
                pages: Math.ceil(total / limitNum),
                hasNext: pageNum < Math.ceil(total / limitNum),
                hasPrev: pageNum > 1,
            },
        });
    }
    catch (error) {
        logger_1.default.error("Error fetching charities:", error);
        throw new errorHandler_1.ApiError("Internal server error", 500);
    }
};
exports.getAllCharities = getAllCharities;
// GET CHARITY BY ID
const getCharityById = async (req, res) => {
    try {
        const id = req.params.id;
        const charity = await prisma_1.prisma.charity.findUnique({
            where: { id },
            include: { images: { orderBy: { order: "asc" } } },
        });
        if (!charity) {
            return res.status(404).json({
                message: "Charity not found",
            });
        }
        res.status(200).json({
            message: "Charity retrieved successfully",
            data: charity,
        });
    }
    catch (error) {
        logger_1.default.error("Error fetching charity:", error);
        throw new errorHandler_1.ApiError("Internal server error", 500);
    }
};
exports.getCharityById = getCharityById;
// UPDATE CHARITY
const updateCharity = async (req, res) => {
    try {
        const id = req.params.id;
        const validation = charityValidation_1.charitySchema.partial().safeParse(req.body);
        const files = req.files;
        if (!validation.success) {
            return res.status(400).json({
                message: "Invalid input data",
                error: validation.error.flatten().fieldErrors,
            });
        }
        // Check if charity exists
        const existingCharity = await prisma_1.prisma.charity.findUnique({
            where: { id },
            include: { images: true },
        });
        if (!existingCharity) {
            return res.status(404).json({
                message: "Charity not found",
            });
        }
        // Upload new files if provided
        let uploads = [];
        if (files && files.length > 0) {
            uploads = await Promise.all(files.map((file) => (0, uploadToCloudinary_1.uploadToCloudinary)(file)));
        }
        const charityData = validation.data;
        const updateData = {};
        if (charityData.name) {
            updateData.name = charityData.name;
            updateData.slug = charityData.name
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^a-z0-9\-]/g, "");
        }
        if (charityData.description)
            updateData.description = charityData.description;
        if (charityData.websiteUrl !== undefined)
            updateData.websiteUrl = charityData.websiteUrl;
        if (charityData.country)
            updateData.country = charityData.country;
        // Handle images update
        if (charityData.images && charityData.images.length > 0) {
            updateData.images = {
                deleteMany: { charityId: id },
                create: charityData.images.map((image, index) => ({
                    url: uploads[index]?.url || existingCharity.images[index]?.url || user_1.dummyCharityUrl,
                    altText: image.altText,
                    order: image.order || index,
                })),
            };
        }
        const updatedCharity = await prisma_1.prisma.charity.update({
            where: { id },
            data: updateData,
            include: { images: { orderBy: { order: "asc" } } },
        });
        logger_1.default.info(`Charity updated: ${id}`);
        res.status(200).json({
            message: "Charity updated successfully",
            data: updatedCharity,
        });
    }
    catch (error) {
        logger_1.default.error("Error updating charity:", error);
        throw new errorHandler_1.ApiError("Internal server error", 500);
    }
};
exports.updateCharity = updateCharity;
// DELETE CHARITY
const deleteCharity = async (req, res) => {
    try {
        const id = req.params.id;
        const charity = await prisma_1.prisma.charity.findUnique({
            where: { id },
        });
        if (!charity) {
            return res.status(404).json({
                message: "Charity not found",
            });
        }
        await prisma_1.prisma.charity.delete({
            where: { id },
        });
        logger_1.default.info(`Charity deleted: ${id}`);
        res.status(200).json({
            message: "Charity deleted successfully",
        });
    }
    catch (error) {
        logger_1.default.error("Error deleting charity:", error);
        throw new errorHandler_1.ApiError("Internal server error", 500);
    }
};
exports.deleteCharity = deleteCharity;
// TOGGLE CHARITY STATUS
const toggleCharityStatus = async (req, res) => {
    try {
        const id = req.params.id;
        const charity = await prisma_1.prisma.charity.findUnique({
            where: { id },
        });
        if (!charity) {
            return res.status(404).json({
                message: "Charity not found",
            });
        }
        const updated = await prisma_1.prisma.charity.update({
            where: { id },
            data: { isActive: !charity.isActive },
            include: { images: { orderBy: { order: "asc" } } },
        });
        logger_1.default.info(`Charity status toggled: ${id}`);
        res.status(200).json({
            message: "Charity status updated successfully",
            data: updated,
        });
    }
    catch (error) {
        logger_1.default.error("Error toggling charity status:", error);
        throw new errorHandler_1.ApiError("Internal server error", 500);
    }
};
exports.toggleCharityStatus = toggleCharityStatus;
// GET FEATURED CHARITIES
const getFeaturedCharities = async (req, res) => {
    try {
        const { limit = 10 } = req.query;
        const limitNum = Math.min(100, Math.max(1, parseInt(limit) || 10));
        const charities = await prisma_1.prisma.charity.findMany({
            where: {
                isFeatured: true,
                isActive: true,
            },
            take: limitNum,
            include: { images: { orderBy: { order: "asc" } } },
            orderBy: { createdAt: "desc" },
        });
        res.status(200).json({
            message: "Featured charities retrieved successfully",
            data: charities,
        });
    }
    catch (error) {
        logger_1.default.error("Error fetching featured charities:", error);
        throw new errorHandler_1.ApiError("Internal server error", 500);
    }
};
exports.getFeaturedCharities = getFeaturedCharities;
// TOGGLE FEATURED STATUS
const toggleFeaturedStatus = async (req, res) => {
    try {
        const id = req.params.id;
        const charity = await prisma_1.prisma.charity.findUnique({
            where: { id },
        });
        if (!charity) {
            return res.status(404).json({
                message: "Charity not found",
            });
        }
        const updated = await prisma_1.prisma.charity.update({
            where: { id },
            data: { isFeatured: !charity.isFeatured },
            include: { images: { orderBy: { order: "asc" } } },
        });
        logger_1.default.info(`Charity featured status toggled: ${id}`);
        res.status(200).json({
            message: "Charity featured status updated successfully",
            data: updated,
        });
    }
    catch (error) {
        logger_1.default.error("Error toggling charity featured status:", error);
        throw new errorHandler_1.ApiError("Internal server error", 500);
    }
};
exports.toggleFeaturedStatus = toggleFeaturedStatus;

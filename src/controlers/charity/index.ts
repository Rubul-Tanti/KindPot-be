import { ApiError } from "../../middleware/errorHandler";
import logger from "../../utils/logger";
import { Request, Response } from "express";
import { charitySchema } from "../../utils/validatons/charityValidation";
import { prisma } from "../../db/prisma";
import { uploadToCloudinary } from "../../services/uploadToCloudinary";
import { dummyCharityUrl } from "../../types/user";

// CREATE CHARITY
export const createCharity = async (req: Request, res: Response) => {
    try {
        const validation = charitySchema.safeParse(req.body);
        const files = req.files as Express.Multer.File[] | undefined;

        if (!validation.success) {
            return res.status(400).json({
                message: "Invalid input data",
                error: validation.error.flatten().fieldErrors,
            });
        }

        // Upload files to Cloudinary
        let uploads: { public_id: string; url: string }[] = [];
        if (files && files.length > 0) {
            uploads = await Promise.all(files.map((file) => uploadToCloudinary(file)));
        }

        // Get charity logo from first upload
        const charityLogo = uploads[0]?.url || dummyCharityUrl;

        const charityData = validation.data;
        const slug = charityData.name
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9\-]/g, "");

        // Create charity with images
        const charity = await prisma.charity.create({
            data: {
                name: charityData.name,
                description: charityData.description,
                websiteUrl: charityData.websiteUrl,
                country: charityData.country,
                slug,
                logoUrl: charityLogo,
                images: {
                    create: charityData.images.map((image, index) => ({
                        url: uploads[index + 1]?.url || uploads[0]?.url || dummyCharityUrl,
                        altText: image.altText,
                        order: image.order || index,
                    })),
                },
            },
            include: { images: true },
        });

        logger.info(`Charity created: ${charity.id}`);
        res.status(201).json({
            message: "Charity created successfully",
            data: charity,
        });
    } catch (error) {
        logger.error("Error creating charity:", error);
        throw new ApiError("Internal server error", 500);
    }
};

// GET ALL CHARITIES
export const getAllCharities = async (req: Request, res: Response) => {
    try {
        const { page = 1, limit = 10, isActive,name } = req.query;

        const pageNum = Math.max(1, parseInt(page as string) || 1);
        const limitNum = Math.min(100, Math.max(1, parseInt(limit as string) || 10));
        const skip = (pageNum - 1) * limitNum;

        const where: any = {};
        if (isActive !== undefined) {
            where.isActive = isActive === "true";
        }if (name !== undefined) {
  where.slug = {
    startsWith: name,
  }
}

        const [charities, total] = await Promise.all([
            prisma.charity.findMany({
                where,
                skip,
                take: limitNum,
                include: {userCharities:true, images: { orderBy: { order: "asc" } } },
                orderBy: { createdAt: "desc" },
            }),
            prisma.charity.count({ where })
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
    } catch (error) {
        logger.error("Error fetching charities:", error);
        throw new ApiError("Internal server error", 500);
    }
};

// GET CHARITY BY ID
export const getCharityById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string;

        const charity = await prisma.charity.findUnique({
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
    } catch (error) {
        logger.error("Error fetching charity:", error);
        throw new ApiError("Internal server error", 500);
    }
};

// UPDATE CHARITY
export const updateCharity = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string;
        const validation = charitySchema.partial().safeParse(req.body);
        const files = req.files as Express.Multer.File[] | undefined;

        if (!validation.success) {
            return res.status(400).json({
                message: "Invalid input data",
                error: validation.error.flatten().fieldErrors,
            });
        }

        // Check if charity exists
        const existingCharity = await prisma.charity.findUnique({
            where: { id },
            include: { images: true },
        });

        if (!existingCharity) {
            return res.status(404).json({
                message: "Charity not found",
            });
        }

        // Upload new files if provided
        let uploads: { public_id: string; url: string }[] = [];
        if (files && files.length > 0) {
            uploads = await Promise.all(files.map((file) => uploadToCloudinary(file)));
        }

        const charityData = validation.data;
        const updateData: any = {};

        if (charityData.name) {
            updateData.name = charityData.name;
            updateData.slug = charityData.name
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^a-z0-9\-]/g, "");
        }
        if (charityData.description) updateData.description = charityData.description;
        if (charityData.websiteUrl !== undefined) updateData.websiteUrl = charityData.websiteUrl;
        if (charityData.country) updateData.country = charityData.country;

        // Handle images update
        if (charityData.images && charityData.images.length > 0) {
            updateData.images = {
                deleteMany: { charityId: id },
                create: charityData.images.map((image, index) => ({
                    url: uploads[index]?.url || existingCharity.images[index]?.url || dummyCharityUrl,
                    altText: image.altText,
                    order: image.order || index,
                })),
            };
        }

        const updatedCharity = await prisma.charity.update({
            where: { id },
            data: updateData,
            include: { images: { orderBy: { order: "asc" } } },
        });

        logger.info(`Charity updated: ${id}`);
        res.status(200).json({
            message: "Charity updated successfully",
            data: updatedCharity,
        });
    } catch (error) {
        logger.error("Error updating charity:", error);
        throw new ApiError("Internal server error", 500);
    }
};

// DELETE CHARITY
export const deleteCharity = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string;
        const charity = await prisma.charity.findUnique({
            where: { id },
        });

        if (!charity) {
            return res.status(404).json({
                message: "Charity not found",
            });
        }

        await prisma.charity.delete({
            where: { id },
        });

        logger.info(`Charity deleted: ${id}`);
        res.status(200).json({
            message: "Charity deleted successfully",
        });
    } catch (error) {
        logger.error("Error deleting charity:", error);
        throw new ApiError("Internal server error", 500);
    }
};


// TOGGLE CHARITY STATUS
export const toggleCharityStatus = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string;
        const charity = await prisma.charity.findUnique({
            where: { id },
        });

        if (!charity) {
            return res.status(404).json({
                message: "Charity not found",
            });
        }

        const updated = await prisma.charity.update({
            where: { id },
            data: { isActive: !charity.isActive },
            include: { images: { orderBy: { order: "asc" } } },
        });

        logger.info(`Charity status toggled: ${id}`);
        res.status(200).json({
            message: "Charity status updated successfully",
            data: updated,
        });
    } catch (error) {
        logger.error("Error toggling charity status:", error);
        throw new ApiError("Internal server error", 500);
    }
};

// GET FEATURED CHARITIES
export const getFeaturedCharities = async (req: Request, res: Response) => {
    try {
        const { limit = 10 } = req.query;

        const limitNum = Math.min(100, Math.max(1, parseInt(limit as string) || 10));

        const charities = await prisma.charity.findMany({
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
    } catch (error) {
        logger.error("Error fetching featured charities:", error);
        throw new ApiError("Internal server error", 500);
    }
};

// TOGGLE FEATURED STATUS
export const toggleFeaturedStatus = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string;
        const charity = await prisma.charity.findUnique({
            where: { id },
        });

        if (!charity) {
            return res.status(404).json({
                message: "Charity not found",
            });
        }

        const updated = await prisma.charity.update({
            where: { id },
            data: { isFeatured: !charity.isFeatured },
            include: { images: { orderBy: { order: "asc" } } },
        });

        logger.info(`Charity featured status toggled: ${id}`);
        res.status(200).json({
            message: "Charity featured status updated successfully",
            data: updated,
        });
    } catch (error) {
        logger.error("Error toggling charity featured status:", error);
        throw new ApiError("Internal server error", 500);
    }
};
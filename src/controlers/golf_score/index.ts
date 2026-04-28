import { ApiError } from "../../middleware/errorHandler";
import logger from "../../utils/logger";
import { Request, Response } from "express";
import { golfScoreSchema, golfScoreUpdateSchema } from "../../utils/validatons/golfScoreValidation";
import { prisma } from "../../db/prisma";

// CREATE GOLF SCORE
export const createGolfScore = async (req: Request, res: Response) => {
  try {
    const validation = golfScoreSchema.safeParse(req.body);
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
    const userExists = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!userExists) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Check for duplicate score on same date
    const dateOnly = validation.data.playedOn.split('T')[0];
    const existingScore = await prisma.golfScore.findFirst({
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

    const golfScore = await prisma.golfScore.create({
      data: {
        userId,
        score: validation.data.score,
        playedOn: new Date(dateOnly),
      },
      include: { user: { select: { id: true, userName: true, email: true } } },
    });

    logger.info(`Golf score created: ${golfScore.id}`);
    res.status(201).json({
      message: "Golf score created successfully",
      data: golfScore,
    });
  } catch (error) {
    logger.error("Error creating golf score:", error);
    throw new ApiError("Internal server error", 500);
  }
};

// GET ALL GOLF SCORES (User's own scores)
export const getUserGolfScores = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const { page = 1, limit = 10, sortBy = "playedOn", order = "desc" } = req.query;

    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized - User not found",
      });
    }

    const pageNum = Math.max(1, parseInt(page as string) || 1);
    const limitNum = Math.min(100, Math.max(1, parseInt(limit as string) || 10));
    const skip = (pageNum - 1) * limitNum;

    const sortOrder = (order as string).toLowerCase() === "asc" ? "asc" : "desc";
    const sortField = (sortBy as string) === "score" ? "score" : "playedOn";

    const [scores, total] = await Promise.all([
      prisma.golfScore.findMany({
        where: { userId },
        skip,
        take: limitNum,
        orderBy: { [sortField]: sortOrder },
      }),
      prisma.golfScore.count({ where: { userId } }),
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
  } catch (error) {
    logger.error("Error fetching golf scores:", error);
    throw new ApiError("Internal server error", 500);
  }
};

// GET SINGLE GOLF SCORE
export const getGolfScoreById = async (req: Request, res: Response) => {
  try {
    const id  = req.params.id as string
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized - User not found",
      });
    }

    const golfScore = await prisma.golfScore.findUnique({
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
  } catch (error) {
    logger.error("Error fetching golf score:", error);
    throw new ApiError("Internal server error", 500);
  }
};

// UPDATE GOLF SCORE
export const updateGolfScore = async (req: Request, res: Response) => {
  try {
    const id  = req.params.id as string
    const userId = req.user?.id;
    const validation = golfScoreUpdateSchema.safeParse(req.body);

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

    const golfScore = await prisma.golfScore.findUnique({
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
      const existingScore = await prisma.golfScore.findFirst({
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

    const updateData: any = {};
    if (validation.data.score) updateData.score = validation.data.score;
    if (validation.data.playedOn) updateData.playedOn = new Date(validation.data.playedOn);

    const updatedScore = await prisma.golfScore.update({
      where: { id },
      data: updateData,
      include: { user: { select: { id: true, userName: true, email: true } } },
    });

    logger.info(`Golf score updated: ${id}`);
    res.status(200).json({
      message: "Golf score updated successfully",
      data: updatedScore,
    });
  } catch (error) {
    logger.error("Error updating golf score:", error);
    throw new ApiError("Internal server error", 500);
  }
};

// DELETE GOLF SCORE
export const deleteGolfScore = async (req: Request, res: Response) => {
  try {
    const id  = req.params.id as string
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized - User not found",
      });
    }

    const golfScore = await prisma.golfScore.findUnique({
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

    await prisma.golfScore.delete({
      where: { id },
    });

    logger.info(`Golf score deleted: ${id}`);
    res.status(200).json({
      message: "Golf score deleted successfully",
    });
  } catch (error) {
    logger.error("Error deleting golf score:", error);
    throw new ApiError("Internal server error", 500);
  }
};

// GET USER SCORE STATISTICS
export const getUserScoreStats = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized - User not found",
      });
    }

    const scores = await prisma.golfScore.findMany({
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
  } catch (error) {
    logger.error("Error fetching score statistics:", error);
    throw new ApiError("Internal server error", 500);
  }
};

// GET ALL USERS' SCORES (Admin only)
export const getAllGolfScores = async (req: Request, res: Response) => {
  try {
    const { page = 1, limit = 10, userId } = req.query;

    const pageNum = Math.max(1, parseInt(page as string) || 1);
    const limitNum = Math.min(100, Math.max(1, parseInt(limit as string) || 10));
    const skip = (pageNum - 1) * limitNum;

    const where = userId ? { userId: userId as string } : {};

    const [scores, total] = await Promise.all([
      prisma.golfScore.findMany({
        where,
        skip,
        take: limitNum,
        include: { user: { select: { id: true, userName: true, email: true } } },
        orderBy: { playedOn: "desc" },
      }),
      prisma.golfScore.count({ where }),
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
  } catch (error) {
    logger.error("Error fetching all golf scores:", error);
    throw new ApiError("Internal server error", 500);
  }
};

// GET LAST FIVE SCORES
export const getLastFiveScores = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized - User not found",
      });
    }

    const scores = await prisma.golfScore.findMany({
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
  } catch (error) {
    logger.error("Error fetching last five golf scores:", error);
    throw new ApiError("Internal server error", 500);
  }
};

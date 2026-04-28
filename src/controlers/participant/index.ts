import { Request, Response } from "express";
import { prisma } from "../../db/prisma";
import logger from "../../utils/logger";


export const createParticipant = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId=req?.user?.id as string
    const { drawId,  score } = req.body;

    // Validation
    if (!drawId  || score === undefined) {
      res.status(400).json({
        success: false,
        message: "drawId, userId, and score are required",
      });
      return;
    }

    // Check if draw exists
    const draw = await prisma.draw.findUnique({
      where: { id: drawId },
    });

    if (!draw) {
      res.status(404).json({
        success: false,
        message: "Draw not found",
      });
      return;
    }

    // Check if draw is active
    if (draw.status !== "active") {
      res.status(400).json({
        success: false,
        message: `Draw is not active. Current status: ${draw.status}`,
      });
      return;
    }
    if(draw.drawNumber){
   res.status(400).json({
        success: false,
        message: `Draw result has been published. cannot participate`,
      });
      return;

    }

    // Check if entry is open (within entry date window)
    const now = new Date();
    if (now < draw.entryStartDate) {
      res.status(400).json({
        success: false,
        message: `Entry for this draw has not started yet. Starts on: ${draw.entryStartDate.toISOString()}`,
      });
      return;
    }

    if (now > draw.lastEntryDate) {
      res.status(400).json({
        success: false,
        message: `Entry for this draw has closed. Closed on: ${draw.lastEntryDate.toISOString()}`,
      });
      return;
    }

    // Check if user exists
    const userExists = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!userExists) {
      res.status(404).json({
        success: false,
        message: "User not found",
      });
      return;
    }

    // Check for duplicate entry (drawId, userId must be unique)
    const existingParticipant = await prisma.participant.findUnique({
      where: {
        drawId_userId: {
          drawId,
          userId,
        },
      },
    });

    if (existingParticipant) {
      res.status(409).json({
        success: false,
        message: "User is already a participant in this draw",
      });
      return;
    }

    // Create participant
    const participant = await prisma.participant.create({
      data: {
        drawId,
        userId,
        score,
      },
      include: {
        draw: true,
        user: {
          select: {
            id: true,
            userName: true,
            email: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    logger.info(`Participant created: ${participant.id}`);

    res.status(201).json({
      success: true,
      message: "Participant created successfully",
      data: participant,
    });
  } catch (error) {
    logger.error(`Error creating participant: ${error}`);
    res.status(500).json({
      success: false,
      message: "Error creating participant",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

/**
 * Get all participants (with optional filtering)
 */
export const getAllParticipants = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { drawId, userId, page = 1, limit = 10 } = req.query;

    // Build filter
    const where: any = {};
    if (drawId) where.drawId = drawId as string;
    if (userId) where.userId = userId as string;

    const pageNum = Math.max(1, parseInt(page as string) || 1);
    const limitNum = Math.max(1, parseInt(limit as string) || 10);
    const skip = (pageNum - 1) * limitNum;

    // Get total count
    const total = await prisma.participant.count({ where });

    // Get participants
    const participants = await prisma.participant.findMany({
      where,
      include: {
        draw: true,
        user: {
          select: {
            id: true,
            userName: true,
            email: true,
            firstName: true,
            lastName: true,
          },
        },
      },
      skip,
      take: limitNum,
      orderBy: {
        createdAt: "desc",
      },
    });

    res.status(200).json({
      success: true,
      message: "Participants retrieved successfully",
      data: participants,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        pages: Math.ceil(total / limitNum),
      },
    });
  } catch (error) {
    logger.error(`Error retrieving participants: ${error}`);
    res.status(500).json({
      success: false,
      message: "Error retrieving participants",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

/**
 * Get participant by ID
 */
export const getParticipantById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } =<{id:string}> req.params;

    const participant = await prisma.participant.findUnique({
      where: { id },
      include: {
        draw: true,
        user: {
          select: {
            id: true,
            userName: true,
            email: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    if (!participant) {
      res.status(404).json({
        success: false,
        message: "Participant not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Participant retrieved successfully",
      data: participant,
    });
  } catch (error) {
    logger.error(`Error retrieving participant: ${error}`);
    res.status(500).json({
      success: false,
      message: "Error retrieving participant",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

/**
 * Get participants by draw ID
 */
export const getParticipantsByDrawId = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { drawId } =<{drawId:string}> req.params;
    const { page = 1, limit = 20 } = req.query;

    // Check if draw exists
    const drawExists = await prisma.draw.findUnique({
      where: { id: drawId },
    });

    if (!drawExists) {
      res.status(404).json({
        success: false,
        message: "Draw not found",
      });
      return;
    }

    const pageNum = Math.max(1, parseInt(page as string) || 1);
    const limitNum = Math.max(1, parseInt(limit as string) || 20);
    const skip = (pageNum - 1) * limitNum;

    const total = await prisma.participant.count({
      where: { drawId },
    });

    const participants = await prisma.participant.findMany({
      where: { drawId },
      include: {
        user: {
          select: {
            id: true,
            userName: true,
            email: true,
            firstName: true,
            lastName: true,
            profilePicture: true,
          },
        },
      },
      orderBy: {
        score: "desc",
      },
      skip,
      take: limitNum,
    });

    res.status(200).json({
      success: true,
      message: "Participants retrieved successfully",
      data: participants,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        pages: Math.ceil(total / limitNum),
      },
    });
  } catch (error) {
    logger.error(`Error retrieving participants for draw: ${error}`);
    res.status(500).json({
      success: false,
      message: "Error retrieving participants",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

/**
 * Update participant score
 */
export const updateParticipantScore = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } =<{id:string}> req.params;
    const { score } = req.body;

    if (score === undefined) {
      res.status(400).json({
        success: false,
        message: "Score is required",
      });
      return;
    }

    // Check if participant exists
    const participantExists = await prisma.participant.findUnique({
      where: { id },
    });

    if (!participantExists) {
      res.status(404).json({
        success: false,
        message: "Participant not found",
      });
      return;
    }

    // Update participant
    const participant = await prisma.participant.update({
      where: { id },
      data: { score },
      include: {
        draw: true,
        user: {
          select: {
            id: true,
            userName: true,
            email: true,
          },
        },
      },
    });

    logger.info(`Participant score updated: ${id}`);

    res.status(200).json({
      success: true,
      message: "Participant score updated successfully",
      data: participant,
    });
  } catch (error) {
    logger.error(`Error updating participant: ${error}`);
    res.status(500).json({
      success: false,
      message: "Error updating participant",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

/**
 * Delete participant
 */
export const deleteParticipant = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = <{id:string}>req.params;

    // Check if participant exists
    const participantExists = await prisma.participant.findUnique({
      where: { id },
    });

    if (!participantExists) {
      res.status(404).json({
        success: false,
        message: "Participant not found",
      });
      return;
    }

    // Delete participant
    await prisma.participant.delete({
      where: { id },
    });

    logger.info(`Participant deleted: ${id}`);

    res.status(200).json({
      success: true,
      message: "Participant deleted successfully",
    });
  } catch (error) {
    logger.error(`Error deleting participant: ${error}`);
    res.status(500).json({
      success: false,
      message: "Error deleting participant",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

/**
 * Remove participant from draw
 */
export const removeParticipantFromDraw = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { drawId, userId } = req.body;

    if (!drawId || !userId) {
      res.status(400).json({
        success: false,
        message: "drawId and userId are required",
      });
      return;
    }

    // Find and delete participant
    const participant = await prisma.participant.findUnique({
      where: {
        drawId_userId: {
          drawId,
          userId,
        },
      },
    });

    if (!participant) {
      res.status(404).json({
        success: false,
        message: "Participant not found in this draw",
      });
      return;
    }

    await prisma.participant.delete({
      where: { id: participant.id },
    });

    logger.info(`Participant removed from draw: ${drawId}, user: ${userId}`);

    res.status(200).json({
      success: true,
      message: "Participant removed from draw successfully",
    });
  } catch (error) {
    logger.error(`Error removing participant from draw: ${error}`);
    res.status(500).json({
      success: false,
      message: "Error removing participant from draw",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

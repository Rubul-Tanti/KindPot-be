import { PrismaClient, DrawStatus, Draw } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * Draw Service - CRUD operations for Draw model
 */

//  CREATE

export const createDraw = async (
  adminId: string,
  drawData: {
    drawNumber: string;
    prizePool: number;
    currency?: string;
    entryStartDate: Date;
    lastEntryDate: Date;
    resultDate: Date;
    fiveMatchPct?: number;
    fourMatchPct?: number;
    threeMatchPct?: number;
  }
): Promise<Draw> => {
  // Validate prize percentages sum to 100
  const fiveMatch = drawData.fiveMatchPct || 40;
  const fourMatch = drawData.fourMatchPct || 35;
  const threeMatch = drawData.threeMatchPct || 25;

  if (fiveMatch + fourMatch + threeMatch !== 100) {
    throw new Error("Prize percentages must sum to 100");
  }

  const draw = await prisma.draw.create({
    data: {
      adminId,
      drawNumber: drawData.drawNumber,
      prizePool: drawData.prizePool,
      currency: drawData.currency || "USD",
      entryStartDate: drawData.entryStartDate,
      lastEntryDate: drawData.lastEntryDate,
      resultDate: drawData.resultDate,
      fiveMatchPct: fiveMatch,
      fourMatchPct: fourMatch,
      threeMatchPct: threeMatch,
      status: DrawStatus.active,
    },
    include: {
      admin: {
        select: { id: true, email: true, userName: true },
      },
      winners: true,
    },
  });

  return draw;
};

//  READ

export const getDrawById = async (drawId: string): Promise<Draw | null> => {
  return await prisma.draw.findUnique({
    where: { id: drawId },
    include: {
      admin: {
        select: { id: true, email: true, userName: true },
      },
      winners: {
        include: {
          user: {
            select: { id: true, email: true, userName: true },
          },
        },
      },
      rolledOverFrom: true,
      rolledOverTo: true,
    },
  });
};

export const getDrawByNumber = async (drawNumber: string): Promise<Draw | null> => {
  return await prisma.draw.findUnique({
    where: { drawNumber },
    include: {
      admin: {
        select: { id: true, email: true, userName: true },
      },
      winners: true,
    },
  });
};

export const getAllDraws = async (
  filters?: {
    status?: DrawStatus;
    limit?: number;
    offset?: number;
    orderBy?: "newest" | "oldest";
  }
): Promise<{ draws: Draw[]; total: number }> => {
  const limit = filters?.limit || 10;
  const offset = filters?.offset || 0;
  const orderBy = filters?.orderBy === "oldest" ? "asc" : "desc";

  const where = filters?.status ? { status: filters.status } : {};

  const [draws, total] = await Promise.all([
    prisma.draw.findMany({
      where,
      skip: offset,
      take: limit,
      orderBy: { createdAt: orderBy },
      include: {
        admin: {
          select: { id: true, email: true, userName: true },
        },
        winners: true,
      },
    }),
    prisma.draw.count({ where }),
  ]);

  return { draws, total };
};

export const getActiveDraws = async (): Promise<Draw[]> => {
  return await prisma.draw.findMany({
    where: { status: DrawStatus.active },
    include: {
      admin: {
        select: { id: true, email: true, userName: true },
      },
      winners: true,
    },
    orderBy: { resultDate: "asc" },
  });
};

export const getDrawsByDateRange = async (
  startDate: Date,
  endDate: Date
): Promise<Draw[]> => {
  return await prisma.draw.findMany({
    where: {
      resultDate: {
        gte: startDate,
        lte: endDate,
      },
    },
    include: {
      admin: {
        select: { id: true, email: true, userName: true },
      },
      winners: true,
    },
    orderBy: { resultDate: "asc" },
  });
};

//  UPDATE

export const updateDraw = async (
  drawId: string,
  updateData: {
    prizePool?: number;
    currency?: string;
    fiveMatchPct?: number;
    fourMatchPct?: number;
    threeMatchPct?: number;
    entryStartDate?: Date;
    lastEntryDate?: Date;
    resultDate?: Date;
  }
): Promise<Draw> => {
  // Validate prize percentages if provided
  if (
    updateData.fiveMatchPct ||
    updateData.fourMatchPct ||
    updateData.threeMatchPct
  ) {
    const currentDraw = await prisma.draw.findUnique({ where: { id: drawId } });
    if (!currentDraw) throw new Error("Draw not found");

    const fiveMatch = updateData.fiveMatchPct || currentDraw.fiveMatchPct;
    const fourMatch = updateData.fourMatchPct || currentDraw.fourMatchPct;
    const threeMatch = updateData.threeMatchPct || currentDraw.threeMatchPct;

    if (fiveMatch + fourMatch + threeMatch !== 100) {
      throw new Error("Prize percentages must sum to 100");
    }
  }

  return await prisma.draw.update({
    where: { id: drawId },
    data: updateData,
    include: {
      admin: {
        select: { id: true, email: true, userName: true },
      },
      winners: true,
    },
  });
};

export const updateDrawStatus = async (
  drawId: string,
  status: DrawStatus
): Promise<Draw> => {
  return await prisma.draw.update({
    where: { id: drawId },
    data: { status },
    include: {
      admin: {
        select: { id: true, email: true, userName: true },
      },
      winners: true,
    },
  });
};

//  JACKPOT ROLLOVER

export const addJackpotRollover = async (
  drawId: string,
  rolledOverFromId: string,
  additionalPrizePool?: number
): Promise<Draw> => {
  const currentDraw = await prisma.draw.findUnique({
    where: { id: drawId },
  });
  if (!currentDraw) throw new Error("Draw not found");

  const rolledOverFrom = await prisma.draw.findUnique({
    where: { id: rolledOverFromId },
  });
  if (!rolledOverFrom) throw new Error("Source draw not found");

  const newPrizePool =
    currentDraw.prizePool + (additionalPrizePool || 0);

  return await prisma.draw.update({
    where: { id: drawId },
    data: {
      jackpotRolledOver: true,
      rolledOverFromId,
      prizePool: newPrizePool,
    },
    include: {
      admin: {
        select: { id: true, email: true, userName: true },
      },
      winners: true,
      rolledOverFrom: true,
    },
  });
};

//  PRIZE CALCULATIONS

export const calculatePrizeTier = (
  prizePool: number,
  percentage: number
): number => {
  return Math.floor(prizePool * (percentage / 100));
};

export const calculatePrizePerWinner = (
  tierPrize: number,
  winnerCount: number
): number => {
  return Math.floor(tierPrize / winnerCount);
};

export const getPrizeDistribution = async (
  drawId: string
): Promise<{
  totalPool: number;
  fiveMatchPrize: number;
  fourMatchPrize: number;
  threeMatchPrize: number;
}> => {
  const draw = await prisma.draw.findUnique({
    where: { id: drawId },
  });

  if (!draw) throw new Error("Draw not found");

  return {
    totalPool: draw.prizePool,
    fiveMatchPrize: calculatePrizeTier(draw.prizePool, draw.fiveMatchPct),
    fourMatchPrize: calculatePrizeTier(draw.prizePool, draw.fourMatchPct),
    threeMatchPrize: calculatePrizeTier(draw.prizePool, draw.threeMatchPct),
  };
};

//  DELETE

export const deleteDraw = async (drawId: string): Promise<boolean> => {
  try {
    await prisma.draw.delete({
      where: { id: drawId },
    });
    return true;
  } catch (error) {
    throw new Error(`Cannot delete draw: ${error}`);
  }
};

//  UTILITY

export const getDrawStatistics = async (drawId: string): Promise<{
  totalWinners: number;
  fiveMatchWinners: number;
  fourMatchWinners: number;
  threeMatchWinners: number;
  verifiedWinners: number;
  pendingVerification: number;
  totalPaidOut: number;
}> => {
  const draw = await prisma.draw.findUnique({
    where: { id: drawId },
    include: {
      winners: true,
    },
  });

  if (!draw) throw new Error("Draw not found");

  const fiveMatch = draw.winners.filter(
    (w) => w.winnerType === "fiveMatch"
  ).length;
  const fourMatch = draw.winners.filter(
    (w) => w.winnerType === "fourMatch"
  ).length;
  const threeMatch = draw.winners.filter(
    (w) => w.winnerType === "threeMatch"
  ).length;
  const verified = draw.winners.filter(
    (w) => w.verificationStatus === "approved"
  ).length;
  const pending = draw.winners.filter(
    (w) => w.verificationStatus === "pending"
  ).length;
  const totalPaidOut = draw.winners
    .filter((w) => w.paymentStatus === "paid")
    .reduce((sum, w) => sum + (w.prizeAmount || 0), 0);

  return {
    totalWinners: draw.winners.length,
    fiveMatchWinners: fiveMatch,
    fourMatchWinners: fourMatch,
    threeMatchWinners: threeMatch,
    verifiedWinners: verified,
    pendingVerification: pending,
    totalPaidOut,
  };
};

export const getDrawsNeedingVerification = async (): Promise<Draw[]> => {
  return await prisma.draw.findMany({
    where: {
      status: DrawStatus.completed,
      winners: {
        some: {
          verificationStatus: "pending",
        },
      },
    },
    include: {
      winners: {
        where: {
          verificationStatus: "pending",
        },
      },
    },
  });
};

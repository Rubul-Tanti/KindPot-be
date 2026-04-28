"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDrawsNeedingVerification = exports.getDrawStatistics = exports.deleteDraw = exports.getPrizeDistribution = exports.calculatePrizePerWinner = exports.calculatePrizeTier = exports.addJackpotRollover = exports.updateDrawStatus = exports.updateDraw = exports.getDrawsByDateRange = exports.getActiveDraws = exports.getAllDraws = exports.getDrawByNumber = exports.getDrawById = exports.createDraw = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
/**
 * Draw Service - CRUD operations for Draw model
 */
//  CREATE
const createDraw = async (adminId, drawData) => {
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
            status: client_1.DrawStatus.active,
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
exports.createDraw = createDraw;
//  READ
const getDrawById = async (drawId) => {
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
exports.getDrawById = getDrawById;
const getDrawByNumber = async (drawNumber) => {
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
exports.getDrawByNumber = getDrawByNumber;
const getAllDraws = async (filters) => {
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
exports.getAllDraws = getAllDraws;
const getActiveDraws = async () => {
    return await prisma.draw.findMany({
        where: { status: client_1.DrawStatus.active },
        include: {
            admin: {
                select: { id: true, email: true, userName: true },
            },
            winners: true,
        },
        orderBy: { resultDate: "asc" },
    });
};
exports.getActiveDraws = getActiveDraws;
const getDrawsByDateRange = async (startDate, endDate) => {
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
exports.getDrawsByDateRange = getDrawsByDateRange;
//  UPDATE
const updateDraw = async (drawId, updateData) => {
    // Validate prize percentages if provided
    if (updateData.fiveMatchPct ||
        updateData.fourMatchPct ||
        updateData.threeMatchPct) {
        const currentDraw = await prisma.draw.findUnique({ where: { id: drawId } });
        if (!currentDraw)
            throw new Error("Draw not found");
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
exports.updateDraw = updateDraw;
const updateDrawStatus = async (drawId, status) => {
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
exports.updateDrawStatus = updateDrawStatus;
//  JACKPOT ROLLOVER
const addJackpotRollover = async (drawId, rolledOverFromId, additionalPrizePool) => {
    const currentDraw = await prisma.draw.findUnique({
        where: { id: drawId },
    });
    if (!currentDraw)
        throw new Error("Draw not found");
    const rolledOverFrom = await prisma.draw.findUnique({
        where: { id: rolledOverFromId },
    });
    if (!rolledOverFrom)
        throw new Error("Source draw not found");
    const newPrizePool = currentDraw.prizePool + (additionalPrizePool || 0);
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
exports.addJackpotRollover = addJackpotRollover;
//  PRIZE CALCULATIONS
const calculatePrizeTier = (prizePool, percentage) => {
    return Math.floor(prizePool * (percentage / 100));
};
exports.calculatePrizeTier = calculatePrizeTier;
const calculatePrizePerWinner = (tierPrize, winnerCount) => {
    return Math.floor(tierPrize / winnerCount);
};
exports.calculatePrizePerWinner = calculatePrizePerWinner;
const getPrizeDistribution = async (drawId) => {
    const draw = await prisma.draw.findUnique({
        where: { id: drawId },
    });
    if (!draw)
        throw new Error("Draw not found");
    return {
        totalPool: draw.prizePool,
        fiveMatchPrize: (0, exports.calculatePrizeTier)(draw.prizePool, draw.fiveMatchPct),
        fourMatchPrize: (0, exports.calculatePrizeTier)(draw.prizePool, draw.fourMatchPct),
        threeMatchPrize: (0, exports.calculatePrizeTier)(draw.prizePool, draw.threeMatchPct),
    };
};
exports.getPrizeDistribution = getPrizeDistribution;
//  DELETE
const deleteDraw = async (drawId) => {
    try {
        await prisma.draw.delete({
            where: { id: drawId },
        });
        return true;
    }
    catch (error) {
        throw new Error(`Cannot delete draw: ${error}`);
    }
};
exports.deleteDraw = deleteDraw;
//  UTILITY
const getDrawStatistics = async (drawId) => {
    const draw = await prisma.draw.findUnique({
        where: { id: drawId },
        include: {
            winners: true,
        },
    });
    if (!draw)
        throw new Error("Draw not found");
    const fiveMatch = draw.winners.filter((w) => w.winnerType === "fiveMatch").length;
    const fourMatch = draw.winners.filter((w) => w.winnerType === "fourMatch").length;
    const threeMatch = draw.winners.filter((w) => w.winnerType === "threeMatch").length;
    const verified = draw.winners.filter((w) => w.verificationStatus === "approved").length;
    const pending = draw.winners.filter((w) => w.verificationStatus === "pending").length;
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
exports.getDrawStatistics = getDrawStatistics;
const getDrawsNeedingVerification = async () => {
    return await prisma.draw.findMany({
        where: {
            status: client_1.DrawStatus.completed,
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
exports.getDrawsNeedingVerification = getDrawsNeedingVerification;

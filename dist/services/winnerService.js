"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLeaderboard = exports.hasUserAlreadyWon = exports.calculateTierPrizeAmounts = exports.getDrawWinningsSummary = exports.getUserWinningsReport = exports.deleteWinnersByDrawId = exports.deleteWinner = exports.batchMarkAsPaid = exports.markAsPaymentFailed = exports.markAsPaid = exports.rejectWinner = exports.approveWinner = exports.uploadProofImage = exports.updateWinner = exports.getAllWinners = exports.getPendingPaymentWinners = exports.getPendingVerificationWinners = exports.getWinnersByPaymentStatus = exports.getWinnersByVerificationStatus = exports.getWinnersByUserId = exports.getWinnersByDrawId = exports.getWinnerById = exports.createMultipleWinners = exports.createWinner = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
/**
 * Winner Service - CRUD operations for Winner model
 */
//  CREATE
const createWinner = async (drawId, userId, winnerData) => {
    // Validate draw exists
    const draw = await prisma.draw.findUnique({
        where: { id: drawId },
    });
    if (!draw)
        throw new Error("Draw not found");
    // Validate user exists
    const user = await prisma.user.findUnique({
        where: { id: userId },
    });
    if (!user)
        throw new Error("User not found");
    return await prisma.winner.create({
        data: {
            drawId,
            userId,
            winnerType: winnerData.winnerType,
            winnerScore: winnerData.winnerScore,
            prizeAmount: winnerData.prizeAmount,
            verificationStatus: client_1.VerificationStatus.pending,
            paymentStatus: client_1.WinnerPaymentStatus.pending,
        },
        include: {
            user: {
                select: { id: true, email: true, userName: true },
            },
            draw: true,
        },
    });
};
exports.createWinner = createWinner;
const createMultipleWinners = async (drawId, winnersData) => {
    return await Promise.all(winnersData.map((winner) => (0, exports.createWinner)(drawId, winner.userId, {
        winnerType: winner.winnerType,
        winnerScore: winner.winnerScore,
        prizeAmount: winner.prizeAmount,
    })));
};
exports.createMultipleWinners = createMultipleWinners;
//  READ
const getWinnerById = async (winnerId) => {
    return await prisma.winner.findUnique({
        where: { id: winnerId },
        include: {
            user: {
                select: {
                    id: true,
                    email: true,
                    userName: true,
                    phoneNumber: true,
                    profilePicture: true,
                },
            },
            draw: {
                select: {
                    id: true,
                    drawNumber: true,
                    prizePool: true,
                    currency: true,
                    resultDate: true,
                },
            },
        },
    });
};
exports.getWinnerById = getWinnerById;
const getWinnersByDrawId = async (drawId, filters) => {
    const where = { drawId };
    if (filters?.winnerType)
        where.winnerType = filters.winnerType;
    if (filters?.verificationStatus)
        where.verificationStatus = filters.verificationStatus;
    if (filters?.paymentStatus)
        where.paymentStatus = filters.paymentStatus;
    return await prisma.winner.findMany({
        where,
        include: {
            user: {
                select: {
                    id: true,
                    email: true,
                    userName: true,
                    phoneNumber: true,
                },
            },
            draw: {
                select: {
                    id: true,
                    drawNumber: true,
                    prizePool: true,
                    currency: true,
                },
            },
        },
        orderBy: { createdAt: "desc" },
    });
};
exports.getWinnersByDrawId = getWinnersByDrawId;
const getWinnersByUserId = async (userId, filters) => {
    const where = { userId };
    if (filters?.verificationStatus)
        where.verificationStatus = filters.verificationStatus;
    if (filters?.paymentStatus)
        where.paymentStatus = filters.paymentStatus;
    return await prisma.winner.findMany({
        where,
        include: {
            draw: {
                select: {
                    id: true,
                    drawNumber: true,
                    resultDate: true,
                    prizePool: true,
                    currency: true,
                },
            },
        },
        orderBy: { createdAt: "desc" },
    });
};
exports.getWinnersByUserId = getWinnersByUserId;
const getWinnersByVerificationStatus = async (status, limit) => {
    return await prisma.winner.findMany({
        where: { verificationStatus: status },
        include: {
            user: {
                select: { id: true, email: true, userName: true },
            },
            draw: {
                select: { id: true, drawNumber: true, resultDate: true },
            },
        },
        orderBy: { createdAt: "asc" },
        take: limit,
    });
};
exports.getWinnersByVerificationStatus = getWinnersByVerificationStatus;
const getWinnersByPaymentStatus = async (status, limit) => {
    return await prisma.winner.findMany({
        where: { paymentStatus: status },
        include: {
            user: {
                select: { id: true, email: true, userName: true, phoneNumber: true },
            },
            draw: {
                select: { id: true, drawNumber: true, prizePool: true, currency: true },
            },
        },
        orderBy: { createdAt: "asc" },
        take: limit,
    });
};
exports.getWinnersByPaymentStatus = getWinnersByPaymentStatus;
const getPendingVerificationWinners = async () => {
    return await (0, exports.getWinnersByVerificationStatus)(client_1.VerificationStatus.pending);
};
exports.getPendingVerificationWinners = getPendingVerificationWinners;
const getPendingPaymentWinners = async () => {
    return await (0, exports.getWinnersByPaymentStatus)(client_1.WinnerPaymentStatus.pending);
};
exports.getPendingPaymentWinners = getPendingPaymentWinners;
const getAllWinners = async (filters) => {
    const where = {};
    const limit = filters?.limit || 10;
    const offset = filters?.offset || 0;
    if (filters?.drawId)
        where.drawId = filters.drawId;
    if (filters?.userId)
        where.userId = filters.userId;
    if (filters?.verificationStatus)
        where.verificationStatus = filters.verificationStatus;
    if (filters?.paymentStatus)
        where.paymentStatus = filters.paymentStatus;
    const [winners, total] = await Promise.all([
        prisma.winner.findMany({
            where,
            skip: offset,
            take: limit,
            include: {
                user: {
                    select: { id: true, email: true, userName: true },
                },
                draw: {
                    select: { id: true, drawNumber: true, resultDate: true },
                },
            },
            orderBy: { createdAt: "desc" },
        }),
        prisma.winner.count({ where }),
    ]);
    return { winners, total };
};
exports.getAllWinners = getAllWinners;
//  UPDATE
const updateWinner = async (winnerId, updateData) => {
    return await prisma.winner.update({
        where: { id: winnerId },
        data: updateData,
        include: {
            user: {
                select: { id: true, email: true, userName: true },
            },
            draw: true,
        },
    });
};
exports.updateWinner = updateWinner;
//  VERIFICATION
const uploadProofImage = async (winnerId, imageUrl) => {
    return await prisma.winner.update({
        where: { id: winnerId },
        data: {
            proofImage: imageUrl,
            verificationStatus: client_1.VerificationStatus.pending, // Reset to pending for admin review
        },
        include: {
            user: {
                select: { id: true, email: true, userName: true },
            },
            draw: true,
        },
    });
};
exports.uploadProofImage = uploadProofImage;
const approveWinner = async (winnerId, adminNotes) => {
    return await prisma.winner.update({
        where: { id: winnerId },
        data: {
            verificationStatus: client_1.VerificationStatus.approved,
            verifiedAt: new Date(),
            adminNotes,
        },
        include: {
            user: {
                select: { id: true, email: true, userName: true },
            },
            draw: true,
        },
    });
};
exports.approveWinner = approveWinner;
const rejectWinner = async (winnerId, reason) => {
    return await prisma.winner.update({
        where: { id: winnerId },
        data: {
            verificationStatus: client_1.VerificationStatus.rejected,
            adminNotes: reason,
        },
        include: {
            user: {
                select: { id: true, email: true, userName: true },
            },
            draw: true,
        },
    });
};
exports.rejectWinner = rejectWinner;
//  PAYMENT
const markAsPaid = async (winnerId, transactionId) => {
    return await prisma.winner.update({
        where: { id: winnerId },
        data: {
            paymentStatus: client_1.WinnerPaymentStatus.paid,
            paidAt: new Date(),
            adminNotes: transactionId
                ? `Paid via transaction: ${transactionId}`
                : undefined,
        },
        include: {
            user: {
                select: { id: true, email: true, userName: true },
            },
            draw: true,
        },
    });
};
exports.markAsPaid = markAsPaid;
const markAsPaymentFailed = async (winnerId, reason) => {
    return await prisma.winner.update({
        where: { id: winnerId },
        data: {
            paymentStatus: client_1.WinnerPaymentStatus.failed,
            adminNotes: `Payment failed: ${reason}`,
        },
        include: {
            user: {
                select: { id: true, email: true, userName: true },
            },
            draw: true,
        },
    });
};
exports.markAsPaymentFailed = markAsPaymentFailed;
const batchMarkAsPaid = async (winnerIds) => {
    const result = await prisma.winner.updateMany({
        where: { id: { in: winnerIds } },
        data: {
            paymentStatus: client_1.WinnerPaymentStatus.paid,
            paidAt: new Date(),
        },
    });
    return result.count;
};
exports.batchMarkAsPaid = batchMarkAsPaid;
//  DELETE
const deleteWinner = async (winnerId) => {
    try {
        await prisma.winner.delete({
            where: { id: winnerId },
        });
        return true;
    }
    catch (error) {
        throw new Error(`Cannot delete winner: ${error}`);
    }
};
exports.deleteWinner = deleteWinner;
const deleteWinnersByDrawId = async (drawId) => {
    const result = await prisma.winner.deleteMany({
        where: { drawId },
    });
    return result.count;
};
exports.deleteWinnersByDrawId = deleteWinnersByDrawId;
//  STATISTICS
const getUserWinningsReport = async (userId) => {
    const winners = await prisma.winner.findMany({
        where: { userId },
    });
    const totalWinnings = winners.reduce((sum, w) => sum + (w.prizeAmount || 0), 0);
    const totalPaid = winners
        .filter((w) => w.paymentStatus === client_1.WinnerPaymentStatus.paid)
        .reduce((sum, w) => sum + (w.prizeAmount || 0), 0);
    return {
        totalWins: winners.length,
        totalWinnings,
        totalPaid,
        pendingVerification: winners.filter((w) => w.verificationStatus === client_1.VerificationStatus.pending).length,
        approvedUnpaid: winners.filter((w) => w.verificationStatus === client_1.VerificationStatus.approved &&
            w.paymentStatus === client_1.WinnerPaymentStatus.pending).length,
        rejected: winners.filter((w) => w.verificationStatus === client_1.VerificationStatus.rejected).length,
        byType: {
            fiveMatch: winners.filter((w) => w.winnerType === client_1.WinnerType.fiveMatch)
                .length,
            fourMatch: winners.filter((w) => w.winnerType === client_1.WinnerType.fourMatch)
                .length,
            threeMatch: winners.filter((w) => w.winnerType === client_1.WinnerType.threeMatch)
                .length,
        },
    };
};
exports.getUserWinningsReport = getUserWinningsReport;
const getDrawWinningsSummary = async (drawId) => {
    const winners = await prisma.winner.findMany({
        where: { drawId },
    });
    const totalPaidOut = winners
        .filter((w) => w.paymentStatus === client_1.WinnerPaymentStatus.paid)
        .reduce((sum, w) => sum + (w.prizeAmount || 0), 0);
    return {
        totalWinners: winners.length,
        totalPaidOut,
        pendingVerification: winners.filter((w) => w.verificationStatus === client_1.VerificationStatus.pending).length,
        approvedUnpaid: winners.filter((w) => w.verificationStatus === client_1.VerificationStatus.approved &&
            w.paymentStatus === client_1.WinnerPaymentStatus.pending).length,
        byVerificationStatus: {
            pending: winners.filter((w) => w.verificationStatus === client_1.VerificationStatus.pending).length,
            approved: winners.filter((w) => w.verificationStatus === client_1.VerificationStatus.approved).length,
            rejected: winners.filter((w) => w.verificationStatus === client_1.VerificationStatus.rejected).length,
        },
        byPaymentStatus: {
            pending: winners.filter((w) => w.paymentStatus === client_1.WinnerPaymentStatus.pending).length,
            paid: winners.filter((w) => w.paymentStatus === client_1.WinnerPaymentStatus.paid)
                .length,
            failed: winners.filter((w) => w.paymentStatus === client_1.WinnerPaymentStatus.failed).length,
        },
        byWinnerType: {
            fiveMatch: winners.filter((w) => w.winnerType === client_1.WinnerType.fiveMatch)
                .length,
            fourMatch: winners.filter((w) => w.winnerType === client_1.WinnerType.fourMatch)
                .length,
            threeMatch: winners.filter((w) => w.winnerType === client_1.WinnerType.threeMatch)
                .length,
        },
    };
};
exports.getDrawWinningsSummary = getDrawWinningsSummary;
//  UTILITY
const calculateTierPrizeAmounts = (drawId, prizePoolByTier) => {
    return prisma.$transaction(async (tx) => {
        // Get all winners by tier
        const [fiveMatchWinners, fourMatchWinners, threeMatchWinners] = await Promise.all([
            tx.winner.findMany({
                where: { drawId, winnerType: client_1.WinnerType.fiveMatch },
            }),
            tx.winner.findMany({
                where: { drawId, winnerType: client_1.WinnerType.fourMatch },
            }),
            tx.winner.findMany({
                where: { drawId, winnerType: client_1.WinnerType.threeMatch },
            }),
        ]);
        // Calculate per-winner prize amounts
        const fiveMatchPrize = Math.floor(prizePoolByTier.fiveMatch / (fiveMatchWinners.length || 1));
        const fourMatchPrize = Math.floor(prizePoolByTier.fourMatch / (fourMatchWinners.length || 1));
        const threeMatchPrize = Math.floor(prizePoolByTier.threeMatch / (threeMatchWinners.length || 1));
        // Update winners with calculated prize amounts
        await Promise.all([
            ...fiveMatchWinners.map((w) => tx.winner.update({
                where: { id: w.id },
                data: { prizeAmount: fiveMatchPrize },
            })),
            ...fourMatchWinners.map((w) => tx.winner.update({
                where: { id: w.id },
                data: { prizeAmount: fourMatchPrize },
            })),
            ...threeMatchWinners.map((w) => tx.winner.update({
                where: { id: w.id },
                data: { prizeAmount: threeMatchPrize },
            })),
        ]);
    });
};
exports.calculateTierPrizeAmounts = calculateTierPrizeAmounts;
const hasUserAlreadyWon = async (userId, drawId) => {
    const winner = await prisma.winner.findFirst({
        where: {
            userId,
            drawId,
        },
    });
    return !!winner;
};
exports.hasUserAlreadyWon = hasUserAlreadyWon;
const getLeaderboard = async (limit = 10) => {
    const winners = await prisma.winner.findMany({
        include: {
            user: {
                select: { id: true, userName: true, email: true },
            },
        },
    });
    const userStats = new Map();
    winners.forEach((winner) => {
        const key = winner.userId;
        if (!userStats.has(key)) {
            userStats.set(key, {
                userId: winner.user.id,
                userName: winner.user.userName,
                email: winner.user.email,
                totalWins: 0,
                totalEarnings: 0,
                paidAmount: 0,
            });
        }
        const stats = userStats.get(key);
        stats.totalWins += 1;
        stats.totalEarnings += winner.prizeAmount || 0;
        if (winner.paymentStatus === client_1.WinnerPaymentStatus.paid) {
            stats.paidAmount += winner.prizeAmount || 0;
        }
    });
    return Array.from(userStats.values())
        .sort((a, b) => b.totalEarnings - a.totalEarnings)
        .slice(0, limit);
};
exports.getLeaderboard = getLeaderboard;

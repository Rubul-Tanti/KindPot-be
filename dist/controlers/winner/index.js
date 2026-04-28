"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasUserAlreadyWonHandler = exports.calculateTierPrizeAmountsHandler = exports.getLeaderboardHandler = exports.getDrawWinningsSummaryHandler = exports.getUserWinningsReportHandler = exports.deleteWinnersByDrawIdHandler = exports.deleteWinnerHandler = exports.batchMarkAsPaidHandler = exports.markAsPaymentFailedHandler = exports.markAsPaidHandler = exports.rejectWinnerHandler = exports.approveWinnerHandler = exports.uploadProofImageHandler = exports.updateWinnerHandler = exports.getAllWinnersHandler = exports.getPendingPaymentWinnersHandler = exports.getPendingVerificationWinnersHandler = exports.getWinnersByUserIdHandler = exports.getWinnersByDrawIdHandler = exports.getWinnerByIdHandler = exports.createMultipleWinnersHandler = exports.createWinnerHandler = void 0;
const prisma_1 = require("../../db/prisma");
const prisma_2 = require("../../generated/prisma");
/**
 * Winner Controller - HTTP request handlers with integrated service logic
 */
//  HELPER FUNCTIONS
// Create single winner logic
const createWinnerLogic = async (drawId, userId, winnerData) => {
    // Validate draw exists
    const draw = await prisma_1.prisma.draw.findUnique({
        where: { id: drawId },
    });
    if (!draw)
        throw new Error("Draw not found");
    // Validate user exists
    const user = await prisma_1.prisma.user.findUnique({
        where: { id: userId },
    });
    if (!user)
        throw new Error("User not found");
    return await prisma_1.prisma.winner.create({
        data: {
            drawId,
            userId,
            winnerType: winnerData.winnerType,
            winnerScore: winnerData.winnerScore,
            prizeAmount: winnerData.prizeAmount,
            verificationStatus: prisma_2.VerificationStatus.pending,
            paymentStatus: prisma_2.WinnerPaymentStatus.pending,
        },
        include: {
            user: {
                select: { id: true, email: true, userName: true },
            },
            draw: true,
        },
    });
};
// Get winners by verification status logic
const getWinnersByVerificationStatusLogic = async (status, limit) => {
    return await prisma_1.prisma.winner.findMany({
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
// Get winners by payment status logic
const getWinnersByPaymentStatusLogic = async (status, limit) => {
    return await prisma_1.prisma.winner.findMany({
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
//  CREATE
const createWinnerHandler = async (req, res) => {
    try {
        const { drawId, userId, winnerType, winnerScore, prizeAmount } = req.body;
        if (!drawId || !userId || !winnerType || !winnerScore) {
            res.status(400).json({ error: "Missing required fields" });
            return;
        }
        if (!Object.values(prisma_2.WinnerType).includes(winnerType)) {
            res.status(400).json({
                error: "Invalid winnerType. Must be: fiveMatch, fourMatch, or threeMatch",
            });
            return;
        }
        const winner = await createWinnerLogic(drawId, userId, {
            winnerType,
            winnerScore,
            prizeAmount,
        });
        res.status(201).json({
            success: true,
            message: "Winner created successfully",
            data: winner,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};
exports.createWinnerHandler = createWinnerHandler;
const createMultipleWinnersHandler = async (req, res) => {
    try {
        const { drawId, winners } = req.body;
        if (!drawId || !Array.isArray(winners) || winners.length === 0) {
            res.status(400).json({ error: "drawId and winners array are required" });
            return;
        }
        const createdWinners = await Promise.all(winners.map((winner) => createWinnerLogic(drawId, winner.userId, {
            winnerType: winner.winnerType,
            winnerScore: winner.winnerScore,
            prizeAmount: winner.prizeAmount,
        })));
        res.status(201).json({
            success: true,
            message: `${createdWinners.length} winners created successfully`,
            data: createdWinners,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};
exports.createMultipleWinnersHandler = createMultipleWinnersHandler;
//  READ
const getWinnerByIdHandler = async (req, res) => {
    try {
        const { winnerId } = req.params;
        const winner = await prisma_1.prisma.winner.findUnique({
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
        if (!winner) {
            res.status(404).json({ error: "Winner not found" });
            return;
        }
        res.status(200).json({
            success: true,
            data: winner,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};
exports.getWinnerByIdHandler = getWinnerByIdHandler;
const getWinnersByDrawIdHandler = async (req, res) => {
    try {
        const { drawId } = req.params;
        const { winnerType, verificationStatus, paymentStatus } = req.query;
        const where = { drawId };
        if (winnerType)
            where.winnerType = winnerType;
        if (verificationStatus)
            where.verificationStatus = verificationStatus;
        if (paymentStatus)
            where.paymentStatus = paymentStatus;
        const winners = await prisma_1.prisma.winner.findMany({
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
        res.status(200).json({
            success: true,
            data: winners,
            count: winners.length,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};
exports.getWinnersByDrawIdHandler = getWinnersByDrawIdHandler;
const getWinnersByUserIdHandler = async (req, res) => {
    try {
        const { userId } = req.params;
        const { verificationStatus, paymentStatus } = req.query;
        const where = { userId };
        if (verificationStatus)
            where.verificationStatus = verificationStatus;
        if (paymentStatus)
            where.paymentStatus = paymentStatus;
        const winners = await prisma_1.prisma.winner.findMany({
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
        res.status(200).json({
            success: true,
            data: winners,
            count: winners.length,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};
exports.getWinnersByUserIdHandler = getWinnersByUserIdHandler;
const getPendingVerificationWinnersHandler = async (req, res) => {
    try {
        const winners = await getWinnersByVerificationStatusLogic(prisma_2.VerificationStatus.pending);
        res.status(200).json({
            success: true,
            data: winners,
            count: winners.length,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};
exports.getPendingVerificationWinnersHandler = getPendingVerificationWinnersHandler;
const getPendingPaymentWinnersHandler = async (req, res) => {
    try {
        const winners = await getWinnersByPaymentStatusLogic(prisma_2.WinnerPaymentStatus.pending);
        res.status(200).json({
            success: true,
            data: winners,
            count: winners.length,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};
exports.getPendingPaymentWinnersHandler = getPendingPaymentWinnersHandler;
const getAllWinnersHandler = async (req, res) => {
    try {
        const { drawId, userId, verificationStatus, paymentStatus, limit = 10, offset = 0, } = req.query;
        const where = {};
        const queryLimit = parseInt(String(limit));
        const queryOffset = parseInt(String(offset));
        if (drawId)
            where.drawId = drawId;
        if (userId)
            where.userId = userId;
        if (verificationStatus)
            where.verificationStatus = verificationStatus;
        if (paymentStatus)
            where.paymentStatus = paymentStatus;
        const [winners, total] = await Promise.all([
            prisma_1.prisma.winner.findMany({
                where,
                skip: queryOffset,
                take: queryLimit,
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
            prisma_1.prisma.winner.count({ where }),
        ]);
        res.status(200).json({
            success: true,
            data: winners,
            pagination: {
                limit: queryLimit,
                offset: queryOffset,
                total,
            },
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};
exports.getAllWinnersHandler = getAllWinnersHandler;
//  UPDATE
const updateWinnerHandler = async (req, res) => {
    try {
        const { winnerId } = req.params;
        const { winnerScore, prizeAmount, adminNotes } = req.body;
        const winner = await prisma_1.prisma.winner.update({
            where: { id: winnerId },
            data: {
                ...(winnerScore && { winnerScore }),
                ...(prizeAmount && { prizeAmount }),
                ...(adminNotes && { adminNotes }),
            },
            include: {
                user: {
                    select: { id: true, email: true, userName: true },
                },
                draw: true,
            },
        });
        res.status(200).json({
            success: true,
            message: "Winner updated successfully",
            data: winner,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};
exports.updateWinnerHandler = updateWinnerHandler;
//  VERIFICATION
const uploadProofImageHandler = async (req, res) => {
    try {
        const { winnerId } = req.params;
        const { imageUrl } = req.body;
        if (!imageUrl) {
            res.status(400).json({ error: "imageUrl is required" });
            return;
        }
        const winner = await prisma_1.prisma.winner.update({
            where: { id: winnerId },
            data: {
                proofImage: imageUrl,
                verificationStatus: prisma_2.VerificationStatus.pending,
            },
            include: {
                user: {
                    select: { id: true, email: true, userName: true },
                },
                draw: true,
            },
        });
        res.status(200).json({
            success: true,
            message: "Proof image uploaded successfully",
            data: winner,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};
exports.uploadProofImageHandler = uploadProofImageHandler;
const approveWinnerHandler = async (req, res) => {
    try {
        const { winnerId } = req.params;
        const { adminNotes } = req.body;
        const winner = await prisma_1.prisma.winner.update({
            where: { id: winnerId },
            data: {
                verificationStatus: prisma_2.VerificationStatus.approved,
                verifiedAt: new Date(),
                ...(adminNotes && { adminNotes }),
            },
            include: {
                user: {
                    select: { id: true, email: true, userName: true },
                },
                draw: true,
            },
        });
        res.status(200).json({
            success: true,
            message: "Winner approved successfully",
            data: winner,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};
exports.approveWinnerHandler = approveWinnerHandler;
const rejectWinnerHandler = async (req, res) => {
    try {
        const { winnerId } = req.params;
        const { reason } = req.body;
        if (!reason) {
            res.status(400).json({ error: "reason is required" });
            return;
        }
        const winner = await prisma_1.prisma.winner.update({
            where: { id: winnerId },
            data: {
                verificationStatus: prisma_2.VerificationStatus.rejected,
                adminNotes: reason,
            },
            include: {
                user: {
                    select: { id: true, email: true, userName: true },
                },
                draw: true,
            },
        });
        res.status(200).json({
            success: true,
            message: "Winner rejected",
            data: winner,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};
exports.rejectWinnerHandler = rejectWinnerHandler;
//  PAYMENT
const markAsPaidHandler = async (req, res) => {
    try {
        const { winnerId } = req.params;
        const { transactionId } = req.body;
        const winner = await prisma_1.prisma.winner.update({
            where: { id: winnerId },
            data: {
                paymentStatus: prisma_2.WinnerPaymentStatus.paid,
                paidAt: new Date(),
                ...(transactionId && { adminNotes: `Paid via transaction: ${transactionId}` }),
            },
            include: {
                user: {
                    select: { id: true, email: true, userName: true },
                },
                draw: true,
            },
        });
        res.status(200).json({
            success: true,
            message: "Winner marked as paid",
            data: winner,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};
exports.markAsPaidHandler = markAsPaidHandler;
const markAsPaymentFailedHandler = async (req, res) => {
    try {
        const { winnerId } = req.params;
        const { reason } = req.body;
        if (!reason) {
            res.status(400).json({ error: "reason is required" });
            return;
        }
        const winner = await prisma_1.prisma.winner.update({
            where: { id: winnerId },
            data: {
                paymentStatus: prisma_2.WinnerPaymentStatus.failed,
                adminNotes: `Payment failed: ${reason}`,
            },
            include: {
                user: {
                    select: { id: true, email: true, userName: true },
                },
                draw: true,
            },
        });
        res.status(200).json({
            success: true,
            message: "Winner marked as payment failed",
            data: winner,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};
exports.markAsPaymentFailedHandler = markAsPaymentFailedHandler;
const batchMarkAsPaidHandler = async (req, res) => {
    try {
        const { winnerIds } = req.body;
        if (!Array.isArray(winnerIds) || winnerIds.length === 0) {
            res.status(400).json({ error: "winnerIds array is required" });
            return;
        }
        const result = await prisma_1.prisma.winner.updateMany({
            where: { id: { in: winnerIds } },
            data: {
                paymentStatus: prisma_2.WinnerPaymentStatus.paid,
                paidAt: new Date(),
            },
        });
        res.status(200).json({
            success: true,
            message: `${result.count} winners marked as paid`,
            data: { count: result.count },
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};
exports.batchMarkAsPaidHandler = batchMarkAsPaidHandler;
//  DELETE
const deleteWinnerHandler = async (req, res) => {
    try {
        const { winnerId } = req.params;
        await prisma_1.prisma.winner.delete({
            where: { id: winnerId },
        });
        res.status(200).json({
            success: true,
            message: "Winner deleted successfully",
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};
exports.deleteWinnerHandler = deleteWinnerHandler;
const deleteWinnersByDrawIdHandler = async (req, res) => {
    try {
        const { drawId } = req.params;
        const result = await prisma_1.prisma.winner.deleteMany({
            where: { drawId },
        });
        res.status(200).json({
            success: true,
            message: `${result.count} winners deleted`,
            data: { count: result.count },
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};
exports.deleteWinnersByDrawIdHandler = deleteWinnersByDrawIdHandler;
//  STATISTICS
const getUserWinningsReportHandler = async (req, res) => {
    try {
        const { userId } = req.params;
        const winners = await prisma_1.prisma.winner.findMany({
            where: { userId },
        });
        const totalWinnings = winners.reduce((sum, w) => sum + (w.prizeAmount || 0), 0);
        const totalPaid = winners
            .filter((w) => w.paymentStatus === prisma_2.WinnerPaymentStatus.paid)
            .reduce((sum, w) => sum + (w.prizeAmount || 0), 0);
        const report = {
            totalWins: winners.length,
            totalWinnings,
            totalPaid,
            pendingVerification: winners.filter((w) => w.verificationStatus === prisma_2.VerificationStatus.pending).length,
            approvedUnpaid: winners.filter((w) => w.verificationStatus === prisma_2.VerificationStatus.approved &&
                w.paymentStatus === prisma_2.WinnerPaymentStatus.pending).length,
            rejected: winners.filter((w) => w.verificationStatus === prisma_2.VerificationStatus.rejected).length,
            byType: {
                fiveMatch: winners.filter((w) => w.winnerType === prisma_2.WinnerType.fiveMatch)
                    .length,
                fourMatch: winners.filter((w) => w.winnerType === prisma_2.WinnerType.fourMatch)
                    .length,
                threeMatch: winners.filter((w) => w.winnerType === prisma_2.WinnerType.threeMatch)
                    .length,
            },
        };
        res.status(200).json({
            success: true,
            data: report,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};
exports.getUserWinningsReportHandler = getUserWinningsReportHandler;
const getDrawWinningsSummaryHandler = async (req, res) => {
    try {
        const { drawId } = req.params;
        const winners = await prisma_1.prisma.winner.findMany({
            where: { drawId },
        });
        const totalPaidOut = winners
            .filter((w) => w.paymentStatus === prisma_2.WinnerPaymentStatus.paid)
            .reduce((sum, w) => sum + (w.prizeAmount || 0), 0);
        const summary = {
            totalWinners: winners.length,
            totalPaidOut,
            pendingVerification: winners.filter((w) => w.verificationStatus === prisma_2.VerificationStatus.pending).length,
            approvedUnpaid: winners.filter((w) => w.verificationStatus === prisma_2.VerificationStatus.approved &&
                w.paymentStatus === prisma_2.WinnerPaymentStatus.pending).length,
            byVerificationStatus: {
                pending: winners.filter((w) => w.verificationStatus === prisma_2.VerificationStatus.pending).length,
                approved: winners.filter((w) => w.verificationStatus === prisma_2.VerificationStatus.approved).length,
                rejected: winners.filter((w) => w.verificationStatus === prisma_2.VerificationStatus.rejected).length,
            },
            byPaymentStatus: {
                pending: winners.filter((w) => w.paymentStatus === prisma_2.WinnerPaymentStatus.pending).length,
                paid: winners.filter((w) => w.paymentStatus === prisma_2.WinnerPaymentStatus.paid)
                    .length,
                failed: winners.filter((w) => w.paymentStatus === prisma_2.WinnerPaymentStatus.failed).length,
            },
            byWinnerType: {
                fiveMatch: winners.filter((w) => w.winnerType === prisma_2.WinnerType.fiveMatch)
                    .length,
                fourMatch: winners.filter((w) => w.winnerType === prisma_2.WinnerType.fourMatch)
                    .length,
                threeMatch: winners.filter((w) => w.winnerType === prisma_2.WinnerType.threeMatch)
                    .length,
            },
        };
        res.status(200).json({
            success: true,
            data: summary,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};
exports.getDrawWinningsSummaryHandler = getDrawWinningsSummaryHandler;
const getLeaderboardHandler = async (req, res) => {
    try {
        const { limit = 10 } = req.query;
        const winners = await prisma_1.prisma.winner.findMany({
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
            if (winner.paymentStatus === prisma_2.WinnerPaymentStatus.paid) {
                stats.paidAmount += winner.prizeAmount || 0;
            }
        });
        const leaderboard = Array.from(userStats.values())
            .sort((a, b) => b.totalEarnings - a.totalEarnings)
            .slice(0, parseInt(String(limit)));
        res.status(200).json({
            success: true,
            data: leaderboard,
            count: leaderboard.length,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};
exports.getLeaderboardHandler = getLeaderboardHandler;
//  UTILITY
const calculateTierPrizeAmountsHandler = async (req, res) => {
    try {
        const { drawId } = req.params;
        const { prizePoolByTier } = req.body;
        if (!prizePoolByTier) {
            res.status(400).json({
                error: "prizePoolByTier object is required with fiveMatch, fourMatch, threeMatch",
            });
            return;
        }
        await prisma_1.prisma.$transaction(async (tx) => {
            // Get all winners by tier
            const [fiveMatchWinners, fourMatchWinners, threeMatchWinners] = await Promise.all([
                tx.winner.findMany({
                    where: { drawId, winnerType: prisma_2.WinnerType.fiveMatch },
                }),
                tx.winner.findMany({
                    where: { drawId, winnerType: prisma_2.WinnerType.fourMatch },
                }),
                tx.winner.findMany({
                    where: { drawId, winnerType: prisma_2.WinnerType.threeMatch },
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
        res.status(200).json({
            success: true,
            message: "Prize amounts calculated and updated",
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};
exports.calculateTierPrizeAmountsHandler = calculateTierPrizeAmountsHandler;
const hasUserAlreadyWonHandler = async (req, res) => {
    try {
        const { userId, drawId } = req.params;
        const winner = await prisma_1.prisma.winner.findFirst({
            where: {
                userId,
                drawId,
            },
        });
        res.status(200).json({
            success: true,
            data: { hasWon: !!winner },
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};
exports.hasUserAlreadyWonHandler = hasUserAlreadyWonHandler;

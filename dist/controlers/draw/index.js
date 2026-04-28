"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDrawHandler = exports.getDrawsNeedingVerificationHandler = exports.getDrawStatisticsHandler = exports.getPrizeDistributionHandler = exports.addJackpotRolloverHandler = exports.updateDrawStatusHandler = exports.updateDrawHandler = exports.getDrawsByDateRangeHandler = exports.getActiveDrawsHandler = exports.getAllDrawsHandler = exports.getDrawByNumberHandler = exports.getDrawByIdHandler = exports.createDrawHandler = void 0;
const prisma_1 = require("../../generated/prisma");
/**
 * Draw Controller - HTTP request handlers
 */
//  CREATE
const createDrawHandler = async (req, res) => {
    try {
        const adminId = req.user?.id;
        if (!adminId) {
            res.status(401).json({ error: "Unauthorized: Admin ID required" });
            return;
        }
        const { drawNumber, prizePool, currency, entryStartDate, lastEntryDate, resultDate, fiveMatchPct, fourMatchPct, threeMatchPct, } = req.body;
        // Validation
        if (!drawNumber ||
            !prizePool ||
            !entryStartDate ||
            !lastEntryDate ||
            !resultDate) {
            res.status(400).json({ error: "Missing required fields" });
            return;
        }
        const draw = await drawService.createDraw(adminId, {
            drawNumber,
            prizePool,
            currency,
            entryStartDate: new Date(entryStartDate),
            lastEntryDate: new Date(lastEntryDate),
            resultDate: new Date(resultDate),
            fiveMatchPct,
            fourMatchPct,
            threeMatchPct,
        });
        res.status(201).json({
            success: true,
            message: "Draw created successfully",
            data: draw,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};
exports.createDrawHandler = createDrawHandler;
//  READ
const getDrawByIdHandler = async (req, res) => {
    try {
        const { drawId } = req.params;
        const draw = await drawService.getDrawById(drawId);
        if (!draw) {
            res.status(404).json({ error: "Draw not found" });
            return;
        }
        res.status(200).json({
            success: true,
            data: draw,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};
exports.getDrawByIdHandler = getDrawByIdHandler;
const getDrawByNumberHandler = async (req, res) => {
    try {
        const { drawNumber } = req.params;
        const draw = await drawService.getDrawByNumber(drawNumber);
        if (!draw) {
            res.status(404).json({ error: "Draw not found" });
            return;
        }
        res.status(200).json({
            success: true,
            data: draw,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};
exports.getDrawByNumberHandler = getDrawByNumberHandler;
const getAllDrawsHandler = async (req, res) => {
    try {
        const { status, limit = 10, offset = 0, orderBy = "newest" } = req.query;
        const { draws, total } = await drawService.getAllDraws({
            status: status,
            limit: parseInt(String(limit)),
            offset: parseInt(String(offset)),
            orderBy: orderBy,
        });
        res.status(200).json({
            success: true,
            data: draws,
            pagination: {
                limit: parseInt(String(limit)),
                offset: parseInt(String(offset)),
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
exports.getAllDrawsHandler = getAllDrawsHandler;
const getActiveDrawsHandler = async (req, res) => {
    try {
        const draws = await drawService.getActiveDraws();
        res.status(200).json({
            success: true,
            data: draws,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};
exports.getActiveDrawsHandler = getActiveDrawsHandler;
const getDrawsByDateRangeHandler = async (req, res) => {
    try {
        const { startDate, endDate } = req.query;
        if (!startDate || !endDate) {
            res.status(400).json({ error: "startDate and endDate are required" });
            return;
        }
        const draws = await drawService.getDrawsByDateRange(new Date(String(startDate)), new Date(String(endDate)));
        res.status(200).json({
            success: true,
            data: draws,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};
exports.getDrawsByDateRangeHandler = getDrawsByDateRangeHandler;
//  UPDATE
const updateDrawHandler = async (req, res) => {
    try {
        const { drawId } = req.params;
        const updateData = req.body;
        // Convert date strings to Date objects if provided
        if (updateData.entryStartDate)
            updateData.entryStartDate = new Date(updateData.entryStartDate);
        if (updateData.lastEntryDate)
            updateData.lastEntryDate = new Date(updateData.lastEntryDate);
        if (updateData.resultDate)
            updateData.resultDate = new Date(updateData.resultDate);
        const draw = await drawService.updateDraw(drawId, updateData);
        res.status(200).json({
            success: true,
            message: "Draw updated successfully",
            data: draw,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};
exports.updateDrawHandler = updateDrawHandler;
const updateDrawStatusHandler = async (req, res) => {
    try {
        const { drawId } = req.params;
        const { status } = req.body;
        if (!status || !Object.values(prisma_1.DrawStatus).includes(status)) {
            res.status(400).json({
                error: "Invalid status. Must be: active, completed, or cancelled",
            });
            return;
        }
        const draw = await drawService.updateDrawStatus(drawId, status);
        res.status(200).json({
            success: true,
            message: `Draw status updated to ${status}`,
            data: draw,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};
exports.updateDrawStatusHandler = updateDrawStatusHandler;
//  JACKPOT ROLLOVER
const addJackpotRolloverHandler = async (req, res) => {
    try {
        const { drawId } = req.params;
        const { rolledOverFromId, additionalPrizePool } = req.body;
        if (!rolledOverFromId) {
            res.status(400).json({ error: "rolledOverFromId is required" });
            return;
        }
        const draw = await drawService.addJackpotRollover(drawId, rolledOverFromId, additionalPrizePool);
        res.status(200).json({
            success: true,
            message: "Jackpot rollover added successfully",
            data: draw,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};
exports.addJackpotRolloverHandler = addJackpotRolloverHandler;
//  PRIZE CALCULATIONS
const getPrizeDistributionHandler = async (req, res) => {
    try {
        const { drawId } = req.params;
        const distribution = await drawService.getPrizeDistribution(drawId);
        res.status(200).json({
            success: true,
            data: distribution,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};
exports.getPrizeDistributionHandler = getPrizeDistributionHandler;
//  STATISTICS
const getDrawStatisticsHandler = async (req, res) => {
    try {
        const { drawId } = req.params;
        const statistics = await drawService.getDrawStatistics(drawId);
        res.status(200).json({
            success: true,
            data: statistics,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};
exports.getDrawStatisticsHandler = getDrawStatisticsHandler;
const getDrawsNeedingVerificationHandler = async (req, res) => {
    try {
        const draws = await drawService.getDrawsNeedingVerification();
        res.status(200).json({
            success: true,
            data: draws,
            count: draws.length,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};
exports.getDrawsNeedingVerificationHandler = getDrawsNeedingVerificationHandler;
//  DELETE
const deleteDrawHandler = async (req, res) => {
    try {
        const { drawId } = req.params;
        await drawService.deleteDraw(drawId);
        res.status(200).json({
            success: true,
            message: "Draw deleted successfully",
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};
exports.deleteDrawHandler = deleteDrawHandler;

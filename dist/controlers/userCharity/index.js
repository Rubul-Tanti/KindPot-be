"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserCharity = exports.getUserCharity = void 0;
const errorHandler_1 = require("../../middleware/errorHandler");
const logger_1 = __importDefault(require("../../utils/logger"));
const prisma_1 = require("../../db/prisma");
const client_1 = require("@prisma/client/runtime/client");
const getUserCharity = async (req, res) => {
    logger_1.default.info('get user Charity');
    try {
        const subscription = req?.user?.subscriptionOrder;
        const id = subscription?.id;
        if (!id) {
            return res.status(400).json({ message: 'user not subscribed' });
        }
        const userCharity = await prisma_1.prisma.userCharity.findFirst({ where: { subscriptionId: id }, include: { charity: { include: { images: true } } } });
        res.status(200).json({ message: 'successfully fetched userCharity', data: userCharity });
    }
    catch (e) {
        if (e instanceof client_1.PrismaClientKnownRequestError && e.code == 'P2025') {
            res.status(404).json("user charity not found");
        }
        logger_1.default.error("error while fetching user Charity", e);
        throw new errorHandler_1.ApiError('internal server Error', 500);
    }
};
exports.getUserCharity = getUserCharity;
const createUserCharity = async (req, res) => {
    try {
        const { charityId, percentage } = req.body;
        const user = req.user;
        const subscription = user?.subscriptionOrder;
        if (!charityId || !percentage) {
            return res.status(400).json({
                message: "charityId and percentage are required",
            });
        }
        if (!subscription) {
            return res.status(404).json({
                message: "User is not subscribed",
            });
        }
        if (percentage <= 0 || percentage > 100) {
            return res.status(400).json({
                message: "Percentage must be between 1 and 100",
            });
        }
        const amount = (percentage * subscription.amount) / 100;
        const now = new Date();
        const alreadyExit = await prisma_1.prisma.userCharity.findMany({ where: { subscriptionId: subscription.id } });
        if (alreadyExit) {
            return res.status(400).json("Can only donate to one org with one subscription");
        }
        const userCharity = await prisma_1.prisma.userCharity.create({
            data: {
                type: "SUBSCRIPTION_PERCENTAGE",
                month: now.getMonth() + 1,
                year: now.getFullYear(),
                paidAt: now,
                currency: subscription.currency,
                userId: user.id,
                charityId,
                subscriptionId: subscription.id,
                amount,
                percentage
            }, include: { charity: { include: { images: true } } }
        });
        return res.status(201).json({
            message: "Charity contribution created successfully",
            data: userCharity,
        });
    }
    catch (e) {
        if (e instanceof client_1.PrismaClientKnownRequestError && e.code == 'P2025') {
            res.status(404).json("user charity not found");
        }
        logger_1.default.error("error while fetching user Charity", e);
        throw new errorHandler_1.ApiError('internal server Error', 500);
    }
};
exports.createUserCharity = createUserCharity;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrders = exports.confirmPayment = exports.checkPaymentStatus = exports.createSubscriptionOrder = void 0;
const logger_1 = __importDefault(require("../../utils/logger"));
const errorHandler_1 = require("../../middleware/errorHandler");
const subscriptionOrder_1 = require("../../utils/validatons/subscriptionOrder");
const prisma_1 = require("../../db/prisma");
const prisma_2 = require("../../generated/prisma");
const stripe_1 = require("../../config/stripe");
const client_1 = require("@prisma/client/runtime/client");
if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY is not set");
}
const createSubscriptionOrder = async (req, res) => {
    logger_1.default.info("hit create subscription order");
    try {
        if (!req?.user?.id) {
            return res.status(401).json({ message: "unauthorized" });
        }
        const alreadySubscribed = await prisma_1.prisma.subscriptionOrder.findFirst({ where: { userId: req?.user?.id, status: "COMPLETED", periodEnd: { gte: new Date() } } });
        if (!alreadySubscribed) {
            if (alreadySubscribed) {
                return res.status(409).json({
                    success: false,
                    message: "User already has an active subscription",
                });
            }
        }
        const vr = subscriptionOrder_1.createSubscriptionOrderSchema.safeParse(req.body);
        if (!vr.success) {
            return res.status(400).json({
                message: "input validation error",
                error: vr.error.flatten().fieldErrors,
            });
        }
        const orderData = vr.data;
        const existingOrder = await prisma_1.prisma.subscriptionOrder.findFirst({
            where: { userId: req.user.id, status: "COMPLETED" },
        });
        if (existingOrder) {
            return res.status(400).json({ message: "user already has an active subscription" });
        }
        const subscriptionPlan = await prisma_1.prisma.subscriptionModel.findUnique({
            where: { id: orderData.subscriptionModelId },
        });
        if (!subscriptionPlan) {
            return res.status(404).json({ message: "subscription plan not found" });
        }
        const paymentIntent = await stripe_1.stripe.paymentIntents.create({
            amount: Math.round(subscriptionPlan.price * 100),
            currency: subscriptionPlan.currency,
            automatic_payment_methods: { enabled: true, allow_redirects: "never" },
            receipt_email: req.user.email,
            metadata: {
                userId: req.user.id,
                subscriptionModelId: orderData.subscriptionModelId,
            },
        });
        const periodStart = new Date();
        const periodEnd = new Date(periodStart);
        const isYearly = subscriptionPlan.planName.toLowerCase().includes("year");
        if (isYearly) {
            periodEnd.setFullYear(periodEnd.getFullYear() + 1);
        }
        else {
            periodEnd.setMonth(periodEnd.getMonth() + 1);
        }
        const newSubscriptionOrder = await prisma_1.prisma.subscriptionOrder.create({
            data: {
                subscriptionModelId: orderData.subscriptionModelId,
                userId: req.user.id,
                periodStart,
                periodEnd,
                stripePaymentIntentId: paymentIntent.id,
                stripeCustomerId: paymentIntent.customer ?? null,
                stripeClientSecret: paymentIntent.client_secret,
                paymentGateway: prisma_2.PaymentGateway.STRIPE,
                amount: paymentIntent.amount,
                currency: paymentIntent.currency.toUpperCase(),
                status: "PENDING",
                ipAddress: req.ip,
                userAgent: req.headers["user-agent"] ?? null,
            },
        });
        return res.status(201).json({
            success: true,
            message: "subscription order created",
            data: {
                orderId: newSubscriptionOrder.id,
                clientSecret: paymentIntent.client_secret,
                paymentIntentId: paymentIntent.id,
                status: paymentIntent.status,
            },
        });
    }
    catch (e) {
        logger_1.default.error("error while creating subscription order", e);
        throw new errorHandler_1.ApiError("internal server error", 500);
    }
};
exports.createSubscriptionOrder = createSubscriptionOrder;
const checkPaymentStatus = async (req, res) => {
    logger_1.default.info('hit check payment status');
    try {
        const { paymentIntentId } = req.body;
        if (!paymentIntentId) {
            return res.status(400).json({ message: "input validation error", error: "paymentIntentId is required" });
        }
        const intent = await stripe_1.stripe.paymentIntents.retrieve(paymentIntentId);
        res.status(200).json({
            success: true,
            message: "successfully fetched payment status",
            data: {
                paymentStatus: intent.status,
                amount: intent.amount,
                currency: intent.currency.toUpperCase
            }
        });
    }
    catch (e) {
        logger_1.default.error("error while checking subscription status", e);
        throw new errorHandler_1.ApiError("internal server error", 500);
    }
};
exports.checkPaymentStatus = checkPaymentStatus;
const confirmPayment = async (req, res) => {
    try {
        const { paymentIntentId } = req.body;
        if (!paymentIntentId) {
            res.status(400).json({ message: "input validation error", error: "paymentIntentId is required" });
        }
        const intent = await stripe_1.stripe.paymentIntents.retrieve(paymentIntentId);
        if (intent.status !== "succeeded") {
            return res.status(400).json({ paymentStatus: intent.status, message: "payment not confirm",
                amount: intent.amount,
                currency: intent.currency.toUpperCase });
        }
        const confirmOrder = await prisma_1.prisma.subscriptionOrder.update({ where: {
                amount: intent.amount,
                currency: intent.currency.toUpperCase(),
                userId: req?.user?.id,
                stripePaymentIntentId: paymentIntentId
            }, data: { status: "COMPLETED" } });
        const updatedUser = await prisma_1.prisma.user.update({ where: { id: confirmOrder.id }, data: { role: "SUBSCRIBER" } });
        return res.status(200).json({ message: "payment confirmed", data: {
                paymentStatus: intent.status,
                amount: intent.amount,
                currency: intent.currency.toUpperCase,
                subscriptionOrder: confirmOrder
            } });
    }
    catch (e) {
        if (e instanceof client_1.PrismaClientKnownRequestError && e.code === "P2025") {
            return res.status(404).json("subscription order not found");
        }
        logger_1.default.error("error while confirming subscription", e);
        throw new errorHandler_1.ApiError("internal server error", 500);
    }
};
exports.confirmPayment = confirmPayment;
const getOrders = async (req, res) => {
    try {
        const orders = await prisma_1.prisma.subscriptionOrder.findMany();
        return res.status(200).json({ message: "fetched all orders", data: orders });
    }
    catch (e) {
        logger_1.default.error("error while fetching orders");
        throw new errorHandler_1.ApiError("internal server error", 500);
    }
};
exports.getOrders = getOrders;

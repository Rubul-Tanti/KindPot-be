"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSubscriptionModel = exports.updateSubscriptionModel = exports.getSubscriptionModels = exports.addSubscriptionModel = void 0;
const logger_1 = __importDefault(require("../../utils/logger"));
const errorHandler_1 = require("../../middleware/errorHandler");
const subcriptionModel_1 = require("../../utils/validatons/subcriptionModel");
const prisma_1 = require("../../db/prisma");
const client_1 = require("@prisma/client/runtime/client");
//add subscription model
const addSubscriptionModel = async (req, res) => {
    logger_1.default.info("hit add subscription");
    try {
        const vr = subcriptionModel_1.createSubscriptionModelSchema.safeParse(req.body);
        if (!vr.success) {
            return res.status(400).json({ message: "input validation error", error: vr.error.flatten().fieldErrors });
        }
        const subscriptionModelData = vr.data;
        const newSubscriptionModel = await prisma_1.prisma.subscriptionModel.create({ data: subscriptionModelData });
        return res.status(201).json({ message: "subscripton model created successfully", data: newSubscriptionModel });
    }
    catch (e) {
        logger_1.default.error('error while creating subscription model', e);
        throw new errorHandler_1.ApiError('Internal Server Error', 500);
    }
};
exports.addSubscriptionModel = addSubscriptionModel;
const getSubscriptionModels = async (req, res) => {
    logger_1.default.info("hit get subscription models");
    try {
        const models = await prisma_1.prisma.subscriptionModel.findMany();
        return res.status(200).json({ message: "sucessfully fetched subscription models", data: models });
    }
    catch (e) {
        logger_1.default.error('error while fetching subscription model', e);
        throw new errorHandler_1.ApiError('Internal Server Error', 500);
    }
};
exports.getSubscriptionModels = getSubscriptionModels;
const updateSubscriptionModel = async (req, res) => {
    logger_1.default.info("hit update subscription model");
    try {
        const id = req.params.id;
        const vr = subcriptionModel_1.updateSubscriptionModelSchema.safeParse(req.body);
        if (!vr.success) {
            return res.status(400).json({ message: "input validation error", error: vr.error.flatten().fieldErrors });
        }
        const subscriptionModelData = vr.data;
        const newSubscriptionModel = await prisma_1.prisma.subscriptionModel.update({ where: { id }, data: subscriptionModelData });
        return res.status(200).json({ message: "subscripton model updated successfully", data: newSubscriptionModel });
    }
    catch (e) {
        if (e instanceof client_1.PrismaClientKnownRequestError && e.code === 'P2025') {
            throw new errorHandler_1.ApiError('subscription model do not exist', 404);
        }
        logger_1.default.error('error while creating subscription model', e);
        throw new errorHandler_1.ApiError('Internal Server Error', 500);
    }
};
exports.updateSubscriptionModel = updateSubscriptionModel;
const deleteSubscriptionModel = async (req, res) => {
    logger_1.default.info("hit delete subscription model");
    try {
        const id = req.params.id;
        const deletedModel = await prisma_1.prisma.subscriptionModel.delete({ where: { id } });
        return res.status(200).json({ message: "subscripton model deleted successfully", data: deletedModel });
    }
    catch (e) {
        if (e instanceof client_1.PrismaClientKnownRequestError && e.code === 'P2025') {
            throw new errorHandler_1.ApiError('subscription model do not exist', 404);
        }
        logger_1.default.error('error while deleting subscription model', e);
        throw new errorHandler_1.ApiError('Internal Server Error', 500);
    }
};
exports.deleteSubscriptionModel = deleteSubscriptionModel;

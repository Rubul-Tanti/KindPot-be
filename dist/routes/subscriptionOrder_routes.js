"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscriptionOrderRouter = void 0;
const express_1 = require("express");
const authentication_1 = __importDefault(require("../middleware/authentication"));
const errorHandler_1 = require("../middleware/errorHandler");
const subscriptionOrder_1 = require("../controlers/subscriptionOrder");
exports.subscriptionOrderRouter = (0, express_1.Router)();
exports.subscriptionOrderRouter.post('/create-subscriptionOrder', (0, authentication_1.default)([]), (0, errorHandler_1.asyncError)(subscriptionOrder_1.createSubscriptionOrder));
exports.subscriptionOrderRouter.post('/status', (0, authentication_1.default)([]), (0, errorHandler_1.asyncError)(subscriptionOrder_1.checkPaymentStatus));
exports.subscriptionOrderRouter.post('/confirm-payment', (0, authentication_1.default)([]), (0, errorHandler_1.asyncError)(subscriptionOrder_1.confirmPayment));
exports.subscriptionOrderRouter.get('/orders', (0, errorHandler_1.asyncError)(subscriptionOrder_1.getOrders));

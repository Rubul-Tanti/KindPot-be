"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscriptionModelRouter = void 0;
const express_1 = require("express");
const authentication_1 = __importDefault(require("../middleware/authentication"));
const errorHandler_1 = require("../middleware/errorHandler");
const SubscriptionModel_1 = require("../controlers/SubscriptionModel");
exports.subscriptionModelRouter = (0, express_1.Router)();
exports.subscriptionModelRouter.post("/add", (0, authentication_1.default)(['ADMIN']), (0, errorHandler_1.asyncError)(SubscriptionModel_1.addSubscriptionModel));
exports.subscriptionModelRouter.get("/", (0, errorHandler_1.asyncError)(SubscriptionModel_1.getSubscriptionModels));
exports.subscriptionModelRouter.put("/update/:id", (0, authentication_1.default)(['ADMIN']), (0, errorHandler_1.asyncError)(SubscriptionModel_1.updateSubscriptionModel));
exports.subscriptionModelRouter.delete("/delete/:id", (0, authentication_1.default)(['ADMIN']), (0, errorHandler_1.asyncError)(SubscriptionModel_1.deleteSubscriptionModel));

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userCharityRouter = void 0;
const express_1 = require("express");
const authentication_1 = __importDefault(require("../middleware/authentication"));
const errorHandler_1 = require("../middleware/errorHandler");
const userCharity_1 = require("../controlers/userCharity");
exports.userCharityRouter = (0, express_1.Router)();
exports.userCharityRouter.get('/', (0, authentication_1.default)([]), (0, errorHandler_1.asyncError)(userCharity_1.getUserCharity));
exports.userCharityRouter.post('/create', (0, authentication_1.default)(['SUBSCRIBER', 'ADMIN']), (0, errorHandler_1.asyncError)(userCharity_1.createUserCharity));

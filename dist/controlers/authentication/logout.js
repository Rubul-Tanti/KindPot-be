"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = void 0;
const errorHandler_1 = require("../../middleware/errorHandler");
const logger_1 = __importDefault(require("../../utils/logger"));
const logout = async (req, res) => {
    logger_1.default.info("Hit logout controller");
    try {
        res.clearCookie("refresh_token", {
            httpOnly: true,
            secure: true,
        });
        return res.status(200).json({
            success: true,
            message: "Logged out successfully",
        });
    }
    catch (e) {
        logger_1.default.error("Error while logout", e);
        throw new errorHandler_1.ApiError("Internal Server Error", 500);
    }
};
exports.logout = logout;

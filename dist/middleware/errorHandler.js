"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerErrorHandler = exports.globalErrorHandler = exports.asyncError = exports.ApiError = void 0;
const multer_1 = __importDefault(require("multer"));
// Custom API Error
class ApiError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = this.constructor.name;
        this.statusCode = statusCode || 500;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.ApiError = ApiError;
// Wrapper to catch async errors in routes
const asyncError = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};
exports.asyncError = asyncError;
// Global error handler
const globalErrorHandler = (err, req, res) => {
    console.error("Error:", err); // good for debugging
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            status: "Error",
            message: err.message,
        });
    }
    if (err.name === "ValidationError") {
        return res.status(400).json({
            status: "Error",
            message: "Validation Error",
        });
    }
    if (err.name === "NotFoundError") {
        return res.status(404).json({
            status: "Error",
            message: "Invalid route: " + req.url,
        });
    }
    // Default fallback
    return res.status(500).json({
        status: "Error",
        message: "An unexpected error occurred",
    });
};
exports.globalErrorHandler = globalErrorHandler;
const multerErrorHandler = (err, req, res, next) => {
    if (err instanceof multer_1.default.MulterError) {
        const errorMap = {
            LIMIT_FILE_SIZE: {
                status: 413,
                message: 'File is too large. Maximum allowed size is 15MB.',
            },
            LIMIT_FILE_COUNT: {
                status: 400,
                message: 'Too many files uploaded at once.',
            },
            LIMIT_FIELD_KEY: {
                status: 400,
                message: 'Field name is too long.',
            },
            LIMIT_FIELD_VALUE: {
                status: 400,
                message: 'Field value is too long.',
            },
            LIMIT_FIELD_COUNT: {
                status: 400,
                message: 'Too many fields in the request.',
            },
            LIMIT_UNEXPECTED_FILE: {
                status: 400,
                message: `Unexpected field: "${err.field}". Please use the correct input name.`,
            },
            LIMIT_PART_COUNT: {
                status: 400,
                message: 'Too many parts in the multipart request.',
            },
        };
        const error = errorMap[err.code] ?? {
            status: 400,
            message: `Upload error: ${err.message}`,
        };
        return res.status(error.status).json({
            success: false,
            code: err.code,
            message: error.message,
        });
    }
    else if (err instanceof Error) {
        // Handles custom errors thrown from fileFilter
        return res.status(400).json({
            success: false,
            code: 'INVALID_FILE_TYPE',
            message: err.message,
        });
    }
    next(err); // Pass unknown errors to default Express error handler
};
exports.multerErrorHandler = multerErrorHandler;

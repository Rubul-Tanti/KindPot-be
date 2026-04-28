"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const req_logger_1 = require("./middleware/req_logger");
const auth_routes_1 = __importDefault(require("./routes/auth_routes"));
const user_1 = require("./routes/user");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const charity_routes_1 = __importDefault(require("./routes/charity_routes"));
const golf_score_routes_1 = __importDefault(require("./routes/golf_score_routes"));
const errorHandler_1 = require("./middleware/errorHandler");
const cors_config_1 = require("./config/cors_config");
const cors_1 = __importDefault(require("cors"));
const subscriptionOrder_routes_1 = require("./routes/subscriptionOrder_routes");
const subscriptionModel_routes_1 = require("./routes/subscriptionModel_routes");
const userCharity_routes_1 = require("./routes/userCharity_routes");
const app = (0, express_1.default)();
app.use((0, cors_1.default)(cors_config_1.corsConfig));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
// logger function
app.use(req_logger_1.requestLogger);
//routes
app.use('/api/auth', auth_routes_1.default);
app.use('/api/user', user_1.userRouter);
app.use('/api/charity', charity_routes_1.default);
app.use('/api/golf-score', golf_score_routes_1.default);
app.use('/api/subscription-model', subscriptionModel_routes_1.subscriptionModelRouter);
app.use('/api/payment', subscriptionOrder_routes_1.subscriptionOrderRouter);
app.use('/api/user-charity', userCharity_routes_1.userCharityRouter);
app.use(errorHandler_1.globalErrorHandler);
exports.default = app;

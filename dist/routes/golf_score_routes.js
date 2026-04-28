"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const errorHandler_1 = require("../middleware/errorHandler");
const authentication_1 = __importDefault(require("../middleware/authentication"));
const index_1 = require("../controlers/golf_score/index");
const golfScoreRouter = express_1.default.Router();
golfScoreRouter.post('/add', (0, authentication_1.default)(['SUBSCRIBER', 'ADMIN']), (0, errorHandler_1.asyncError)(index_1.createGolfScore));
golfScoreRouter.get('/last-five', (0, authentication_1.default)([]), (0, errorHandler_1.asyncError)(index_1.getLastFiveScores));
golfScoreRouter.get('/', (0, authentication_1.default)([]), (0, errorHandler_1.asyncError)(index_1.getUserGolfScores));
golfScoreRouter.get('/stats', (0, authentication_1.default)(['SUBSCRIBER', 'ADMIN']), (0, errorHandler_1.asyncError)(index_1.getUserScoreStats));
golfScoreRouter.get('/:id', (0, authentication_1.default)(['SUBSCRIBER', 'ADMIN']), (0, errorHandler_1.asyncError)(index_1.getGolfScoreById));
golfScoreRouter.put('/:id', (0, authentication_1.default)(['SUBSCRIBER', 'ADMIN']), (0, errorHandler_1.asyncError)(index_1.updateGolfScore));
golfScoreRouter.delete('/:id', (0, authentication_1.default)(['SUBSCRIBER', 'ADMIN']), (0, errorHandler_1.asyncError)(index_1.deleteGolfScore));
golfScoreRouter.get('/admin/all', (0, authentication_1.default)(['ADMIN']), (0, errorHandler_1.asyncError)(index_1.getAllGolfScores));
exports.default = golfScoreRouter;

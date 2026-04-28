import express from 'express';
import { asyncError } from '../middleware/errorHandler';
import authorizationMiddleware from '../middleware/authentication';
import {
  createGolfScore,
  getUserGolfScores,
  getGolfScoreById,
  updateGolfScore,
  deleteGolfScore,
  getUserScoreStats,
  getAllGolfScores,
  getLastFiveScores,
} from '../controlers/golf_score/index';

const golfScoreRouter = express.Router();

golfScoreRouter.post('/add',authorizationMiddleware(['SUBSCRIBER','ADMIN']),asyncError(createGolfScore));
golfScoreRouter.get('/last-five',authorizationMiddleware([]),asyncError(getLastFiveScores));
golfScoreRouter.get('/',authorizationMiddleware([]),asyncError(getUserGolfScores));
golfScoreRouter.get('/stats',authorizationMiddleware(['SUBSCRIBER','ADMIN']),asyncError(getUserScoreStats));
golfScoreRouter.get('/:id',authorizationMiddleware(['SUBSCRIBER','ADMIN']),asyncError(getGolfScoreById));
golfScoreRouter.put('/:id',authorizationMiddleware(['SUBSCRIBER','ADMIN']),asyncError(updateGolfScore));
golfScoreRouter.delete('/:id',authorizationMiddleware(['SUBSCRIBER','ADMIN']),asyncError(deleteGolfScore));
golfScoreRouter.get('/admin/all',authorizationMiddleware(['ADMIN']),asyncError(getAllGolfScores));

export default golfScoreRouter;

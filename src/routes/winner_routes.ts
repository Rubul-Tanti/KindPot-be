import express from "express";
import * as winnerController from "../controlers/winner/index";
import { uploadMiddleware } from "../middleware/multer";
import authorizationMiddleware from "../middleware/authentication";

const winnerrouter = express.Router();


winnerrouter.post("/",authorizationMiddleware(['SUBSCRIBER']),uploadMiddleware.single('image'),winnerController.createWinner)
winnerrouter.patch("/verification-status/:id",authorizationMiddleware(['ADMIN']),winnerController.updateWinnerVerificationStatus)
winnerrouter.patch("/payment-status/:id",authorizationMiddleware(['ADMIN']),winnerController.updateWinnerPaymentStatus)

export default winnerrouter;

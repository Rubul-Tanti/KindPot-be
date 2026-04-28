import express from "express";
import * as winnerController from "../controlers/winner/index";
import { uploadMiddleware } from "../middleware/multer";
import authorizationMiddleware from "../middleware/authentication";

const winnerrouter = express.Router();


winnerrouter.post("/",authorizationMiddleware(['SUBSCRIBER']),uploadMiddleware.single('image'),winnerController.createWinner)
export default winnerrouter;

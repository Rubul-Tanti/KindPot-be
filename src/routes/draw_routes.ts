import express from "express";
import * as drawController from "../controlers/draw/index";
import authorizationMiddleware from "../middleware/authentication";
import { asyncError } from "../middleware/errorHandler";

const Drawrouter = express.Router();

// Admin only - write operations
Drawrouter.post("/", authorizationMiddleware(["ADMIN"]), asyncError(drawController.createDrawHandler));
Drawrouter.patch("/:drawId", authorizationMiddleware(["ADMIN"]), asyncError(drawController.updateDrawHandler));
Drawrouter.patch("/publish-result/:drawId", authorizationMiddleware(["ADMIN"]), asyncError(drawController.publishDrawResult));
Drawrouter.patch("/:drawId/status", authorizationMiddleware(["ADMIN"]), asyncError(drawController.updateDrawStatusHandler));
Drawrouter.post("/:drawId/jackpot-rollover", authorizationMiddleware(["ADMIN"]), asyncError(drawController.addJackpotRolloverHandler));
Drawrouter.delete("/:drawId", authorizationMiddleware(["ADMIN"]), asyncError(drawController.deleteDrawHandler));

// Admin only - sensitive reads
Drawrouter.get("/needs-verification", authorizationMiddleware(["ADMIN"]), asyncError(drawController.getDrawsNeedingVerificationHandler));
Drawrouter.get("/statistics/:drawId", authorizationMiddleware(["ADMIN"]), asyncError(drawController.getDrawStatisticsHandler));

// Authenticated users
Drawrouter.get("/active", authorizationMiddleware([]), asyncError(drawController.getActiveDrawsHandler));
Drawrouter.get("/prize-distribution/:drawId", authorizationMiddleware(["ADMIN", "SUBSCRIBER"]), asyncError(drawController.getPrizeDistributionHandler));
Drawrouter.get("/:drawId", authorizationMiddleware(["ADMIN", "SUBSCRIBER"]), asyncError(drawController.getDrawByIdHandler));

// Public
Drawrouter.get("/", asyncError(drawController.getAllDrawsHandler));

export default Drawrouter;
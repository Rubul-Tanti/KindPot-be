"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const winnerController = __importStar(require("../controlers/winner/index"));
const router = express_1.default.Router();
/**
 * Winner Routes
 * Base path: /api/winners
 */
//  CREATE
router.post("/", winnerController.createWinnerHandler);
router.post("/batch", winnerController.createMultipleWinnersHandler);
//  READ
router.get("/pending-verification", winnerController.getPendingVerificationWinnersHandler);
router.get("/pending-payment", winnerController.getPendingPaymentWinnersHandler);
router.get("/leaderboard", winnerController.getLeaderboardHandler);
router.get("/draw/:drawId", winnerController.getWinnersByDrawIdHandler);
router.get("/user/:userId", winnerController.getWinnersByUserIdHandler);
router.get("/report/:userId", winnerController.getUserWinningsReportHandler);
router.get("/summary/:drawId", winnerController.getDrawWinningsSummaryHandler);
router.get("/:winnerId", winnerController.getWinnerByIdHandler);
router.get("/", winnerController.getAllWinnersHandler);
//  UPDATE
router.patch("/:winnerId", winnerController.updateWinnerHandler);
//  VERIFICATION
router.post("/:winnerId/proof", winnerController.uploadProofImageHandler);
router.post("/:winnerId/approve", winnerController.approveWinnerHandler);
router.post("/:winnerId/reject", winnerController.rejectWinnerHandler);
//  PAYMENT
router.post("/:winnerId/mark-paid", winnerController.markAsPaidHandler);
router.post("/:winnerId/mark-failed", winnerController.markAsPaymentFailedHandler);
router.post("/batch/mark-paid", winnerController.batchMarkAsPaidHandler);
//  UTILITY
router.post("/:drawId/calculate-prizes", winnerController.calculateTierPrizeAmountsHandler);
router.get("/check/:userId/:drawId", winnerController.hasUserAlreadyWonHandler);
//  DELETE
router.delete("/:winnerId", winnerController.deleteWinnerHandler);
router.delete("/draw/:drawId", winnerController.deleteWinnersByDrawIdHandler);
exports.default = router;

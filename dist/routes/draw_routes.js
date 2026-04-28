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
const drawController = __importStar(require("../controlers/draw/index"));
const router = express_1.default.Router();
/**
 * Draw Routes
 * Base path: /api/draws
 */
//  CREATE
router.post("/", drawController.createDrawHandler);
//  READ
router.get("/active", drawController.getActiveDrawsHandler);
router.get("/date-range", drawController.getDrawsByDateRangeHandler);
router.get("/by-number/:drawNumber", drawController.getDrawByNumberHandler);
router.get("/statistics/:drawId", drawController.getDrawStatisticsHandler);
router.get("/prize-distribution/:drawId", drawController.getPrizeDistributionHandler);
router.get("/needs-verification", drawController.getDrawsNeedingVerificationHandler);
router.get("/:drawId", drawController.getDrawByIdHandler);
router.get("/", drawController.getAllDrawsHandler);
//  UPDATE
router.patch("/:drawId", drawController.updateDrawHandler);
router.patch("/:drawId/status", drawController.updateDrawStatusHandler);
//  JACKPOT ROLLOVER
router.post("/:drawId/jackpot-rollover", drawController.addJackpotRolloverHandler);
//  DELETE
router.delete("/:drawId", drawController.deleteDrawHandler);
exports.default = router;

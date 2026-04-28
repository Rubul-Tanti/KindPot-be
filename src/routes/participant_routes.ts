import express, { Router } from "express";
import {
  createParticipant,
  getParticipantById,
  updateParticipantScore,
  deleteParticipant,
  removeParticipantFromDraw,
  getParticipantsByDrawId,
} from "../controlers/participant/index";
import authenticate from "../middleware/authentication";

const participantRouter: Router = express.Router();
participantRouter.post("/", authenticate(['SUBSCRIBER']), createParticipant);

participantRouter.get("/:id", getParticipantById);
participantRouter.get("/draw/:drawId",authenticate(['ADMIN']), getParticipantsByDrawId);
participantRouter.put("/:id", authenticate, updateParticipantScore);
participantRouter.post("/remove", authenticate, removeParticipantFromDraw);

export default participantRouter;

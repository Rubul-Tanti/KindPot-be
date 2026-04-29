import { Request, Response } from "express";
import { ApiError } from "../../middleware/errorHandler";
import { uploadToCloudinary } from "../../services/uploadToCloudinary";
import { prisma } from "../../db/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";

export const createWinner = async (req: Request, res: Response) => {
  try {
    const userId = req?.user?.id as string;

    // file validation
    const file = (req as any).file
    if (!file) {
      return res.status(400).json({ message: "Image is required" });
    }

    //  upload image

    const upload = await uploadToCloudinary(file);

    //  get active draw
    const draw = await prisma.draw.findFirst({
      where: { status: "active" },
    });

    if (!draw) {
      return res.status(404).json({ message: "No active draw found" });
    }

    if (!draw.drawNumber) {
      return res.status(400).json({
        message: "Result hasn't been published yet",
      });
    }
    const amount=(draw.prizePool*draw.fiveMatchPct)/100
    //  check participant
    const participant = await prisma.participant.findFirst({
      where: { userId, drawId: draw.id },
    });

    if (!participant) {
      return res.status(404).json({
        message: "You did not participate in this draw",
      });
    }

    //  prevent duplicate claim
    const existingWinner = await prisma.winner.findFirst({
      where: { userId, drawId: draw.id },
    });

    if (existingWinner) {
      return res.status(400).json({
        message: "You have already claimed this draw",
      });
    }

    //  safe parsing
    const participantScores =
      participant.score?.split(",").map((s) => s.trim()) || [];

    const drawResults =
      draw.drawNumber?.split(",").map((s) => s.trim()) || [];

    //  calculate matches
    let tempScores = [...participantScores];
let match = 0;

 drawResults.forEach((num) => {
  const index = tempScores.indexOf(num);
  if (index !== -1) {
    match++;
    tempScores.splice(index, 1);
  }
});
    match=5-tempScores.length
    //  not a winner
    if (match < 3) {
      return res.status(400).json({
        message: "Not enough matches to claim prize",
        matchCount: match,
      });
    }

    //  determine winner type
    let winnerType: "threeMatch" | "fourMatch" | "fiveMatch";

    if (match === 3) winnerType = "threeMatch";
    else if (match === 4) winnerType = "fourMatch";
    else winnerType = "fiveMatch";

    //  create winner
    const winner = await prisma.winner.create({
      data: {

        userId,
        drawId: draw.id,
        winnerScore: participant.score,
        winnerType,
        proofImage: upload.url ,
        paymentStatus:"pending",
        verificationStatus:"pending",
        prizeAmount:amount,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Claim submitted successfully",
      data: {
        winner,
        matchCount: match,
      },
    });
  } catch (e) {
    console.error(e);
    throw new ApiError("Internal server Error", 500);
  }
};

export const updateWinnerVerificationStatus=async(req:Request,res:Response)=>{
  try{
    const status=req.body.status
    if(!status){
      res.status(200).json({message:"required status"})
    }
    const id=req.params.id as string
    const updatedVerificationStatus=await prisma.winner.update({where:{id},data:{verificationStatus:status,verifiedAt:new Date}})
    res.status(200).json({message:"updated Verification successfully",data:updateWinnerVerificationStatus})
  }catch(e){
    if(e instanceof PrismaClientKnownRequestError&&e.code =="P2025"){
      return res.status(404).json({message:"not found"})
    }
    throw new ApiError('internal server error',500)
  }
}
export const updateWinnerPaymentStatus=async(req:Request,res:Response)=>{
  try{
    const status=req.body.status
    if(!status){
      res.status(200).json({message:"required status"})
    }
    const id=req.params.id as string
    const updatedPaymentStatus=await prisma.winner.update({where:{id},data:{paymentStatus:status}})
    res.status(200).json({message:"updated Verification successfully",data:updatedPaymentStatus})
  }catch(e){
    if(e instanceof PrismaClientKnownRequestError&&e.code =="P2025"){
      return res.status(404).json({message:"not found"})
    }
    throw new ApiError('internal server error',500)
  }
}
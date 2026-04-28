import { Request, Response } from "express";
import { prisma } from "../../db/prisma";
import { DrawStatus } from "../../generated/prisma";
import { ApiError } from "../../middleware/errorHandler";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";


export const dashboardOverview=async(req:Request,res:Response)=>{
  try{
    const subscription=req?.user?.subscriptionOrder
    const  winner=await prisma.winner.findMany({where:{userId:req?.user?.id}})
    const totalWon = winner.reduce((sum, item) => {
  return sum + (item.prizeAmount ?? 0);
}, 0);
    const  charity=await prisma.userCharity.findMany({where:{userId:req?.user?.id}})
    const totalDonated = charity.reduce((sum, item) => {
  return sum + (Number(item.amount) ?? 0);
}, 0);
const totalParticipated=await prisma.participant.count({where:{userId:req?.user?.id}})
return res.status(200).json({message:"successfully fetched Dashboard overview",data:{subscription:subscription,totalWon:totalWon/100,totalDonated:totalDonated/100,totalParticipated}})
  }catch(e){
    throw new ApiError("Internal server Error",500)
  }
}

export const createDrawHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
       const draws = await prisma.draw.findFirst({
      where: { status: "active",},});
      if(draws){
        res.status(400).json({message:"cannot create a draw while another draw is active"})
        return;
      }
    const adminId = (req as any).user?.id;
    if (!adminId) {
      res.status(401).json({ error: "Unauthorized: Admin ID required" });
      return;
    }

    const {
      prizePool,
      currency,
      entryStartDate,
      lastEntryDate,
      resultDate,
      fiveMatchPct,
      fourMatchPct,
      threeMatchPct,
    } = req.body;

    if ( !prizePool || !entryStartDate || !lastEntryDate || !resultDate) {
      res.status(400).json({ error: "Missing required fields" });
      return;
    }

    const fiveMatch = Number(fiveMatchPct) || 40;
    const fourMatch = Number(fourMatchPct) || 35;
    const threeMatch = Number(threeMatchPct) || 25;
    const sum=fiveMatch+fourMatch+threeMatch
    if (sum!== 100) {
      res.status(400).json({ error: "Prize percentages must sum to 100" });
      return;
    }

    const draw = await prisma.draw.create({
      data: {
        adminId,
        prizePool:Number(prizePool),
        currency: currency || "USD",
        entryStartDate: new Date(entryStartDate),
        lastEntryDate: new Date(lastEntryDate),
        resultDate: new Date(resultDate),
        fiveMatchPct: fiveMatch,
        fourMatchPct: fourMatch,
        threeMatchPct: threeMatch,
        status: "active" as any,
      },
      include: {
        admin: {
          select: { id: true, email: true, userName: true },
        },
        winners: true,
      },
    });

    res.status(201).json({
      success: true,
      message: "Draw created successfully",
      data: draw,
    });
  } catch (error: any) {
    console.log(error)
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

//  READ

export const getDrawByIdHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const  drawId  = req.params.drawId as string;

    const draw = await prisma.draw.findUnique({
      where: { id: drawId },
      include: {
        admin: {
          select: { id: true, email: true, userName: true },
        },
        winners: {
          include: {
            user: {
              select: { id: true, email: true, userName: true },
            },
          },
        },
        rolledOverFrom: true,
        rolledOverTo: true,
      },
    });

    if (!draw) {
      res.status(404).json({ error: "Draw not found" });
      return;
    }

    res.status(200).json({
      success: true,
      data: draw,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};


export const getAllDrawsHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      status,
      page = 1,
      limit = 10,
      year,
      month,
    } = req.query;

    const queryPage = Math.max(1, parseInt(String(page)) || 1);
    const queryLimit = Math.max(1, parseInt(String(limit)) || 10);
    const skip = (queryPage - 1) * queryLimit;

    const where: any = {};

    if (status) {
      where.status = status as DrawStatus;
    }

    if (year || month) {
      const y = parseInt(String(year)) || new Date().getFullYear();
      const m = month ? parseInt(String(month)) - 1 : 0;

      const startDate = new Date(y, m, 1);
      const endDate = month
        ? new Date(y, m + 1, 1)
        : new Date(y + 1, 0, 1);

      where.createdAt = {
        gte: startDate,
        lt: endDate,
      };
    }

    const [draws, total] = await Promise.all([
      prisma.draw.findMany({
        where,
        skip,
        take: queryLimit,
        orderBy: { createdAt: "desc" },
        include: {
          admin: {
            select: { id: true, email: true, userName: true },
          },
          winners: true,
        },
      }),
      prisma.draw.count({ where }),
    ]);

    res.status(200).json({
      success: true,
      data: draws,
      pagination: {
        page: queryPage,
        limit: queryLimit,
        total,
        pages: Math.ceil(total / queryLimit),
        hasNext: queryPage * queryLimit < total,
        hasPrev: queryPage > 1,
      },
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export const getActiveDrawsHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId=req?.user?.id as string
    const draws = await prisma.draw.findFirst({
      where: { status: "active",},
      include: {
        admin: {
          select: { id: true, email: true, userName: true },
        },
      },
      orderBy: { resultDate: "asc" },
    });

    const totalParticipants=await prisma.participant.count({where:{drawId:draws?.id}})
    const participated=await prisma.participant.findFirst({where:{userId,drawId:draws?.id}})
    res.status(200).json({
      success: true,
      data: draws,
      totalParticipants:totalParticipants,
      yourParticipation:participated
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};


//  UPDATE

export const updateDrawHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const  drawId = req.params.drawId as string;
    const updateData = { ...req.body };

    // Validate prize percentages if provided
    if (updateData.fiveMatchPct || updateData.fourMatchPct || updateData.threeMatchPct) {
      const currentDraw = await prisma.draw.findUnique({ where: { id: drawId } });
      if (!currentDraw) {
        res.status(404).json({ error: "Draw not found" });
        return;
      }

      const fiveMatch = Number(updateData.fiveMatchPct) || currentDraw.fiveMatchPct;
      const fourMatch = Number(updateData.fourMatchPct) || currentDraw.fourMatchPct;
      const threeMatch = Number(updateData.threeMatchPct) || currentDraw.threeMatchPct;

      if (fiveMatch + fourMatch + threeMatch !== 100) {
        res.status(400).json({ error: "Prize percentages must sum to 100" });
        return;
      }
    }

    // Convert date strings to Date objects if provided
    if (updateData.entryStartDate) updateData.entryStartDate = new Date(updateData.entryStartDate);
    if (updateData.lastEntryDate) updateData.lastEntryDate = new Date(updateData.lastEntryDate);
    if (updateData.resultDate) updateData.resultDate = new Date(updateData.resultDate);

    const draw = await prisma.draw.update({
      where: { id: drawId },
      data: updateData,
      include: {
        admin: {
          select: { id: true, email: true, userName: true },
        },
        winners: true,
      },
    });

    res.status(200).json({
      success: true,
      message: "Draw updated successfully",
      data: draw,
    });
  } catch (error: any) {
    console.log(error)
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export const updateDrawStatusHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const  drawId  = req.params.drawId as string;
    const { status } = req.body;

    if (!status || !["active", "completed", "cancelled"].includes(status)) {
      res.status(400).json({
        error: "Invalid status. Must be: active, completed, or cancelled",
      });
      return;
    }

    const draw = await prisma.draw.update({
      where: { id: drawId },
      data: { status },
      include: {
        admin: {
          select: { id: true, email: true, userName: true },
        },
        winners: true,
      },
    });

    res.status(200).json({
      success: true,
      message: `Draw status updated to ${status}`,
      data: draw,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

//  JACKPOT ROLLOVER

export const addJackpotRolloverHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const  drawId= req.params.drawId as string;
    const { rolledOverFromId, additionalPrizePool } = req.body;

    if (!rolledOverFromId) {
      res.status(400).json({ error: "rolledOverFromId is required" });
      return;
    }

    const currentDraw = await prisma.draw.findUnique({
      where: { id: drawId },
    });
    if (!currentDraw) {
      res.status(404).json({ error: "Draw not found" });
      return;
    }

    const rolledOverFrom = await prisma.draw.findUnique({
      where: { id: rolledOverFromId },
    });
    if (!rolledOverFrom) {
      res.status(404).json({ error: "Source draw not found" });
      return;
    }

    const newPrizePool = currentDraw.prizePool + (additionalPrizePool || 0);

    const draw = await prisma.draw.update({
      where: { id: drawId },
      data: {
        jackpotRolledOver: true,
        rolledOverFromId,
        prizePool: newPrizePool,
      },
      include: {
        admin: {
          select: { id: true, email: true, userName: true },
        },
        winners: true,
        rolledOverFrom: true,
      },
    });

    res.status(200).json({
      success: true,
      message: "Jackpot rollover added successfully",
      data: draw,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

//  PRIZE CALCULATIONS

export const getPrizeDistributionHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const drawId  = req.params.drawid as string;

    const draw = await prisma.draw.findUnique({
      where: { id: drawId },
    });

    if (!draw) {
      res.status(404).json({ error: "Draw not found" });
      return;
    }

    const distribution = {
      totalPool: draw.prizePool,
      fiveMatchPrize: Math.floor(draw.prizePool * (draw.fiveMatchPct / 100)),
      fourMatchPrize: Math.floor(draw.prizePool * (draw.fourMatchPct / 100)),
      threeMatchPrize: Math.floor(draw.prizePool * (draw.threeMatchPct / 100)),
    };

    res.status(200).json({
      success: true,
      data: distribution,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

//  STATISTICS

export const getDrawStatisticsHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const  drawId  = req.params.drawId as string;

    const draw = await prisma.draw.findUnique({
      where: { id: drawId },
      include: {
        winners: true,
      },
    });

    if (!draw) {
      res.status(404).json({ error: "Draw not found" });
      return;
    }

    const fiveMatch = draw.winners.filter(
      (w: any) => w.winnerType === "fiveMatch"
    ).length;
    const fourMatch = draw.winners.filter(
      (w: any) => w.winnerType === "fourMatch"
    ).length;
    const threeMatch = draw.winners.filter(
      (w: any) => w.winnerType === "threeMatch"
    ).length;
    const verified = draw.winners.filter(
      (w: any) => w.verificationStatus === "approved"
    ).length;
    const pending = draw.winners.filter(
      (w: any) => w.verificationStatus === "pending"
    ).length;
    const totalPaidOut = draw.winners
      .filter((w: any) => w.paymentStatus === "paid")
      .reduce((sum: number, w: any) => sum + (w.prizeAmount || 0), 0);

    const statistics = {
      totalWinners: draw.winners.length,
      fiveMatchWinners: fiveMatch,
      fourMatchWinners: fourMatch,
      threeMatchWinners: threeMatch,
      verifiedWinners: verified,
      pendingVerification: pending,
      totalPaidOut,
    };

    res.status(200).json({
      success: true,
      data: statistics,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export const getDrawsNeedingVerificationHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const draws = await prisma.draw.findMany({
      where: {
        status: "completed",
        winners: {
          some: {
            verificationStatus: "pending",
          },
        },
      },
      include: {
        winners: {
          where: {
            verificationStatus: "pending",
          },
        },
      },
    });

    res.status(200).json({
      success: true,
      data: draws,
      count: draws.length,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

//  DELETE

export const deleteDrawHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const  drawId  = req.params.drawId as string;

    await prisma.draw.delete({
      where: { id: drawId },
    });

    res.status(200).json({
      success: true,
      message: "Draw deleted successfully",
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export const publishDrawResult=async(req:Request,res:Response)=>{
  try{
    const drawId=req.params.drawId as string;
    const {result}=req.body
    if(!result){
      return res.status(400).json({message:"input validation error",error:"result required"})
    }
      const draws = await prisma.draw.update({
      where: { status: "active",id:drawId},data:{drawNumber:result,resultDate:new Date}
    });
    res.status(200).json({message:"successfully pubslished result"})
  }catch(e){
      if( e instanceof PrismaClientKnownRequestError && e.code ==='P2025'){
        return res.status(404).json({mesage:"draw not found"})
      }
    throw new ApiError("internal server error",500)
  }
}
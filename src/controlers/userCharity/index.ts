
import {Request,Response} from "express"
import { ApiError } from "../../middleware/errorHandler"
import logger from "../../utils/logger"
import { prisma } from "../../db/prisma"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client"

export const getUserCharity=async(req:Request,res:Response)=>{
    logger.info('get user Charity')
    try{
        const subscription=req?.user?.subscriptionOrder
        const id=subscription?.id
        if(!id){
         return res.status(400).json({message:'user not subscribed'})
        }
        const userCharity=await prisma.userCharity.findFirst({where:{subscriptionId:id},include:{charity:{include:{images:true}}}})
        res.status(200).json({message:'successfully fetched userCharity',data:userCharity})

    }catch(e){
        if(e instanceof PrismaClientKnownRequestError && e.code=='P2025'){
            res.status(404).json("user charity not found")
        }
        logger.error("error while fetching user Charity",e)
        throw new ApiError('internal server Error',500)
    }
}

export const createUserCharity= async (req: Request, res: Response) => {
  try {
    const { charityId, percentage } = req.body;
    const user = req.user;
    const subscription = user?.subscriptionOrder;
    if (!charityId || !percentage) {
      return res.status(400).json({
        message: "charityId and percentage are required",
      });
    }
    if (!subscription) {
      return res.status(404).json({
        message: "User is not subscribed",
      });
    }

    if (percentage <= 0 || percentage > 100) {
      return res.status(400).json({
        message: "Percentage must be between 1 and 100",
      });
    }

    const amount = (percentage * subscription.amount) / 100;

    const now = new Date();
        const alreadyExit=await prisma.userCharity.findMany({where:{subscriptionId:subscription.id}})
        if(alreadyExit!==null&&alreadyExit.length>0){
            return res.status(400).json({alreadyExis:alreadyExit,message:"Can only donate to one org with one subscription"})
        }
    const userCharity = await prisma.userCharity.create({
      data: {
        type: "SUBSCRIPTION_PERCENTAGE",
        month: now.getMonth() + 1,
        year: now.getFullYear(),
        paidAt: now,
        currency: subscription.currency,
        userId: user.id,
        charityId,
        subscriptionId: subscription.id,
        amount,
        percentage
      },include:{charity:{include:{images:true}}}
    });

    return res.status(201).json({
      message: "Charity contribution created successfully",
      data: userCharity,
    });

  } catch (e) {
 if(e instanceof PrismaClientKnownRequestError && e.code=='P2025'){
            res.status(404).json("user charity not found")
        }
        logger.error("error while creating user Charity",e)
        throw new ApiError('internal server Error',500)
  }
};
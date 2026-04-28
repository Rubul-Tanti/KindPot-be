import logger from "../../utils/logger"
import {Request,Response} from "express"
import { ApiError } from "../../middleware/errorHandler"
import { createSubscriptionModelSchema, updateSubscriptionModelSchema } from "../../utils/validatons/subcriptionModel"
import { prisma } from "../../db/prisma"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client"
//add subscription model
export const addSubscriptionModel=async(req:Request,res:Response)=>{
    logger.info("hit add subscription")
    try{
        const vr=createSubscriptionModelSchema.safeParse(req.body)
        if(!vr.success){
            return res.status(400).json({message:"input validation error",error:vr.error.flatten().fieldErrors})
        }
        const subscriptionModelData=vr.data
        const newSubscriptionModel=await prisma.subscriptionModel.create({data:subscriptionModelData})
        return res.status(201).json({message:"subscripton model created successfully",data:newSubscriptionModel})
    }catch(e){
        logger.error('error while creating subscription model',e)
        throw new ApiError('Internal Server Error',500)
    }
}

export const getSubscriptionModels=async(req:Request,res:Response)=>{
    logger.info("hit get subscription models")
    try{
        const models=await prisma.subscriptionModel.findMany()
        return res.status(200).json({message:"sucessfully fetched subscription models",data:models})
    }catch(e){
        logger.error('error while fetching subscription model',e)
        throw new ApiError('Internal Server Error',500)
    }
}
export const updateSubscriptionModel=async(req:Request,res:Response)=>{
  logger.info("hit update subscription model")
    try{
        const id=req.params.id as string
        const vr=updateSubscriptionModelSchema.safeParse(req.body)
        if(!vr.success){
            return res.status(400).json({message:"input validation error",error:vr.error.flatten().fieldErrors})
        }
        const subscriptionModelData=vr.data
        const newSubscriptionModel=await prisma.subscriptionModel.update({where:{id},data:subscriptionModelData})
       return res.status(200).json({message:"subscripton model updated successfully",data:newSubscriptionModel})

    }catch(e){
                if(e instanceof PrismaClientKnownRequestError&&e.code==='P2025'){
            throw new ApiError('subscription model do not exist',404)
        }
        logger.error('error while creating subscription model',e)
        throw new ApiError('Internal Server Error',500)
    }
}

export const deleteSubscriptionModel=async(req:Request,res:Response)=>{
    logger.info("hit delete subscription model")
    try{
        const id=req.params.id as string
        const deletedModel=await prisma.subscriptionModel.delete({where:{id}})

      return res.status(200).json({message:"subscripton model deleted successfully",data:deletedModel})
    }catch(e){
        if(e instanceof PrismaClientKnownRequestError&&e.code==='P2025'){
            throw new ApiError('subscription model do not exist',404)
        }
        logger.error('error while deleting subscription model',e)
        throw new ApiError('Internal Server Error',500)
    }
}
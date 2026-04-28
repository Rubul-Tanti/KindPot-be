import {Request,Response} from 'express'
import { ApiError } from '../../middleware/errorHandler'
import logger from '../../utils/logger'
import {updateUserSchema } from '../../utils/validatons/userValidation'
import { prisma } from '../../db/prisma'
import { UserRole } from '../../types/user'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/client'
import { getsafeUser } from '../authentication/loginUser'
import { boolean } from 'zod'
export const updateUser=async(req:Request,res:Response)=>{
logger.info("hit update user")
    try{
    const validationResult=await updateUserSchema.safeParse(req.body)
    if(validationResult.error){
        return res.status(400).json({message:'validation error',error:validationResult.error.flatten()})
    }
    try{
        const user=await prisma.user.update({where:{id:req.user?.id,deletedAt:null},data:validationResult.data})
        res.status(200).json({message:"updated successfully",data:user,})
        logger.info("updated user",user)
    }catch{
        return res.status(402).json({message:'not authorized'})
    }

}catch(e){
    logger.error("error while updating user",e)
    throw new ApiError("internal server error",500)
}
}

export const asignRole=async(req:Request,res:Response)=>{
    try{
        const validRoles:UserRole[]=['ADMIN','SUBSCRIBER','VIEWER']
        const userId=req.params.id as string
        const role:UserRole=req.body.role
        if(!role||!validRoles.includes(role)){
            return res.status(400).json({message:"valid role is required"})
        }

        const newUser=await prisma.user.update({where:{publicId:userId,deletedAt:null},data:{role}})
        return res.status(200).json({message:"successfully assigned role ",data:getsafeUser(newUser)})
    }catch(e){
        logger.error("error while updating user",e)
           if (e instanceof PrismaClientKnownRequestError && e.code === 'P2025') {
         res.status(404).json({ message: 'User not found' })
         return
    }
            throw new ApiError("internal server error",500)
    }
}
export const handleIsActive=async(req:Request,res:Response)=>{
    try{
        const userId=req.params.id as string
        const isActive=req.body.isActive
        if(typeof isActive !=='boolean'){
            return res.status(400).json({message:"isActive is required"})
        }

        const newUser=await prisma.user.update({where:{publicId:userId,deletedAt:null},data:{isActive}})
        return res.status(200).json({message:"successfully updatedIsActive ",data:getsafeUser(newUser)})
    }catch(e){
        logger.error("error while updating user",e)
           if (e instanceof PrismaClientKnownRequestError && e.code === 'P2025') {
         res.status(404).json({ message: 'User not found' })
         return
    }
            throw new ApiError("internal server error",500)
    }
}

export const deleteUser=async(req:Request,res:Response)=>{
    try{logger.info('hit delete user controler')
        const id=req.user?.id
        if(!id){
         return   res.status(401).json({message:'not authorized'})
        }
        const deletedUser=await prisma.user.update({where:{id:req.user?.id},data:{deletedAt:new Date()}})
        res.status(200).json({message:'user deleted successfully',data:getsafeUser(deletedUser)})
    }catch(e){
        logger.error("error deleting user",req.user?.id)
        throw new ApiError('internal server error',500)
    }
}
import {Request,Response} from 'express'
import { ApiError } from '../../middleware/errorHandler'
import logger from '../../utils/logger'
import { loginUserSchema } from '../../utils/validatons/userValidation'
import { prisma } from '../../db/prisma'
import { comparePassword } from '../../utils/hashPassword'
import { generateAccessToken, generateRefreshToken } from '../../utils/generateToken'
import { User } from '../../generated/prisma'

export const getsafeUser=(user:User)=>{
return {
                email:user.email,
                profilePicture:user.profilePicture,
                role:user.role,
                id:user.publicId,
                phoneNumber:user.phoneNumber,
                userName:user.userName,
            }
}

const LoginUser=async(req:Request,res:Response)=>{
    try{
        const validationResult=await loginUserSchema.safeParse(req.body)
        if(validationResult.error){
            logger.warn('error while validation',validationResult.error.flatten())
            return res.status(400).json({error:validationResult.error.flatten(),message:'validation error'})
        }
        const {email,password}=validationResult.data
        const user=await prisma.user.findFirst({where:{email,authProvider:'EMAIL'}})
        if(user===null){
            logger.warn('email or password is incorrect')
            return res.status(401).json({message:"email or password is incorrect"})
        }
        const matchedPassword=await comparePassword(password,user.password)
        if(!matchedPassword){
            logger.warn('email or password is incorrect')
            return res.status(401).json({message:"email or password is incorrect"})
        }
            const ActiveSubs=await prisma.subscriptionOrder.findFirst({where:{userId:req?.user?.id,status:"COMPLETED",periodEnd:{gte :new Date()}}})
            if(user.role!=='ADMIN'){
               if(!ActiveSubs){
                    const vuser=await prisma.user.update({where:{id:user.id},data:{role:"VIEWER"}})
                }else{
                    const vuser=await prisma.user.update({where:{id:user.id},data:{role:"SUBSCRIBER"}})
                }
            }

        const access_token=generateAccessToken(user.publicId)
        const refresh_token=generateRefreshToken(user.publicId)
        logger.info('login successfully',user.id)
            res.status(200).cookie("refresh_token",refresh_token,{httpOnly:true,secure:true}).json({success:true,message:"login successfully",subscription:ActiveSubs,data:getsafeUser(user),access_token})
    }catch(e){
        logger.error('error while login user',e)
        throw new ApiError('internal server error',500)
    }
}
export default LoginUser
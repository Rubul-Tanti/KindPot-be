import jwt, { JwtPayload, TokenExpiredError, JsonWebTokenError } from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import { env } from '../config/config.env'
import { prisma } from '../db/prisma'
import { getsafeUser } from '../controlers/authentication/loginUser'
import { generateAccessToken, generateRefreshToken } from '../utils/generateToken'
import { UserRole } from '../types/user'
import { SubscriptionOrder } from '../generated/prisma'


//types

interface JwtCustomPayload extends JwtPayload {
  userId: string
}

const extractBearerToken = (req: Request): string | null => {
  const header = req.headers.authorization
  if (!header?.startsWith('Bearer ')) return null
  const token = header.split(' ')[1]
  return token?.trim() || null
}

const verifyToken = (token: string): JwtCustomPayload => {
  return jwt.verify(token, env.JWT_ACCESS_SECRET) as JwtCustomPayload
}



//if login route handler
const handleLoginRoute = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const token = extractBearerToken(req)
  if (!token) {
    next()
    return
  }

  try {
    const { userId } = verifyToken(token)
    const user = await prisma.user.findUnique({ where: { publicId: userId } })

    if (!user) {
      res.status(401).json({ message: 'User not found' })
      return
    }
        const ActiveSubs=await prisma.subscriptionOrder.findFirst({where:{userId:user.id,status:"COMPLETED",periodEnd:{gte :new Date()}}})
            if(user.role!=='ADMIN'){
               if(!ActiveSubs){
                    const vuser=await prisma.user.update({where:{id:user.id},data:{role:"VIEWER"}})
                }else if(user.role==='VIEWER'){
                    const vuser=await prisma.user.update({where:{id:user.id},data:{role:"SUBSCRIBER"}})
                }
            }
            console.log(ActiveSubs)
    const access_token = generateAccessToken(user.publicId)
    const refresh_token = generateRefreshToken(user.publicId)
    res.status(200).cookie('refresh_token', refresh_token, { httpOnly: true, secure: true }).json({ message: 'Login successful',subscription:ActiveSubs, data: getsafeUser(user), access_token })
  } catch(e) {
       if (e instanceof TokenExpiredError) {
        res.status(401).json({ message: 'Token expired' })
        return
      }
            if (e instanceof JsonWebTokenError) {
        res.status(401).json({ message: 'Invalid token' })
        return
      }
    next()
  }
}


const authorizationMiddleware = (requiredRole: UserRole[]) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    //checking if login route

    if (req.originalUrl.startsWith('/api/auth/login')) {
      await handleLoginRoute(req, res, next)
      return
    }
    const token = extractBearerToken(req)
    if (!token) {
      res.status(401).json({ message: 'No authorization header found' })
      return
    }

    try {
      const { userId } = verifyToken(token)
      const user = await prisma.user.findUnique({ where: { publicId: userId } })
      if (!user) {
        res.status(401).json({ message: 'User not found' })
        return
      }
        const ActiveSubs=await prisma.subscriptionOrder.findFirst({where:{userId:user.id,status:"COMPLETED",periodEnd:{gte :new Date()}}})

      if (requiredRole.length>0&&!requiredRole.includes(user.role)) {
        res.status(403).json({ message: 'Insufficient permissions' })
        return
      }

      req.user = {id:user.id,role:user.role,email:user.email,subscriptionOrder:ActiveSubs}
      next()
    } catch (e) {
      if (e instanceof TokenExpiredError) {
        res.status(401).json({ message: 'Token expired' })
        return
      }
      if (e instanceof JsonWebTokenError) {
        res.status(401).json({ message: 'Invalid token' })
        return
      }
      res.status(500).json({ message: 'Internal server error' })
    }
  }
}

export default authorizationMiddleware
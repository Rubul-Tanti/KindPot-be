import { Request, Response } from 'express'
import { ApiError } from '../../middleware/errorHandler'
import logger from '../../utils/logger'
import { prisma } from '../../db/prisma'

export const getRecentUsers = async (req: Request, res: Response) => {
  logger.info("hit get recent users")
  try {
    const dateFrom = new Date()
    dateFrom.setDate(dateFrom.getDate() - 7)

    const users = await prisma.user.findMany({
      where: {
        deletedAt: null,
        createdAt: {
          gte: dateFrom
        }
      },
      take: 10,
      select: {
        id: true,
        publicId: true,
        email: true,
        userName: true,
        firstName: true,
        lastName: true,
        profilePicture: true,
        phoneNumber: true,
        role: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: { createdAt: 'desc' }
    })

    res.status(200).json({
      message: 'Recent users fetched successfully',
      data: users,
    })
  } catch (e) {
    logger.error("error while fetching recent users", e)
    throw new ApiError("internal server error", 500)
  }
}

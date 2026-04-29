import { Request, Response } from 'express'
import { ApiError } from '../../middleware/errorHandler'
import logger from '../../utils/logger'
import { prisma } from '../../db/prisma'

export const getDashboardStats = async (req: Request, res: Response) => {
  logger.info("Getting dashboard statistics")
  try {
    const totalUsers = await prisma.user.count({
      where: { deletedAt: null }
    })

    const totalSubscribers = await prisma.user.count({
      where: { role:'SUBSCRIBER' }
    })

    const totalCharities = await prisma.charity.count()

    logger.info(`Dashboard stats retrieved - Users: ${totalUsers}, Subscribers: ${totalSubscribers}, Charities: ${totalCharities}`)

    return res.status(200).json({
      success: true,
      message: 'Dashboard statistics retrieved successfully',
      data: {
        totalUsers,
        totalSubscribers,
        totalCharities
      }
    })
  } catch (error) {
    logger.error('Error fetching dashboard statistics:', error)
    throw new ApiError('Failed to fetch dashboard statistics', 500)
  }
}

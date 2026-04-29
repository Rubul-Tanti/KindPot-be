import { Request, Response } from 'express'
import { ApiError } from '../../middleware/errorHandler'
import logger from '../../utils/logger'
import { prisma } from '../../db/prisma'
import { z } from 'zod'

// Validation schema for pagination query params
const paginationSchema = z.object({
  page: z.string().transform(Number).refine(n => n > 0, 'Page must be greater than 0').optional().default(1),
  limit: z.string().transform(Number).refine(n => n > 0 && n <= 100, 'Limit must be between 1 and 100').optional().default(10),
  userName:z.string()
})

export const getUsers = async (req: Request, res: Response) => {
  logger.info("hit get users")
  try {
    // Validate pagination params
    const validationResult = paginationSchema.safeParse(req.query)
    if (validationResult.error) {
      return res.status(400).json({
        message: 'validation error',
        error: validationResult.error.flatten()
      })
    }

    const { page, limit,userName } = validationResult.data
    const skip = (page - 1) * limit

    // Fetch total count of users
    const totalCount = await prisma.user.count({
      where: { deletedAt: null }
    })

    // Fetch users with pagination
    const users = await prisma.user.findMany({
      where: {userName, deletedAt: null },
      skip,
      take: limit||10,
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

    const totalPages = Math.ceil(totalCount / limit)

    res.status(200).json({
      message: 'Users fetched successfully',
      data: users,
      pagination: {
        currentPage: page,
        pageSize: limit,
        totalCount,
        totalPages,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1,
      }
    })

    logger.info(`Fetched ${users.length} users with pagination`, { page, limit })

  } catch (e) {
    logger.error("error while fetching users", e)
    throw new ApiError("internal server error", 500)
  }
}

// Optional: Get single user by ID
export const getUserById = async (req: Request, res: Response) => {
  logger.info("hit get user by id")
  try {
    const id  = req.params.id as string

    if (!id) {
      return res.status(400).json({ message: 'User ID is required' })
    }

    const user = await prisma.user.findUnique({
      where: { publicId: id, deletedAt: null },
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
      }
    })

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    res.status(200).json({
      message: 'User fetched successfully',
      data: user
    })

    logger.info("fetched user", user)

  } catch (e) {
    logger.error("error while fetching user", e)
    throw new ApiError("internal server error", 500)
  }
}

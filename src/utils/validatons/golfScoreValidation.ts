import { z } from 'zod'

export const golfScoreSchema = z.object({
  score: z.number().int().min(1, 'Score must be at least 1').max(45, 'Score must not exceed 45'),
  playedOn: z.string().refine((date) => !isNaN(Date.parse(date)), 'Invalid date format')
})

export const golfScoreUpdateSchema = golfScoreSchema.partial()

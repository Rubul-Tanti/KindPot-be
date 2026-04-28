import {z} from 'zod'

export const charityImageSchema = z.object({
  altText: z.string().min(3).optional(),
  order: z.number().int().min(0).optional()
})

export const charitySchema = z.object({
  name: z.string().min(5),
  description: z.string().min(8),
  websiteUrl: z.url().optional(),
  country: z.string().min(2).max(100),
  images: z.string().transform(charityImage=>JSON.parse(charityImage)).pipe(z.array(charityImageSchema).min(1, 'At least one image is required'))
})
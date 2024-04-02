import { CourseCategory } from '@prisma/client'
import { z } from 'zod'

export const courseSchema = z.object({
	courseName: z
		.string()
		.min(3, 'Course name is required and must be at least 3 character long')
		.max(255),
	description: z.string().optional(),
	category: z.nativeEnum(CourseCategory, {
		errorMap: () => ({ message: 'Invalid course category' }),
	}),
})

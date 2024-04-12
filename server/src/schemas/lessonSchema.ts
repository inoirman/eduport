import { z } from 'zod'

export const lessonCreateSchema = z.object({
	title: z.string().min(3, 'Title must be at least 3 characters long'),
	description: z
		.string()
		.min(3, 'Description must be at least 3 characters long'),
	courseId: z.string().uuid('Invalid course ID'),
})

export const lessonUpdateSchema = z.object({
	title: z.string().min(3, 'Title must be at least 3 characters long'),
	description: z
		.string()
		.min(3, 'Description must be at least 3 characters long'),
})

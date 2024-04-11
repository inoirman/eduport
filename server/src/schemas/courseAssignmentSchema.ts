import { z } from 'zod'

export const courseAssignmentSchema = z.object({
	courseId: z.string().uuid(),
	groupId: z.string().uuid(),
	startDate: z.string(),
})

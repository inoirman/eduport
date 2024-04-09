import { z } from 'zod'

export const groupSchema = z.object({
	groupName: z.string().min(3).max(255),
})

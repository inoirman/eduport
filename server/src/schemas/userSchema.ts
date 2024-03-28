import { z } from 'zod'

export const userSchema = z.object({
	userName: z
		.string()
		.min(3, 'Username is required and must be at least 3 character long')
		.max(255),
	email: z.string().email('Invalid email address'),
	password: z.string().min(6, 'Password must be at least 6 character long'),
})

export const userRoleSchema = z.object({
	userId: z.string().uuid(),
	roleId: z.string().uuid(),
})

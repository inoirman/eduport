import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import { tokenGenerator } from '../../utils/tokenGenerator'
import { IAuthService } from '../interfaces'

const prisma = new PrismaClient()

export class AuthService implements IAuthService {
	async authenticate(email: string, password: string): Promise<string> {
		const user = await prisma.user.findUnique({
			where: {
				email: email,
			},
			select: {
				userId: true,
				email: true,
				password: true,
				roles: {
					select: {
						role: {
							select: {
								roleName: true,
							},
						},
					},
				},
			},
		})

		if (!user) {
			throw new Error('Invalid credentials') // User not found
		}
		const isMatch = await bcrypt.compare(password, user.password)
		if (!isMatch) {
			throw new Error('Invalid credentials') // Password does not match
		}

		return tokenGenerator(
			user.userId,
			user.email,
			user.roles.map(r => r.role.roleName)
		)
	}
}

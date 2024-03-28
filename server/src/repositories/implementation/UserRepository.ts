import { PrismaClient } from '@prisma/client'
import { User } from '../../entities'

const prisma = new PrismaClient()

export class UserRepository {
	async create(user: User): Promise<User> {
		const newUser = await prisma.user.create({
			data: {
				userId: user.userId,
				userName: user.userName,
				email: user.email,
				password: user.password,
			},
		})
		return new User(
			newUser.userId,
			newUser.userName,
			newUser.email,
			newUser.password
		)
	}

	async existsByEmail(email: string): Promise<boolean> {
		const user = await prisma.user.findUnique({
			where: {
				email: email,
			},
		})
		return user !== null
	}

	async addRole(userId: string, roleId: string): Promise<void> {
		const existingUserRole = await this.isExistingUserRole(userId, roleId)

		if (existingUserRole) {
			throw new Error('This role is already assigned to the user.')
		}

		await prisma.userRole.create({
			data: {
				userId: userId,
				roleId: roleId,
			},
		})
	}

	async removeRole(userId: string, roleId: string): Promise<void> {
		const existingUserRole = await this.isExistingUserRole(userId, roleId)

		if (!existingUserRole) {
			throw new Error('This role is not assigned to the user.')
		}
		await prisma.userRole.deleteMany({
			where: {
				userId: userId,
				roleId: roleId,
			},
		})
	}

	async isExistingUserRole(userId: string, roleId: string): Promise<boolean> {
		const existingUserRole = await prisma.userRole.findUnique({
			where: {
				userId_roleId: {
					userId: userId,
					roleId: roleId,
				},
			},
		})
		return !!existingUserRole
	}
}

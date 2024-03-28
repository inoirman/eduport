import { PrismaClient } from '@prisma/client'
import * as bcrypt from 'bcrypt'
import { v4 as UUID } from 'uuid'

const prisma = new PrismaClient()

const main = async () => {
	const roleAdmin = await prisma.role.create({
		data: {
			roleId: UUID(),
			roleName: 'ADMIN',
		},
	})

	await prisma.role.create({
		data: {
			roleId: UUID(),
			roleName: 'STUDENT',
		},
	})

	await prisma.role.create({
		data: {
			roleId: UUID(),
			roleName: 'TEACHER',
		},
	})

	const userId = UUID()

	await prisma.user.create({
		data: {
			userId: userId,
			userName: 'Administrator',
			email: 'noir.ik@gmail.com',
			password: await bcrypt.hash('secret', 10),
			roles: {
				create: [{ roleId: roleAdmin.roleId }],
			},
		},
	})
}

main()
	.catch(e => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})

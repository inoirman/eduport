import { NextFunction, Request, Response } from 'express'
import { userRoleSchema, userSchema } from '../schemas/userSchema'
import { AddRole, CreateUser, RemoveRole } from '../useCases/user'

export class UserController {
	constructor(
		private createUser: CreateUser,
		private addRoleToUser: AddRole,
		private removeRoleFromUser: RemoveRole
	) {}

	async create(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const validatedData = userSchema.parse(req.body)
			const { userName, email, password } = validatedData

			const newUser = await this.createUser.execute(userName, email, password)
			res.status(201).json({ message: 'User created', user: newUser })
		} catch (error) {
			next(error)
		}
	}

	async addRole(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		try {
			const validatedData = userRoleSchema.parse(req.body)
			const { userId, roleId } = validatedData
			await this.addRoleToUser.execute(userId, roleId)
			res.status(201).json({ message: 'Role added' })
		} catch (error) {
			next(error)
		}
	}

	async removeRole(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		try {
			const validatedData = userRoleSchema.parse(req.body)
			const { userId, roleId } = validatedData
			await this.removeRoleFromUser.execute(userId, roleId)
			res.status(201).json({ message: 'Role removed' })
		} catch (error) {
			next(error)
		}
	}
}

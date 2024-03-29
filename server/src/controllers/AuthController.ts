import { NextFunction, Request, Response } from 'express'
import { AuthService } from '../repositories/implementation/AuthService'
import { authSchema } from '../schemas/authSchema'

export class AuthController {
	private authService: AuthService
	constructor() {
		this.authService = new AuthService()
	}

	async login(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const validatedData = authSchema.parse(req.body)
			const { email, password } = validatedData
			const token = await this.authService.authenticate(email, password)
			res.status(200).json({ token })
		} catch (error) {
			next(error)
		}
	}
}

import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

export interface DecodedToken {
	userId: string
	email: string
	roles: string[]
	iat: number
	exp: number
}

export const authenticate = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const authHeader = req.headers.authorization

	if (!authHeader) {
		return res.status(401).json({ message: 'Token not provided' })
	}

	const token = authHeader.split(' ')[1]

	try {
		const decoded = verify(
			token,
			process.env.JWT || 'SECRET_KEY_FOR_JWT'
		) as DecodedToken
		req.user = decoded
		next()
	} catch (error) {
		return res.status(401).json({ message: 'Invalid token' })
	}
}

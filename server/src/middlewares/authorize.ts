import { NextFunction, Request, Response } from 'express'

export const authorize = (roles: string[]) => {
	return (req: Request, res: Response, next: NextFunction) => {
		const userRoles = req.user?.roles

		if (!userRoles || !roles.some(role => userRoles.includes(role))) {
			return res.status(403).json({ message: 'Unauthorized' })
		}

		next()
	}
}

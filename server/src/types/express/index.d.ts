export {}

declare global {
	namespace Express {
		export interface Request {
			user?: {
				userId: string
				email: string
				roles: string[]
				iat?: number
				exp?: number
			}
		}
	}
}

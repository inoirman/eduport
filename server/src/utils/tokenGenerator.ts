import jwt from 'jsonwebtoken'

export const tokenGenerator = (
	userId: string,
	email: string,
	roles: string[]
) => {
	return jwt.sign(
		{ userId, email, roles },
		process.env.JWT_SECRET || 'SECRET_KEY_FOR_JWT',
		{ expiresIn: '1h' }
	)
}

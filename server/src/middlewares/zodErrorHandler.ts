import { NextFunction, Request, Response } from 'express'
import { ZodError } from 'zod'
import { formatZodErrors } from '../utils/zodErrorFormatter'

export const zodErrorHandler = (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (err instanceof ZodError) {
		const formattedErrors = formatZodErrors(err)
		return res.status(400).json({ errors: formattedErrors })
	} else {
		if (err instanceof Error) {
			return res.status(400).json({ message: err.message })
		} else {
			return next(err)
		}
	}
}

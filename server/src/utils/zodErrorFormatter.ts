import { ZodError } from 'zod'

export const formatZodErrors = (error: ZodError): { [key: string]: string } => {
	return error.errors.reduce((acc: { [key: string]: string }, currError) => {
		const fieldName = currError.path.length > 0 ? currError.path[0] : 'general'
		acc[fieldName] = currError.message
		return acc
	}, {})
}

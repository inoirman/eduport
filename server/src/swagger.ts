import swaggerJSDoc from 'swagger-jsdoc'
// ToDo: Add full documentation with using swagger
const swaggerOptions: swaggerJSDoc.Options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'API Documentation',
			version: '1.0.0',
			description: 'API Documentation for the project',
		},
	},
	apis: ['./src/routes/*.ts'],
}

const swaggerSpec = swaggerJSDoc(swaggerOptions)

export default swaggerSpec

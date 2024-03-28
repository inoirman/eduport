import express from 'express'
import swaggerUi from 'swagger-ui-express'
import { zodErrorHandler } from './middlewares/zodErrorHandler'
import userRouter from './routes/userRoutes'
import swaggerSpec from './swagger'

const app = express()

app.use(express.json())

const apiRouter = express.Router()

apiRouter.use('/users', userRouter)

app.use('/api/v1', apiRouter)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use(zodErrorHandler)

const PORT = 3000
app.listen(PORT, () => {
	return console.log(`Server is running on port ${PORT}`)
})

import express from 'express'
import swaggerUi from 'swagger-ui-express'
import { zodErrorHandler } from './middlewares/zodErrorHandler'
import { authRouter } from './routes/authRoutes'
import { courseRouter } from './routes/courseRoutes'
import userRouter from './routes/userRoutes'
import swaggerSpec from './swagger'

const app = express()

app.use(express.json())

const apiRouter = express.Router()

apiRouter.use('/users', userRouter)
apiRouter.use('/auth', authRouter)
apiRouter.use('/courses', courseRouter)

app.use('/api/v1', apiRouter)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use(zodErrorHandler)

const PORT = 3000
app.listen(PORT, () => {
	return console.log(`Server is running on port ${PORT}`)
})

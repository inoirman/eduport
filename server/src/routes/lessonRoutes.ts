import { PrismaClient } from '@prisma/client'
import express from 'express'
import { LessonController } from '../controllers/LessonController'
import { authenticate } from '../middlewares/authenticate'
import { authorize } from '../middlewares/authorize'
import { LessonRepository } from '../repositories/implementation/LessonRepository'
import {
	CreateLesson,
	DeleteLesson,
	GetAllLessons,
	GetLessonById,
	UpdateLesson,
} from '../useCases/lesson/'

const lessonRouter = express.Router()
const prisma = new PrismaClient()

const lessonRepository = new LessonRepository(prisma)
const createLesson = new CreateLesson(lessonRepository)
const updateLesson = new UpdateLesson(lessonRepository)
const deleteLesson = new DeleteLesson(lessonRepository)
const getAllLessons = new GetAllLessons(lessonRepository)
const getLessonById = new GetLessonById(lessonRepository)

const lessonController = new LessonController(
	createLesson,
	updateLesson,
	deleteLesson,
	getAllLessons,
	getLessonById
)

lessonRouter.post(
	'/',
	authenticate,
	authorize(['ADMIN', 'TEACHER']),
	(req, res, next) => {
		return lessonController.create(req, res, next)
	}
)

lessonRouter.put(
	'/:lessonId',
	authenticate,
	authorize(['ADMIN', 'TEACHER']),
	(req, res, next) => lessonController.update(req, res, next)
)

lessonRouter.delete(
	'/:lessonId',
	authenticate,
	authorize(['ADMIN', 'TEACHER']),
	(req, res) => lessonController.delete(req, res)
)

lessonRouter.get(
	'/',
	authenticate,
	authorize(['ADMIN', 'TEACHER', 'STUDENT']),
	(req, res) => lessonController.getAll(req, res)
)

lessonRouter.get(
	'/:lessonId',
	authenticate,
	authorize(['ADMIN', 'TEACHER', 'STUDENT']),
	(req, res) => lessonController.getById(req, res)
)

export { lessonRouter }

import { PrismaClient } from '@prisma/client'
import express from 'express'
import { CourseController } from '../controllers/CourseController'
import { authenticate } from '../middlewares/authenticate'
import { authorize } from '../middlewares/authorize'
import { CourseRepository } from '../repositories/implementation/CourseRepository'
import {
	CreateCourse,
	DeleteCourse,
	GetAllCourses,
	GetCourseById,
	UpdateCourse,
} from '../useCases/course/'

const courseRouter = express.Router()
const prisma = new PrismaClient()

const courseRepository = new CourseRepository(prisma)
const createCourse = new CreateCourse(courseRepository)
const updateCourse = new UpdateCourse(courseRepository)
const deleteCourse = new DeleteCourse(courseRepository)
const getAllCourses = new GetAllCourses(courseRepository)
const getCourseById = new GetCourseById(courseRepository)

const courseController = new CourseController(
	createCourse,
	updateCourse,
	deleteCourse,
	getAllCourses,
	getCourseById
)

courseRouter.post(
	'/',
	authenticate,
	authorize(['ADMIN', 'TEACHER']),
	(req, res, next) => courseController.create(req, res, next)
)
courseRouter.put(
	'/:courseId',
	authenticate,
	authorize(['ADMIN', 'TEACHER']),
	(req, res, next) => courseController.update(req, res, next)
)
courseRouter.delete(
	'/:courseId',
	authenticate,
	authorize(['ADMIN', 'TEACHER']),
	(req, res) => courseController.delete(req, res)
)

courseRouter.get(
	'/',
	authenticate,
	authorize(['ADMIN', 'TEACHER', 'STUDENT']),
	(req, res) => courseController.getAll(req, res)
)
courseRouter.get(
	'/:courseId',
	authenticate,
	authorize(['ADMIN', 'TEACHER', 'STUDENT']),
	(req, res) => courseController.getById(req, res)
)

export { courseRouter }

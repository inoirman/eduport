import { PrismaClient } from '@prisma/client'
import express from 'express'
import { CourseAssignmentController } from '../controllers/CourseAssignmentController'
import { authenticate } from '../middlewares/authenticate'
import { authorize } from '../middlewares/authorize'
import { CourseAssignmentRepository } from '../repositories/implementation/CourseAssignmentRepository'

import {
	AddTeacher,
	CreateCourseAssignment,
	DeleteCourseAssignment,
	GetAllCourseAssignments,
	GetCourseAssignmentById,
	RemoveTeacher,
	UpdateStartDate,
} from '../useCases/courseAssignment/'

const courseAssignmentRouter = express.Router()
const prisma = new PrismaClient()

const courseAssignmentRepository = new CourseAssignmentRepository(prisma)
const createCourseAssignment = new CreateCourseAssignment(
	courseAssignmentRepository
)
const deleteCourseAssignment = new DeleteCourseAssignment(
	courseAssignmentRepository
)
const getAllCourseAssignments = new GetAllCourseAssignments(
	courseAssignmentRepository
)
const getCourseAssignmentById = new GetCourseAssignmentById(
	courseAssignmentRepository
)
const addTeacherToAssignment = new AddTeacher(courseAssignmentRepository)
const removeTeacherFromAssignment = new RemoveTeacher(
	courseAssignmentRepository
)
const updateStartAssignmentDate = new UpdateStartDate(
	courseAssignmentRepository
)

const courseAssignmentController = new CourseAssignmentController(
	createCourseAssignment,
	deleteCourseAssignment,
	getAllCourseAssignments,
	getCourseAssignmentById,
	addTeacherToAssignment,
	removeTeacherFromAssignment,
	updateStartAssignmentDate
)

courseAssignmentRouter.post(
	'/',
	authenticate,
	authorize(['ADMIN', 'TEACHER']),
	(req, res, next) => {
		return courseAssignmentController.create(req, res, next)
	}
)

courseAssignmentRouter.delete(
	'/:courseAssignmentId',
	authenticate,
	authorize(['ADMIN', 'TEACHER']),
	(req, res, next) => {
		return courseAssignmentController.delete(req, res, next)
	}
)

courseAssignmentRouter.get(
	'/',
	authenticate,
	authorize(['ADMIN', 'TEACHER', 'STUDENT']),
	(req, res, next) => {
		return courseAssignmentController.getAll(req, res)
	}
)

courseAssignmentRouter.get(
	'/:courseAssignmentId',
	authenticate,
	authorize(['ADMIN', 'TEACHER', 'STUDENT']),
	(req, res, next) => {
		return courseAssignmentController.getById(req, res)
	}
)

courseAssignmentRouter.put(
	'/:courseAssignmentId/teacher',
	authenticate,
	authorize(['ADMIN', 'TEACHER']),
	(req, res, next) => {
		return courseAssignmentController.addTeacher(req, res, next)
	}
)

courseAssignmentRouter.delete(
	'/:courseAssignmentId/teacher',
	authenticate,
	authorize(['ADMIN', 'TEACHER']),
	(req, res, next) => {
		return courseAssignmentController.removeTeacher(req, res, next)
	}
)

courseAssignmentRouter.put(
	'/:courseAssignmentId/start',
	authenticate,
	authorize(['ADMIN', 'TEACHER']),
	(req, res, next) => {
		return courseAssignmentController.updateStartDate(req, res, next)
	}
)

export { courseAssignmentRouter }

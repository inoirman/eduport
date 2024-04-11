import { NextFunction, Request, Response } from 'express'
import { courseAssignmentSchema } from '../schemas/courseAssignmentSchema'
import {
	AddTeacher,
	CreateCourseAssignment,
	DeleteCourseAssignment,
	GetAllCourseAssignments,
	GetCourseAssignmentById,
	RemoveTeacher,
	UpdateStartDate,
} from '../useCases/courseAssignment'

export class CourseAssignmentController {
	constructor(
		private createCourseAssignment: CreateCourseAssignment,
		private deleteCourseAssignment: DeleteCourseAssignment,
		private getAllCourseAssignments: GetAllCourseAssignments,
		private getCourseAssignmentById: GetCourseAssignmentById,
		private addTeacherToAssignment: AddTeacher,
		private removeTeacherFromAssignment: RemoveTeacher,
		private updateStartAssignmentDate: UpdateStartDate
	) {}

	async create(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const validatedData = courseAssignmentSchema.parse(req.body)
			const { courseId, groupId, startDate } = validatedData

			const newCourseAssignment = await this.createCourseAssignment.execute(
				courseId,
				groupId,
				new Date(startDate)
			)
			res.status(201).json({
				message: 'Course assignment created',
				courseAssignment: newCourseAssignment,
			})
		} catch (error) {
			next(error)
		}
	}

	async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const { courseAssignmentId } = req.params

			if (!courseAssignmentId) {
				throw new Error('Course assignment ID is required')
			}

			await this.deleteCourseAssignment.execute(courseAssignmentId)
			res.status(200).json({ message: 'Course assignment deleted' })
		} catch (error) {
			next(error)
		}
	}

	async getAll(req: Request, res: Response): Promise<void> {
		const courses = await this.getAllCourseAssignments.execute()
		res.status(200).json({ courses })
	}

	async getById(req: Request, res: Response): Promise<void> {
		const { courseAssignmentId } = req.params
		const course = await this.getCourseAssignmentById.execute(
			courseAssignmentId
		)
		res.status(200).json({ course })
	}

	async addTeacher(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		try {
			const { courseAssignmentId, teacherId } = req.body

			if (!courseAssignmentId || !teacherId) {
				throw new Error('Course assignment ID and teacher ID are required')
			}

			await this.addTeacherToAssignment.execute(courseAssignmentId, teacherId)
			res.status(200).json({ message: 'Teacher added' })
		} catch (error) {
			next(error)
		}
	}

	async removeTeacher(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		try {
			const { courseAssignmentId, teacherId } = req.body

			if (!courseAssignmentId || !teacherId) {
				throw new Error('Course assignment ID and teacher ID are required')
			}

			await this.removeTeacherFromAssignment.execute(
				courseAssignmentId,
				teacherId
			)
			res.status(200).json({ message: 'Teacher removed' })
		} catch (error) {
			next(error)
		}
	}

	async updateStartDate(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		try {
			const { courseAssignmentId, startDate } = req.body

			if (!courseAssignmentId || !startDate) {
				throw new Error('Course assignment ID and start date are required')
			}

			await this.updateStartAssignmentDate.execute(
				courseAssignmentId,
				new Date(startDate)
			)
			res.status(200).json({ message: 'Start date updated' })
		} catch (error) {
			next(error)
		}
	}
}

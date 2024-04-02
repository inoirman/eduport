import { NextFunction, Request, Response } from 'express'
import { courseSchema } from '../schemas/courseSchema'
import {
	CreateCourse,
	DeleteCourse,
	GetAllCourses,
	GetCourseById,
	UpdateCourse,
} from '../useCases/course'

export class CourseController {
	constructor(
		private createCourse: CreateCourse,
		private updateCourse: UpdateCourse,
		private deleteCourse: DeleteCourse,
		private getAllCourses: GetAllCourses,
		private getCourseById: GetCourseById
	) {}

	async create(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const validatedData = courseSchema.parse(req.body)
			const { courseName, description, category } = validatedData

			const newCourse = await this.createCourse.execute(
				courseName,
				category,
				description
			)
			res.status(201).json({ message: 'Course created', course: newCourse })
		} catch (error) {
			next(error)
		}
	}

	async update(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const validatedData = courseSchema.parse(req.body)
			const { courseName, description, category } = validatedData
			const { courseId } = req.params

			if (!courseId) {
				throw new Error('Course ID is required')
			}

			const updatedCourse = await this.updateCourse.execute(
				courseId,
				courseName,
				category,
				description
			)
			res.status(200).json({ message: 'Course updated', course: updatedCourse })
		} catch (error) {
			next(error)
		}
	}

	async delete(req: Request, res: Response): Promise<void> {
		const { courseId } = req.params

		res.status(200).json({ message: 'Virtual deleting is done' }) // timely without deleting functionality

		// await this.deleteCourse.execute(courseId)
		// res.status(200).json({ message: 'Course deleted' })
	}

	async getAll(req: Request, res: Response): Promise<void> {
		const courses = await this.getAllCourses.execute()
		res.status(200).json({ courses })
	}

	async getById(req: Request, res: Response): Promise<void> {
		const { courseId } = req.params

		const course = await this.getCourseById.execute(courseId)
		if (!course) {
			res.status(404).json({ message: 'Course not found' })
		} else {
			res.status(200).json({ course })
		}
	}
}

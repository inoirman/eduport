import { NextFunction, Request, Response } from 'express'
import { lessonCreateSchema, lessonUpdateSchema } from '../schemas/lessonSchema'
import {
	CreateLesson,
	DeleteLesson,
	GetAllLessons,
	GetLessonById,
	UpdateLesson,
} from '../useCases/lesson'

export class LessonController {
	constructor(
		private createLesson: CreateLesson,
		private updateLesson: UpdateLesson,
		private deleteLesson: DeleteLesson,
		private getAllLessons: GetAllLessons,
		private getLessonById: GetLessonById
	) {}

	async create(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const validatedData = lessonCreateSchema.parse(req.body)
			const { title, description, courseId } = validatedData

			const newLesson = await this.createLesson.execute(
				title,
				description,
				courseId
			)
			res.status(201).json({ message: 'Lesson created', lesson: newLesson })
		} catch (error) {
			next(error)
		}
	}

	async update(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const validatedData = lessonUpdateSchema.parse(req.body)
			const { title, description } = validatedData
			const { lessonId } = req.params

			if (!lessonId) {
				throw new Error('Lesson ID is required')
			}

			const updatedLesson = await this.updateLesson.execute(
				lessonId,
				title,
				description
			)
			res.status(200).json({ message: 'Lesson updated', lesson: updatedLesson })
		} catch (error) {
			next(error)
		}
	}

	async delete(req: Request, res: Response): Promise<void> {
		const { lessonId } = req.params

		res.status(200).json({ message: 'Virtual deleting is done' }) // timely without deleting functionality

		// await this.deleteLesson.execute(lessonId);
		// res.status(200).json({ message: 'Lesson deleted' });
	}

	async getAll(req: Request, res: Response): Promise<void> {
		const lessons = await this.getAllLessons.execute()
		res.status(200).json({ lessons })
	}

	async getById(req: Request, res: Response): Promise<void> {
		const { lessonId } = req.params

		const lesson = await this.getLessonById.execute(lessonId)
		if (!lesson) {
			res.status(404).json({ message: 'Lesson not found' })
		}
		res.status(200).json({ lesson })
	}
}

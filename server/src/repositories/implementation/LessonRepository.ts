import { PrismaClient } from '@prisma/client'
import { ILesson } from '../interfaces/ILesson'
import { ILessonRepository } from '../interfaces/ILessonRepository'

export class LessonRepository implements ILessonRepository {
	private prisma: PrismaClient
	constructor(prisma: PrismaClient) {
		this.prisma = prisma
	}

	async create(lesson: ILesson): Promise<ILesson> {
		return await this.prisma.lessons.create({
			data: lesson,
		})
	}
	async update(lesson: ILesson): Promise<ILesson> {
		return await this.prisma.lessons.update({
			where: {
				lessonId: lesson.lessonId,
			},
			data: lesson,
		})
	}
	async delete(lessonId: string): Promise<boolean> {
		const deletedLesson = await this.prisma.lessons.delete({
			where: {
				lessonId: lessonId,
			},
		})
		return deletedLesson ? true : false
	}
	async findById(lessonId: string): Promise<ILesson | null> {
		return await this.prisma.lessons.findUnique({
			where: {
				lessonId,
			},
		})
	}
	async findAll(): Promise<ILesson[]> {
		return await this.prisma.lessons.findMany()
	}
}

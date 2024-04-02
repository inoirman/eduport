import { PrismaClient } from '@prisma/client'
import { ICourse } from '../interfaces/ICourse'
import { ICourseRepository } from '../interfaces/ICourseRepository'

export class CourseRepository implements ICourseRepository {
	private prisma: PrismaClient

	constructor(prisma: PrismaClient) {
		this.prisma = prisma
	}
	async create(course: ICourse): Promise<ICourse> {
		return await this.prisma.course.create({
			data: course,
		})
	}
	async findById(courseId: string): Promise<ICourse | null> {
		return await this.prisma.course.findUnique({
			where: {
				courseId: courseId,
			},
		})
	}
	async findAll(): Promise<ICourse[]> {
		return await this.prisma.course.findMany()
	}
	async update(course: ICourse): Promise<ICourse> {
		return await this.prisma.course.update({
			where: {
				courseId: course.courseId,
			},
			data: course,
		})
	}
	async delete(courseId: string): Promise<boolean> {
		const deletedCourse = await this.prisma.course.delete({
			where: {
				courseId: courseId,
			},
		})
		return deletedCourse ? true : false
	}
}

import { CourseCategory } from '@prisma/client'
import { v4 as UUID } from 'uuid'
import { Course } from '../../entities'
import { ICourse, ICourseRepository } from '../../repositories/interfaces'

export class CreateCourse {
	private courseRepository: ICourseRepository

	constructor(courseRepository: ICourseRepository) {
		this.courseRepository = courseRepository
	}

	async execute(
		courseName: string,
		category: CourseCategory,
		description?: string
	): Promise<ICourse> {
		const courseId = UUID()
		const course = new Course(courseId, courseName, description ?? '', category)
		return await this.courseRepository.create(course as ICourse)
	}
}

import { CourseCategory } from '@prisma/client'
import { ICourse, ICourseRepository } from '../../repositories/interfaces'

export class UpdateCourse {
	private courseRepository: ICourseRepository

	constructor(courseRepository: ICourseRepository) {
		this.courseRepository = courseRepository
	}

	async execute(
		courseId: string,
		courseName: string,
		category: CourseCategory,
		description?: string
	): Promise<ICourse> {
		return await this.courseRepository.update({
			courseId,
			courseName,
			category,
			description,
		} as ICourse)
	}
}

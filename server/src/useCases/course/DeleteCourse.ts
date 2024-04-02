import { ICourseRepository } from '../../repositories/interfaces'

export class DeleteCourse {
	private courseRepository: ICourseRepository

	constructor(courseRepository: ICourseRepository) {
		this.courseRepository = courseRepository
	}

	async execute(courseId: string): Promise<boolean> {
		return await this.courseRepository.delete(courseId)
	}
}

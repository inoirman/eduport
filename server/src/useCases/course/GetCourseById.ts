import { ICourse, ICourseRepository } from '../../repositories/interfaces'

export class GetCourseById {
	private courseRepository: ICourseRepository

	constructor(courseRepository: ICourseRepository) {
		this.courseRepository = courseRepository
	}

	async execute(courseId: string): Promise<ICourse | null> {
		return await this.courseRepository.findById(courseId)
	}
}

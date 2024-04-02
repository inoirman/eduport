import { ICourse, ICourseRepository } from '../../repositories/interfaces'

export class GetAllCourses {
	private courseRepository: ICourseRepository

	constructor(courseRepository: ICourseRepository) {
		this.courseRepository = courseRepository
	}

	async execute(): Promise<ICourse[]> {
		return await this.courseRepository.findAll()
	}
}

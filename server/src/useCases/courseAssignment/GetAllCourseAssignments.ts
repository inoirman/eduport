import { ICourseAssignmentRepository } from '../../repositories/interfaces'

export class GetAllCourseAssignments {
	constructor(
		private courseAssignmentRepository: ICourseAssignmentRepository
	) {}

	async execute() {
		return await this.courseAssignmentRepository.findAll()
	}
}

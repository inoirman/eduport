import { ICourseAssignmentRepository } from '../../repositories/interfaces'

export class GetCourseAssignmentById {
	constructor(
		private courseAssignmentRepository: ICourseAssignmentRepository
	) {}

	async execute(assignmentId: string) {
		return await this.courseAssignmentRepository.findById(assignmentId)
	}
}

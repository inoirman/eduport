import { ICourseAssignmentRepository } from '../../repositories/interfaces'

export class DeleteCourseAssignment {
	constructor(
		private courseAssignmentRepository: ICourseAssignmentRepository
	) {}

	async execute(assignmentId: string) {
		await this.courseAssignmentRepository.delete(assignmentId)
	}
}

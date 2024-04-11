import { ICourseAssignmentRepository } from '../../repositories/interfaces'

export class AddTeacher {
	constructor(
		private courseAssignmentRepository: ICourseAssignmentRepository
	) {}

	async execute(assignmentId: string, userId: string) {
		await this.courseAssignmentRepository.addTeacher(assignmentId, userId)
	}
}

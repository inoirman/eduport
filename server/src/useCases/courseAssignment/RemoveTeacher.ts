import { ICourseAssignmentRepository } from '../../repositories/interfaces'

export class RemoveTeacher {
	constructor(
		private courseAssignmentRepository: ICourseAssignmentRepository
	) {}

	async execute(assignmentId: string, teacherId: string) {
		await this.courseAssignmentRepository.removeTeacher(assignmentId, teacherId)
	}
}

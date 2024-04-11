import {
	ICourseAssignment,
	ICourseAssignmentRepository,
} from '../../repositories/interfaces'

export class UpdateStartDate {
	private courseAssignmentRepository: ICourseAssignmentRepository

	constructor(courseAssignmentRepository: ICourseAssignmentRepository) {
		this.courseAssignmentRepository = courseAssignmentRepository
	}

	async execute(assignmentId: string, startDate: Date): Promise<void> {
		const courseAssignment = await this.courseAssignmentRepository.findById(
			assignmentId
		)
		if (!courseAssignment) {
			throw new Error('Course assignment not found')
		}
		courseAssignment.startDate = startDate
		await this.courseAssignmentRepository.update(
			courseAssignment as ICourseAssignment
		)
	}
}

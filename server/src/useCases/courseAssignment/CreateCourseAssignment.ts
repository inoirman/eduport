import { v4 as uuid } from 'uuid'
import { CourseAssignment } from '../../entities'
import { ICourseAssignmentRepository } from '../../repositories/interfaces'

export class CreateCourseAssignment {
	constructor(
		private courseAssignmentRepository: ICourseAssignmentRepository
	) {}

	async execute(courseId: string, groupId: string, startDate: Date) {
		const assignmentId = uuid()
		const assignment = new CourseAssignment(
			assignmentId,
			courseId,
			groupId,
			startDate
		)
		await this.courseAssignmentRepository.create(assignment as CourseAssignment)
		return assignmentId
	}
}

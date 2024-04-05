// src/entities/CourseAssignment.ts

export class CourseAssignment {
	assignmentId: string
	courseId: string
	groupId: string
	startDate: Date

	constructor(
		assignmentId: string,
		courseId: string,
		groupId: string,
		startDate: Date
	) {
		this.assignmentId = assignmentId
		this.courseId = courseId
		this.groupId = groupId
		this.startDate = startDate
	}
}

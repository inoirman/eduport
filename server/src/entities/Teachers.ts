// src/entities/Teachers.ts

export class Teachers {
	teacherId: string
	userId: string
	courseAssignmentAssignmentId: string

	constructor(
		teacherId: string,
		userId: string,
		courseAssignmentAssignmentId: string
	) {
		this.teacherId = teacherId
		this.userId = userId
		this.courseAssignmentAssignmentId = courseAssignmentAssignmentId
	}
}

// src/entities/Students.ts

export class Students {
	studentId: string
	userId: string
	groupId: string

	constructor(studentId: string, userId: string, groupId: string) {
		this.studentId = studentId
		this.userId = userId
		this.groupId = groupId
	}
}

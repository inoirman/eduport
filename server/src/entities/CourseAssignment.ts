// src/entities/CourseAssignment.ts

import { Teachers } from '@prisma/client'

export class CourseAssignment {
	assignmentId: string
	courseId: string
	groupId: string
	startDate: Date
	teachers: Teachers[]

	constructor(
		assignmentId: string,
		courseId: string,
		groupId: string,
		startDate: Date,
		teachers?: Teachers[] | null
	) {
		this.assignmentId = assignmentId
		this.courseId = courseId
		this.groupId = groupId
		this.startDate = startDate
		this.teachers = teachers || []
	}

	addTeacher(teacher: Teachers) {
		this.teachers.push(teacher)
	}

	removeTeacher(teacher: Teachers) {
		this.teachers = this.teachers.filter(t => t.teacherId !== teacher.teacherId)
	}

	updateStartDate(startDate: Date) {
		this.startDate = startDate
	}
}

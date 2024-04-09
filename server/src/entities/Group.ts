import { Students } from '../entities'

export class Group {
	groupId: string
	groupName: string
	students: Students[] = []

	constructor(groupId: string, groupName: string) {
		this.groupId = groupId
		this.groupName = groupName
	}

	addStudent(student: Students) {
		this.students.push(student)
	}

	removeStudent(student: Students) {
		this.students = this.students.filter(s => s.studentId !== student.studentId)
	}
}

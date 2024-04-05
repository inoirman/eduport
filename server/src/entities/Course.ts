import { CourseCategory } from '@prisma/client'

export class Course {
	courseId: string
	courseName: string
	description?: string
	category: CourseCategory

	constructor(
		courseId: string,
		courseName: string,
		description: string,
		category: CourseCategory
	) {
		this.courseId = courseId
		this.courseName = courseName
		this.description = description
		this.category = category
	}
}

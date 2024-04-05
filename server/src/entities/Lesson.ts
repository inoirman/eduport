import { Course } from './Course'

export class Lesson {
	lessonId: string
	course: Course
	title: string
	description: string

	constructor(
		lessonId: string,
		course: Course,
		title: string,
		description: string
	) {
		this.lessonId = lessonId
		this.course = course
		this.title = title
		this.description = description
	}
}

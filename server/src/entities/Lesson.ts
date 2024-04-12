export class Lesson {
	lessonId: string
	courseId: string
	title: string
	description: string

	constructor(
		lessonId: string,
		courseId: string,
		title: string,
		description: string
	) {
		this.lessonId = lessonId
		this.courseId = courseId
		this.title = title
		this.description = description
	}
}

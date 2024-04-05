import { Course } from './Course'
import { Group } from './Group'

export class CourseGroup {
	courseGroupId: string
	group: Group
	course: Course
	startDate: Date | null

	constructor(
		courseGroupId: string,
		group: Group,
		course: Course,
		startDate: Date | null = null
	) {
		this.courseGroupId = courseGroupId
		this.group = group
		this.course = course
		this.startDate = startDate
	}
}

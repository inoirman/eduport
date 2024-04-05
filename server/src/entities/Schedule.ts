import { CourseGroup } from './CourseGroup'
import { Lesson } from './Lesson'

export class Schedule {
	scheduleId: string
	courseGroup: CourseGroup
	lesson: Lesson
	dateTime: Date
	videoLink: string | null
	additionalInfo: string | null

	constructor(
		scheduleId: string,
		courseGroup: CourseGroup,
		lesson: Lesson,
		dateTime: Date,
		videoLink: string | null = null,
		additionalInfo: string | null = null
	) {
		this.scheduleId = scheduleId
		this.courseGroup = courseGroup
		this.lesson = lesson
		this.dateTime = dateTime
		this.videoLink = videoLink
		this.additionalInfo = additionalInfo
	}

	setVideoLink(videoLink: string) {
		this.videoLink = videoLink
	}

	setAdditionalInfo(additionalInfo: string) {
		this.additionalInfo = additionalInfo
	}
}

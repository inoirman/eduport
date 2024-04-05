import { Lesson } from './Lesson'

export class Question {
	questionId: string
	lesson: Lesson
	questionText: string
	questionType: 'singleChoice' | 'multipleChoice' | 'text' | 'code'

	constructor(
		questionId: string,
		lesson: Lesson,
		questionText: string,
		questionType: 'singleChoice' | 'multipleChoice' | 'text' | 'code'
	) {
		this.questionId = questionId
		this.lesson = lesson
		this.questionText = questionText
		this.questionType = questionType
	}
}

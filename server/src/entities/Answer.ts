import { Question } from './Question'

export class Answer {
	answerId: string
	question: Question
	answerText: string
	isCorrect: boolean | null

	constructor(
		answerId: string,
		question: Question,
		answerText: string,
		isCorrect: boolean | null = null
	) {
		this.answerId = answerId
		this.question = question
		this.answerText = answerText
		this.isCorrect = isCorrect
	}
}

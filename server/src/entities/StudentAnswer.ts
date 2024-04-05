import { Question } from './Question'
import { User } from './User'

export class StudentAnswer {
	studentAnswerId: string
	user: User
	question: Question
	answer: string

	constructor(
		studentAnswerId: string,
		user: User,
		question: Question,
		answer: string
	) {
		this.studentAnswerId = studentAnswerId
		this.user = user
		this.question = question
		this.answer = answer
	}
}

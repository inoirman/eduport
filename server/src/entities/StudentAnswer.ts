import User from './User'
import Question from './Question'

class StudentAnswer {
  studentAnswerId: string
  user: User
  question: Question
  answer: string


  constructor(studentAnswerId: string, user: User, question: Question, answer: string) {
    this.studentAnswerId = studentAnswerId
    this.user = user
    this.question = question
    this.answer = answer
  }
}

export default StudentAnswer
import { v4 as UUID } from 'uuid'
import { Lesson } from '../../entities'
import { ILesson, ILessonRepository } from '../../repositories/interfaces'

export class CreateLesson {
	private lessonRepository: ILessonRepository

	constructor(lessonRepository: ILessonRepository) {
		this.lessonRepository = lessonRepository
	}

	async execute(
		courseId: string,
		title: string,
		description: string
	): Promise<ILesson> {
		const lessonId = UUID()
		const lesson = new Lesson(lessonId, courseId, title, description ?? '')
		return await this.lessonRepository.create(lesson)
	}
}

import { ILesson, ILessonRepository } from '../../repositories/interfaces'

export class UpdateLesson {
	private lessonRepository: ILessonRepository

	constructor(lessonRepository: ILessonRepository) {
		this.lessonRepository = lessonRepository
	}

	async execute(
		lessonId: string,
		title: string,
		description: string
	): Promise<ILesson> {
		const lesson = await this.lessonRepository.findById(lessonId)
		if (!lesson) {
			throw new Error('Lesson not found')
		}
		lesson.title = title
		lesson.description = description
		return await this.lessonRepository.update(lesson)
	}
}

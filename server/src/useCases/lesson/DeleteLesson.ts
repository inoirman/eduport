import { ILessonRepository } from '../../repositories/interfaces'

export class DeleteLesson {
	private lessonRepository: ILessonRepository

	constructor(lessonRepository: ILessonRepository) {
		this.lessonRepository = lessonRepository
	}

	async execute(lessonId: string): Promise<boolean> {
		return this.lessonRepository.delete(lessonId)
	}
}

import { ILesson, ILessonRepository } from '../../repositories/interfaces'

export class GetLessonById {
	private lessonRepositories: ILessonRepository

	constructor(lessonRepositories: ILessonRepository) {
		this.lessonRepositories = lessonRepositories
	}

	async execute(lessonId: string): Promise<ILesson | null> {
		return await this.lessonRepositories.findById(lessonId)
	}
}

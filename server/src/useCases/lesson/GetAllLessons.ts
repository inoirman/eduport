import { ILesson, ILessonRepository } from '../../repositories/interfaces'

export class GetAllLessons {
	private lessonRepositories: ILessonRepository

	constructor(lessonRepositories: ILessonRepository) {
		this.lessonRepositories = lessonRepositories
	}

	async execute(): Promise<ILesson[]> {
		return await this.lessonRepositories.findAll()
	}
}

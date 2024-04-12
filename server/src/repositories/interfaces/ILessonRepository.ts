import { ILesson } from './ILesson'

export interface ILessonRepository {
	create(lesson: ILesson): Promise<ILesson>
	update(lesson: ILesson): Promise<ILesson>
	delete(lessonId: string): Promise<boolean>
	findById(id: string): Promise<ILesson | null>
	findAll(): Promise<ILesson[]>
}

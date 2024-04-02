import { ICourse } from './ICourse'

export interface ICourseRepository {
	create(course: ICourse): Promise<ICourse>
	findById(courseId: string): Promise<ICourse | null>
	findAll(): Promise<ICourse[]>
	update(course: ICourse): Promise<ICourse>
	delete(courseId: string): Promise<boolean>
}

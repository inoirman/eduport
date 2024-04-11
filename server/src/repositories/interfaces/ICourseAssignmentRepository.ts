import { ICourseAssignment } from './ICourseAssignment'

export interface ICourseAssignmentRepository {
	create(courseAssignment: ICourseAssignment): Promise<ICourseAssignment>
	findById(assignmentId: string): Promise<ICourseAssignment | null>
	findAll(): Promise<ICourseAssignment[]>
	delete(assignmentId: string): Promise<boolean>

	addTeacher(assignmentId: string, userId: string): Promise<void>
	removeTeacher(assignmentId: string, teacherId: string): Promise<void>
	updateStartDate(assignmentId: string, startDate: Date): Promise<void>
}

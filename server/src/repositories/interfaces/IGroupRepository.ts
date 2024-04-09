import { IGroup } from './IGroup'

export interface IGroupRepository {
	create(group: IGroup): Promise<IGroup>
	findById(groupId: string): Promise<IGroup | null>
	findAll(): Promise<IGroup[]>
	update(group: IGroup): Promise<IGroup>
	delete(groupId: string): Promise<boolean>

	addStudent(groupId: string, studentId: string): Promise<void>
	removeStudent(groupId: string, studentId: string): Promise<void>
}

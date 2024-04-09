import { IGroupRepository } from '../../repositories/interfaces'

export class AddStudent {
	constructor(private groupRepository: IGroupRepository) {}

	async execute(groupId: string, studentId: string) {
		await this.groupRepository.addStudent(groupId, studentId)
	}
}

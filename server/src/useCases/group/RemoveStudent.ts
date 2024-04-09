import { IGroupRepository } from '../../repositories/interfaces'

export class RemoveStudent {
	constructor(private groupRepository: IGroupRepository) {}

	async execute(groupId: string, studentId: string) {
		await this.groupRepository.removeStudent(groupId, studentId)
	}
}

import { IGroupRepository } from '../../repositories/interfaces'

export class DeleteGroup {
	private groupRepository: IGroupRepository

	constructor(groupRepository: IGroupRepository) {
		this.groupRepository = groupRepository
	}

	async execute(groupId: string): Promise<boolean> {
		return await this.groupRepository.delete(groupId)
	}
}

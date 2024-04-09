import { IGroup, IGroupRepository } from '../../repositories/interfaces'

export class GetGroupById {
	private groupRepository: IGroupRepository

	constructor(groupRepository: IGroupRepository) {
		this.groupRepository = groupRepository
	}

	async execute(groupId: string): Promise<IGroup | null> {
		return await this.groupRepository.findById(groupId)
	}
}

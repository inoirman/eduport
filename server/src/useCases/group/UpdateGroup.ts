import { IGroup, IGroupRepository } from '../../repositories/interfaces'

export class UpdateGroup {
	private groupRepository: IGroupRepository

	constructor(groupRepository: IGroupRepository) {
		this.groupRepository = groupRepository
	}

	async execute(groupId: string, groupName: string): Promise<IGroup> {
		return await this.groupRepository.update({
			groupId,
			groupName,
		} as IGroup)
	}
}

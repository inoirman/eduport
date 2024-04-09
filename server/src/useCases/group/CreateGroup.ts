import { v4 as UUID } from 'uuid'
import { Group } from '../../entities'
import { IGroup, IGroupRepository } from '../../repositories/interfaces'

export class CreateGroup {
	private groupRepository: IGroupRepository

	constructor(groupRepository: IGroupRepository) {
		this.groupRepository = groupRepository
	}

	async execute(groupName: string): Promise<IGroup> {
		const groupId = UUID()
		const group = new Group(groupId, groupName)
		return await this.groupRepository.create(group as IGroup)
	}
}

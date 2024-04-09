import { IGroup, IGroupRepository } from '../../repositories/interfaces'

export class GetAllGroups {
	private groupRepository: IGroupRepository

	constructor(groupRepository: IGroupRepository) {
		this.groupRepository = groupRepository
	}

	async execute(): Promise<IGroup[]> {
		return await this.groupRepository.findAll()
	}
}

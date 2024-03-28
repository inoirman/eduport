import { IUserRepository } from '../../repositories'

export class RemoveRole {
	constructor(private userRepository: IUserRepository) {}

	async execute(userId: string, roleId: string) {
		// ToDo: Add action access control implementation

		await this.userRepository.removeRole(userId, roleId)
	}
}

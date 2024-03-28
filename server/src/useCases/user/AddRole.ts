import { IUserRepository } from '../../repositories'

export class AddRole {
	constructor(private userRepository: IUserRepository) {}

	async execute(userId: string, roleId: string) {
		// ToDo: Add action access control implementation

		await this.userRepository.addRole(userId, roleId)
	}
}

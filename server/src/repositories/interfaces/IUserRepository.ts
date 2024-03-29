import { User } from '../../entities'

export interface IUserRepository {
	create(user: User): Promise<User>

	existsByEmail(email: string): Promise<boolean>
	addRole(userId: string, role: string): Promise<void>
	removeRole(userId: string, role: string): Promise<void>
}

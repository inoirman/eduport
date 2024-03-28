import * as bcrypt from 'bcrypt'
import { v4 as UUID } from 'uuid'
import { User } from '../../entities'

import { IUserRepository } from '../../repositories'

export class CreateUser {
	private userRepository: IUserRepository

	constructor(userRepository: IUserRepository) {
		this.userRepository = userRepository
	}

	async execute(
		userName: string,
		email: string,
		password: string
	): Promise<User> {
		const emailExists = await this.userRepository.existsByEmail(email)
		if (emailExists) {
			throw new Error('Email already exists')
		}

		const userId = UUID()
		const hashedPassword = await this.hashPassword(password)

		const user = new User(userId, userName, email, hashedPassword)
		return await this.userRepository.create(user)
	}

	async hashPassword(password: string): Promise<string> {
		return await bcrypt.hash(password, 10)
	}
}

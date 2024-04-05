// src/entities/UserRole.ts

export class UserRole {
	userId: string
	roleId: string

	constructor(userId: string, roleId: string) {
		this.userId = userId
		this.roleId = roleId
	}

	// Методы для управления связью могут быть добавлены здесь
}

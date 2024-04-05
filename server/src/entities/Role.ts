// src/entities/Role.ts

import { User } from '.'

export class Role {
	roleId: string
	roleName: string

	users: User[] // Это массив объектов User, которые связаны с данной ролью

	constructor(
		roleId: string,
		roleName: string,

		users: User[]
	) {
		this.roleId = roleId
		this.roleName = roleName

		this.users = users
	}
}

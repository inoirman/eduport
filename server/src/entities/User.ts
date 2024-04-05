// src/entities/User.ts

import { Role } from './Role'
import { Students } from './Students'
import { Teachers } from './Teachers'

export class User {
	userId: string
	email: string
	userName: string
	password: string
	isActive: boolean
	roles: Role[]
	students: Students[]
	teachers: Teachers[]

	constructor(
		userId: string,
		email: string,
		userName: string,
		password: string,
		isActive: boolean = true,
		roles: Role[] = [],
		students: Students[] = [],
		teachers: Teachers[] = []
	) {
		this.userId = userId
		this.email = email
		this.userName = userName
		this.password = password
		this.isActive = isActive
		this.roles = roles
		this.students = students
		this.teachers = teachers
	}

	addRole(role: Role) {
		this.roles.push(role)
	}

	removeRole(role: Role) {
		this.roles = this.roles.filter(r => r.roleId !== role.roleId)
	}

	unActiveUser() {
		this.isActive = false
	}
}

import Role from './Role'

class User {
	userId: string
	userName: string
	email: string
	password: string
	isActive: boolean
	roles: Role[]

	constructor(
		userId: string,
		userName: string,
		email: string,
		password: string,
		roles: Role[] = [],
		isActive: boolean = true
	) {
		this.userId = userId
		this.userName = userName
		this.email = email
		this.password = password
		this.isActive = isActive
		this.roles = roles
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

export default User

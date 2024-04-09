import { PrismaClient } from '@prisma/client'
import { IGroup } from '../interfaces/IGroup'
import { IGroupRepository } from '../interfaces/IGroupRepository'

export class GroupRepository implements IGroupRepository {
	private prisma: PrismaClient
	constructor(prisma: PrismaClient) {
		this.prisma = prisma
	}
	async create(group: IGroup): Promise<IGroup> {
		return await this.prisma.group.create({
			data: group,
		})
	}
	async findById(groupId: string): Promise<IGroup | null> {
		return await this.prisma.group.findUnique({
			where: {
				groupId: groupId,
			},
		})
	}
	async findAll(): Promise<IGroup[]> {
		return await this.prisma.group.findMany()
	}
	async update(group: IGroup): Promise<IGroup> {
		return await this.prisma.group.update({
			where: {
				groupId: group.groupId,
			},
			data: group,
		})
	}
	async delete(groupId: string): Promise<boolean> {
		const deletedGroup = await this.prisma.group.delete({
			where: {
				groupId: groupId,
			},
		})
		return deletedGroup ? true : false
	}

	async addStudent(groupId: string, studentId: string): Promise<void> {
		await this.prisma.group.update({
			where: {
				groupId: groupId,
			},
			data: {
				students: {
					connect: {
						studentId: studentId,
					},
				},
			},
		})
	}

	async removeStudent(groupId: string, studentId: string): Promise<void> {
		await this.prisma.group.update({
			where: {
				groupId: groupId,
			},
			data: {
				students: {
					disconnect: {
						studentId: studentId,
					},
				},
			},
		})
	}
}

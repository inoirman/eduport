import { PrismaClient } from '@prisma/client'
import { ICourseAssignment } from '../interfaces/ICourseAssignment'
import { ICourseAssignmentRepository } from '../interfaces/ICourseAssignmentRepository'

export class CourseAssignmentRepository implements ICourseAssignmentRepository {
	private prisma: PrismaClient
	constructor(prisma: PrismaClient) {
		this.prisma = prisma
	}
	async create(
		courseAssignment: ICourseAssignment
	): Promise<ICourseAssignment> {
		return await this.prisma.courseAssignment.create({
			data: courseAssignment,
		})
	}

	async findById(assignmentId: string): Promise<ICourseAssignment | null> {
		return await this.prisma.courseAssignment.findUnique({
			where: {
				assignmentId: assignmentId,
			},
		})
	}

	async findAll(): Promise<ICourseAssignment[]> {
		return await this.prisma.courseAssignment.findMany()
	}

	async delete(assignmentId: string): Promise<boolean> {
		const deletedCourseAssignment = await this.prisma.courseAssignment.delete({
			where: {
				assignmentId: assignmentId,
			},
		})
		return deletedCourseAssignment ? true : false
	}

	async addTeacher(assignmentId: string, userId: string): Promise<void> {
		await this.prisma.courseAssignment.update({
			where: {
				assignmentId: assignmentId,
			},
			data: {
				teachers: {
					create: {
						userId: userId,
					},
				},
			},
		})
	}

	async removeTeacher(assignmentId: string, teacherId: string): Promise<void> {
		await this.prisma.courseAssignment.update({
			where: {
				assignmentId: assignmentId,
			},
			data: {
				teachers: {
					delete: {
						teacherId: teacherId,
					},
				},
			},
		})
	}

	async updateStartDate(assignmentId: string, startDate: Date): Promise<void> {
		await this.prisma.courseAssignment.update({
			where: {
				assignmentId: assignmentId,
			},
			data: {
				startDate: startDate,
			},
		})
	}
}

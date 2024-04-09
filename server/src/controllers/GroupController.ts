import { NextFunction, Request, Response } from 'express'
import { groupSchema } from '../schemas/groupSchema'
import {
	AddStudent,
	CreateGroup,
	DeleteGroup,
	GetAllGroups,
	GetGroupById,
	RemoveStudent,
	UpdateGroup,
} from '../useCases/group'

export class GroupController {
	constructor(
		private createGroup: CreateGroup,
		private updateGroup: UpdateGroup,
		private deleteGroup: DeleteGroup,
		private getAllGroups: GetAllGroups,
		private getGroupById: GetGroupById,
		private addStudentToGroup: AddStudent,
		private removeStudentFromGroup: RemoveStudent
	) {}

	async create(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const validatedData = groupSchema.parse(req.body)
			const { groupName } = validatedData

			const newGroup = await this.createGroup.execute(groupName)
			res.status(201).json({ message: 'Group created', group: newGroup })
		} catch (error) {
			next(error)
		}
	}

	async update(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const validatedData = groupSchema.parse(req.body)
			const { groupName } = validatedData
			const { groupId } = req.params

			if (!groupId) {
				throw new Error('Group ID is required')
			}

			const updatedGroup = await this.updateGroup.execute(groupId, groupName)
			res.status(200).json({ message: 'Group updated', group: updatedGroup })
		} catch (error) {
			next(error)
		}
	}

	async delete(req: Request, res: Response): Promise<void> {
		const { groupId } = req.params
		res.status(200).json({ message: 'Virtual deleting is done' }) // timely without deleting functionality

		// await this.deleteGroup.execute(groupId)
		// res.status(200).json({ message: 'Group deleted' })
	}

	async getAll(req: Request, res: Response): Promise<void> {
		const groups = await this.getAllGroups.execute()
		res.status(200).json({ groups })
	}

	async getById(req: Request, res: Response): Promise<void> {
		const { groupId } = req.params

		const group = await this.getGroupById.execute(groupId)
		if (!group) {
			res.status(404).json({ message: 'Course not found' })
		} else {
			res.status(200).json({ group })
		}
	}

	async addStudent(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		try {
			const { groupId, studentId } = req.params

			if (!groupId || !studentId) {
				throw new Error('Group ID and Student ID are required')
			}

			await this.addStudentToGroup.execute(groupId, studentId)
			res.status(200).json({ message: 'Student added to group' })
		} catch (error) {
			next(error)
		}
	}

	async removeStudent(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		try {
			const { groupId, studentId } = req.params

			if (!groupId || !studentId) {
				throw new Error('Group ID and Student ID are required')
			}

			await this.removeStudentFromGroup.execute(groupId, studentId)
			res.status(200).json({ message: 'Student removed from group' })
		} catch (error) {
			next(error)
		}
	}
}

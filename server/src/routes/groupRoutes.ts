import { PrismaClient } from '@prisma/client'
import express from 'express'
import { GroupController } from '../controllers/GroupController'
import { authenticate } from '../middlewares/authenticate'
import { authorize } from '../middlewares/authorize'
import { GroupRepository } from '../repositories/implementation/GroupRepository'
import {
	CreateGroup,
	DeleteGroup,
	GetAllGroups,
	GetGroupById,
	UpdateGroup,
} from '../useCases/group'

const groupRouter = express.Router()
const prisma = new PrismaClient()

const groupRepository = new GroupRepository(prisma)
const createGroup = new CreateGroup(groupRepository)
const updateGroup = new UpdateGroup(groupRepository)
const deleteGroup = new DeleteGroup(groupRepository)
const getAllGroups = new GetAllGroups(groupRepository)
const getGroupById = new GetGroupById(groupRepository)

const groupController = new GroupController(
	createGroup,
	updateGroup,
	deleteGroup,
	getAllGroups,
	getGroupById
)

groupRouter.post(
	'/',
	authenticate,
	authorize(['ADMIN', 'TEACHER']),
	(req, res, next) => {
		return groupController.create(req, res, next)
	}
)

groupRouter.put(
	'/:groupId',
	authenticate,
	authorize(['ADMIN', 'TEACHER']),
	(req, res, next) => groupController.update(req, res, next)
)

groupRouter.delete(
	'/:groupId',
	authenticate,
	authorize(['ADMIN', 'TEACHER']),
	(req, res) => groupController.delete(req, res)
)

groupRouter.get(
	'/',
	authenticate,
	authorize(['ADMIN', 'TEACHER', 'STUDENT']),
	(req, res) => groupController.getAll(req, res)
)

groupRouter.get(
	'/:groupId',
	authenticate,
	authorize(['ADMIN', 'TEACHER', 'STUDENT']),
	(req, res, next) => groupController.getById(req, res)
)

export { groupRouter }

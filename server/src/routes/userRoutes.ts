import { Router } from 'express'
import { UserController } from '../controllers/UserController'
import { authenticate } from '../middlewares/authenticate'
import { authorize } from '../middlewares/authorize'
import { UserRepository } from '../repositories/implementation/UserRepository'
import { AddRole, CreateUser, RemoveRole } from '../useCases/user'

const userRouter = Router()

const userRepository = new UserRepository()
const createUserUseCase = new CreateUser(userRepository)
const addRoleUseCase = new AddRole(userRepository)
const removeRoleUseCase = new RemoveRole(userRepository)
const userController = new UserController(
	createUserUseCase,
	addRoleUseCase,
	removeRoleUseCase
)

/**
 * @openapi
 * /api/v1/users:
 *   post:
 *     summary: Create a new user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userName
 *               - email
 *               - password
 *             properties:
 *               userName:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Email already exists
 *
 * @openapi
 * /api/v1/users/role:
 *   post:
 *     summary: Add a role to a user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - roleId
 *             properties:
 *               userId:
 *                 type: string
 *               roleId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Role added successfully
 *       400:
 *         description: Something went wrong
 *   delete:
 *     summary: Remove a role to a user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - roleId
 *             properties:
 *               userId:
 *                 type: string
 *               roleId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Role removed successfully
 *       400:
 *         description: Something went wrong
 */

userRouter.post('/', (req, res, next) => userController.create(req, res, next))
userRouter.post('/role', authenticate, authorize(['ADMIN']), (req, res, next) =>
	userController.addRole(req, res, next)
)
userRouter.delete(
	'/role',
	authenticate,
	authorize(['ADMIN']),
	(req, res, next) => userController.removeRole(req, res, next)
)

export default userRouter

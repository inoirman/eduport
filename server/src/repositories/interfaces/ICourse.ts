import { CourseCategory } from '@prisma/client'

export interface ICourse {
	courseId: string
	courseName: string
	description: string
	category: CourseCategory
}

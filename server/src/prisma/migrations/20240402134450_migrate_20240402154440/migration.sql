-- CreateEnum
CREATE TYPE "CourseCategory" AS ENUM ('FRONTEND', 'BACKEND', 'FULLSTACK', 'DEVOPS', 'TESTING');

-- CreateTable
CREATE TABLE "Course" (
    "courseId" TEXT NOT NULL,
    "courseName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" "CourseCategory" NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("courseId")
);

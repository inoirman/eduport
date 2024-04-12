-- CreateTable
CREATE TABLE "Lessons" (
    "lessonId" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Lessons_pkey" PRIMARY KEY ("lessonId")
);

-- AddForeignKey
ALTER TABLE "Lessons" ADD CONSTRAINT "Lessons_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("courseId") ON DELETE RESTRICT ON UPDATE CASCADE;

class Course {
  courseId: string
  courseName: string
  description: string
  category: string


  constructor(courseId: string, courseName: string, description: string, category: string) {
    this.courseId = courseId
    this.courseName = courseName
    this.description = description
    this.category = category
  }
}

export default Course
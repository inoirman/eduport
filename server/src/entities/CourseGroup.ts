import Group from './Group'
import Course from './Course'

class CourseGroup {
  courseGroupId: string
  group: Group
  course: Course
  startDate: Date | null


  constructor(courseGroupId: string, group: Group, course: Course, startDate: Date | null = null) {
    this.courseGroupId = courseGroupId
    this.group = group
    this.course = course
    this.startDate = startDate
  }
}

export default CourseGroup
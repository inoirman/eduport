import User from './User'

class Group {
  groupId: string
  groupName: string
  students: User[]
  teacher: User


  constructor(groupId: string, groupName: string, students: User[], teacher: User) {
    this.groupId = groupId
    this.groupName = groupName
    this.students = students
    this.teacher = teacher
  }

  addStudent(student: User) {
    this.students.push(student)
  }

  setTeacher(teacher: User) {
    this.teacher = teacher
  }
}

export default Group
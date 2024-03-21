import { Usercourse } from '../usercourse'

import { Lecturenotecourse } from '../lecturenotecourse'

export class Course {
  id: string

  name: string

  code: string

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  usercourses?: Usercourse[]

  lecturenotecourses?: Lecturenotecourse[]
}

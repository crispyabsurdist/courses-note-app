import { User } from '../user'

import { Course } from '../course'

export class Usercourse {
  userId: string

  user?: User

  courseId: string

  course?: Course

  id: string

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}

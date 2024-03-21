import { User } from '../user'

import { Lecturenotecourse } from '../lecturenotecourse'

export class Lecturenote {
  id: string

  title: string

  content?: string

  userId: string

  user?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  lecturenotecoursesAsLectureNote?: Lecturenotecourse[]
}

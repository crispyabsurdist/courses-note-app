import { Lecturenote } from '../lecturenote'

import { Course } from '../course'

export class Lecturenotecourse {
  lectureNoteId: string

  lectureNote?: Lecturenote

  courseId: string

  course?: Course

  id: string

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}

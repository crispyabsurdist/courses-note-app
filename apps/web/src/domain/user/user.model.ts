import { Notification } from '../notification'

import { Lecturenote } from '../lecturenote'

import { Usercourse } from '../usercourse'

export enum UserStatus {
  CREATED = 'CREATED',
  VERIFIED = 'VERIFIED',
}
export class User {
  id: string
  email: string
  status: UserStatus
  name: string
  pictureUrl: string
  password: string
  dateCreated: string
  dateUpdated: string
  notifications?: Notification[]

  lecturenotes?: Lecturenote[]

  usercourses?: Usercourse[]
}

import { AuthorizationRole as AuthorizationRoleModel } from './authorization/authorization.model'

import { User as UserModel } from './user/user.model'

import { Notification as NotificationModel } from './notification/notification.model'

import { Lecturenote as LecturenoteModel } from './lecturenote/lecturenote.model'

import { Course as CourseModel } from './course/course.model'

import { Usercourse as UsercourseModel } from './usercourse/usercourse.model'

import { Lecturenotecourse as LecturenotecourseModel } from './lecturenotecourse/lecturenotecourse.model'

export namespace Model {
  export class AuthorizationRole extends AuthorizationRoleModel {}

  export class User extends UserModel {}

  export class Notification extends NotificationModel {}

  export class Lecturenote extends LecturenoteModel {}

  export class Course extends CourseModel {}

  export class Usercourse extends UsercourseModel {}

  export class Lecturenotecourse extends LecturenotecourseModel {}
}

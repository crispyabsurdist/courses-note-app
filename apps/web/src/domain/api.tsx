import { AiApi } from './ai/ai.api'
import { AuthenticationApi } from './authentication/authentication.api'
import { AuthorizationApi } from './authorization/authorization.api'
import { UploadApi } from './upload/upload.api'

import { UserApi } from './user/user.api'

import { NotificationApi } from './notification/notification.api'

import { LecturenoteApi } from './lecturenote/lecturenote.api'

import { CourseApi } from './course/course.api'

import { UsercourseApi } from './usercourse/usercourse.api'

import { LecturenotecourseApi } from './lecturenotecourse/lecturenotecourse.api'

export namespace Api {
  export class Ai extends AiApi {}
  export class Authentication extends AuthenticationApi {}
  export class Authorization extends AuthorizationApi {}
  export class Upload extends UploadApi {}

  export class User extends UserApi {}

  export class Notification extends NotificationApi {}

  export class Lecturenote extends LecturenoteApi {}

  export class Course extends CourseApi {}

  export class Usercourse extends UsercourseApi {}

  export class Lecturenotecourse extends LecturenotecourseApi {}
}

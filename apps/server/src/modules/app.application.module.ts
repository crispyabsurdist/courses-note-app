import { Module } from '@nestjs/common'
import { AuthenticationApplicationModule } from './authentication/application'
import { AuthorizationApplicationModule } from './authorization/application'
import { UserApplicationModule } from './user/application'

import { LecturenoteApplicationModule } from './lecturenote/application'

import { CourseApplicationModule } from './course/application'

import { UsercourseApplicationModule } from './usercourse/application'

import { LecturenotecourseApplicationModule } from './lecturenotecourse/application'

import { AiApplicationModule } from './ai/application/ai.application.module'
import { NotificationApplicationModule } from './notification/application/notification.application.module'
import { UploadApplicationModule } from './upload/application/upload.application.module'

@Module({
  imports: [
    AuthenticationApplicationModule,
    UserApplicationModule,
    AuthorizationApplicationModule,
    NotificationApplicationModule,
    AiApplicationModule,
    UploadApplicationModule,

    LecturenoteApplicationModule,

    CourseApplicationModule,

    UsercourseApplicationModule,

    LecturenotecourseApplicationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppApplicationModule {}

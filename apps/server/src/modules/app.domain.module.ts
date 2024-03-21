import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from './authentication/domain'
import { AuthorizationDomainModule } from './authorization/domain'

import { UserDomainModule } from './user/domain'

import { NotificationDomainModule } from './notification/domain'

import { LecturenoteDomainModule } from './lecturenote/domain'

import { CourseDomainModule } from './course/domain'

import { UsercourseDomainModule } from './usercourse/domain'

import { LecturenotecourseDomainModule } from './lecturenotecourse/domain'

@Module({
  imports: [
    AuthenticationDomainModule,
    AuthorizationDomainModule,
    UserDomainModule,
    NotificationDomainModule,

    LecturenoteDomainModule,

    CourseDomainModule,

    UsercourseDomainModule,

    LecturenotecourseDomainModule,
  ],
  controllers: [],
  providers: [],
})
export class AppDomainModule {}

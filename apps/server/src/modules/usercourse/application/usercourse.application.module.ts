import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { UsercourseDomainModule } from '../domain'
import { UsercourseController } from './usercourse.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { UsercourseByUserController } from './usercourseByUser.controller'

import { CourseDomainModule } from '../../../modules/course/domain'

import { UsercourseByCourseController } from './usercourseByCourse.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    UsercourseDomainModule,

    UserDomainModule,

    CourseDomainModule,
  ],
  controllers: [
    UsercourseController,

    UsercourseByUserController,

    UsercourseByCourseController,
  ],
  providers: [],
})
export class UsercourseApplicationModule {}

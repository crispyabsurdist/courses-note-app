import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { LecturenoteDomainModule } from '../domain'
import { LecturenoteController } from './lecturenote.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { LecturenoteByUserController } from './lecturenoteByUser.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    LecturenoteDomainModule,

    UserDomainModule,
  ],
  controllers: [LecturenoteController, LecturenoteByUserController],
  providers: [],
})
export class LecturenoteApplicationModule {}

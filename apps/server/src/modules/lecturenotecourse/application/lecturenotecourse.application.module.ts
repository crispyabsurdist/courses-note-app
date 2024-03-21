import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { LecturenotecourseDomainModule } from '../domain'
import { LecturenotecourseController } from './lecturenotecourse.controller'

import { LecturenoteDomainModule } from '../../../modules/lecturenote/domain'

import { LecturenotecourseByLecturenoteController } from './lecturenotecourseByLecturenote.controller'

import { CourseDomainModule } from '../../../modules/course/domain'

import { LecturenotecourseByCourseController } from './lecturenotecourseByCourse.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    LecturenotecourseDomainModule,

    LecturenoteDomainModule,

    CourseDomainModule,
  ],
  controllers: [
    LecturenotecourseController,

    LecturenotecourseByLecturenoteController,

    LecturenotecourseByCourseController,
  ],
  providers: [],
})
export class LecturenotecourseApplicationModule {}

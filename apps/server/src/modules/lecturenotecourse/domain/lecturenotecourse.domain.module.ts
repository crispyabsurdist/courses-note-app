import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { LecturenotecourseDomainFacade } from './lecturenotecourse.domain.facade'
import { Lecturenotecourse } from './lecturenotecourse.model'

@Module({
  imports: [
    TypeOrmModule.forFeature([Lecturenotecourse]),
    DatabaseHelperModule,
  ],
  providers: [LecturenotecourseDomainFacade, LecturenotecourseDomainFacade],
  exports: [LecturenotecourseDomainFacade],
})
export class LecturenotecourseDomainModule {}

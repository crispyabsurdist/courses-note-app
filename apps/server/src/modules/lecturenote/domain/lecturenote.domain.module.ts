import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { LecturenoteDomainFacade } from './lecturenote.domain.facade'
import { Lecturenote } from './lecturenote.model'

@Module({
  imports: [TypeOrmModule.forFeature([Lecturenote]), DatabaseHelperModule],
  providers: [LecturenoteDomainFacade, LecturenoteDomainFacade],
  exports: [LecturenoteDomainFacade],
})
export class LecturenoteDomainModule {}

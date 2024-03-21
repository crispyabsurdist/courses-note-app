import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { UsercourseDomainFacade } from './usercourse.domain.facade'
import { Usercourse } from './usercourse.model'

@Module({
  imports: [TypeOrmModule.forFeature([Usercourse]), DatabaseHelperModule],
  providers: [UsercourseDomainFacade, UsercourseDomainFacade],
  exports: [UsercourseDomainFacade],
})
export class UsercourseDomainModule {}

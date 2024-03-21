import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { CourseDomainModule } from '../domain'
import { CourseController } from './course.controller'

@Module({
  imports: [AuthenticationDomainModule, CourseDomainModule],
  controllers: [CourseController],
  providers: [],
})
export class CourseApplicationModule {}

import { Module } from '@nestjs/common'
import { SocketModule } from '@server/libraries/socket'
import { AuthorizationDomainModule } from '@server/modules/authorization/domain'
import { NotificationDomainModule } from '../domain'

import { NotificationLecturenoteSubscriber } from './subscribers/notification.lecturenote.subscriber'

import { NotificationCourseSubscriber } from './subscribers/notification.course.subscriber'

import { NotificationUsercourseSubscriber } from './subscribers/notification.usercourse.subscriber'

import { NotificationLecturenotecourseSubscriber } from './subscribers/notification.lecturenotecourse.subscriber'

@Module({
  imports: [AuthorizationDomainModule, NotificationDomainModule, SocketModule],
  providers: [
    NotificationLecturenoteSubscriber,

    NotificationCourseSubscriber,

    NotificationUsercourseSubscriber,

    NotificationLecturenotecourseSubscriber,
  ],
  exports: [],
})
export class NotificationInfrastructureModule {}

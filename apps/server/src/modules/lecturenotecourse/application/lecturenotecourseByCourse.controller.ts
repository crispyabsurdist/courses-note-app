import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { LecturenotecourseDomainFacade } from '@server/modules/lecturenotecourse/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { LecturenotecourseApplicationEvent } from './lecturenotecourse.application.event'
import { LecturenotecourseCreateDto } from './lecturenotecourse.dto'

import { CourseDomainFacade } from '../../course/domain'

@Controller('/v1/courses')
export class LecturenotecourseByCourseController {
  constructor(
    private courseDomainFacade: CourseDomainFacade,

    private lecturenotecourseDomainFacade: LecturenotecourseDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/course/:courseId/lecturenotecourses')
  async findManyCourseId(
    @Param('courseId') courseId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.courseDomainFacade.findOneByIdOrFail(courseId)

    const items = await this.lecturenotecourseDomainFacade.findManyByCourse(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/course/:courseId/lecturenotecourses')
  async createByCourseId(
    @Param('courseId') courseId: string,
    @Body() body: LecturenotecourseCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, courseId }

    const item = await this.lecturenotecourseDomainFacade.create(valuesUpdated)

    await this.eventService.emit<LecturenotecourseApplicationEvent.LecturenotecourseCreated.Payload>(
      LecturenotecourseApplicationEvent.LecturenotecourseCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}

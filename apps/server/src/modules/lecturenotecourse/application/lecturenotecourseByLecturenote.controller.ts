import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { LecturenotecourseDomainFacade } from '@server/modules/lecturenotecourse/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { LecturenotecourseApplicationEvent } from './lecturenotecourse.application.event'
import { LecturenotecourseCreateDto } from './lecturenotecourse.dto'

import { LecturenoteDomainFacade } from '../../lecturenote/domain'

@Controller('/v1/lecturenotes')
export class LecturenotecourseByLecturenoteController {
  constructor(
    private lecturenoteDomainFacade: LecturenoteDomainFacade,

    private lecturenotecourseDomainFacade: LecturenotecourseDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/lectureNote/:lectureNoteId/lecturenotecourses')
  async findManyLectureNoteId(
    @Param('lectureNoteId') lectureNoteId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.lecturenoteDomainFacade.findOneByIdOrFail(lectureNoteId)

    const items =
      await this.lecturenotecourseDomainFacade.findManyByLectureNote(
        parent,
        queryOptions,
      )

    return items
  }

  @Post('/lectureNote/:lectureNoteId/lecturenotecourses')
  async createByLectureNoteId(
    @Param('lectureNoteId') lectureNoteId: string,
    @Body() body: LecturenotecourseCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, lectureNoteId }

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

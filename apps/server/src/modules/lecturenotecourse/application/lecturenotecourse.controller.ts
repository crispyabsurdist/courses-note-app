import { Request } from 'express'

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common'
import { EventService } from '@server/libraries/event'
import {
  Lecturenotecourse,
  LecturenotecourseDomainFacade,
} from '@server/modules/lecturenotecourse/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { LecturenotecourseApplicationEvent } from './lecturenotecourse.application.event'
import {
  LecturenotecourseCreateDto,
  LecturenotecourseUpdateDto,
} from './lecturenotecourse.dto'

@Controller('/v1/lecturenotecourses')
export class LecturenotecourseController {
  constructor(
    private eventService: EventService,
    private lecturenotecourseDomainFacade: LecturenotecourseDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items =
      await this.lecturenotecourseDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: LecturenotecourseCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.lecturenotecourseDomainFacade.create(body)

    await this.eventService.emit<LecturenotecourseApplicationEvent.LecturenotecourseCreated.Payload>(
      LecturenotecourseApplicationEvent.LecturenotecourseCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:lecturenotecourseId')
  async findOne(
    @Param('lecturenotecourseId') lecturenotecourseId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.lecturenotecourseDomainFacade.findOneByIdOrFail(
      lecturenotecourseId,
      queryOptions,
    )

    return item
  }

  @Patch('/:lecturenotecourseId')
  async update(
    @Param('lecturenotecourseId') lecturenotecourseId: string,
    @Body() body: LecturenotecourseUpdateDto,
  ) {
    const item =
      await this.lecturenotecourseDomainFacade.findOneByIdOrFail(
        lecturenotecourseId,
      )

    const itemUpdated = await this.lecturenotecourseDomainFacade.update(
      item,
      body as Partial<Lecturenotecourse>,
    )
    return itemUpdated
  }

  @Delete('/:lecturenotecourseId')
  async delete(@Param('lecturenotecourseId') lecturenotecourseId: string) {
    const item =
      await this.lecturenotecourseDomainFacade.findOneByIdOrFail(
        lecturenotecourseId,
      )

    await this.lecturenotecourseDomainFacade.delete(item)

    return item
  }
}

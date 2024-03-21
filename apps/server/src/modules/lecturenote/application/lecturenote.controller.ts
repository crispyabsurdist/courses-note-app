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
  Lecturenote,
  LecturenoteDomainFacade,
} from '@server/modules/lecturenote/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { LecturenoteApplicationEvent } from './lecturenote.application.event'
import { LecturenoteCreateDto, LecturenoteUpdateDto } from './lecturenote.dto'

@Controller('/v1/lecturenotes')
export class LecturenoteController {
  constructor(
    private eventService: EventService,
    private lecturenoteDomainFacade: LecturenoteDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.lecturenoteDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: LecturenoteCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.lecturenoteDomainFacade.create(body)

    await this.eventService.emit<LecturenoteApplicationEvent.LecturenoteCreated.Payload>(
      LecturenoteApplicationEvent.LecturenoteCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:lecturenoteId')
  async findOne(
    @Param('lecturenoteId') lecturenoteId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.lecturenoteDomainFacade.findOneByIdOrFail(
      lecturenoteId,
      queryOptions,
    )

    return item
  }

  @Patch('/:lecturenoteId')
  async update(
    @Param('lecturenoteId') lecturenoteId: string,
    @Body() body: LecturenoteUpdateDto,
  ) {
    const item =
      await this.lecturenoteDomainFacade.findOneByIdOrFail(lecturenoteId)

    const itemUpdated = await this.lecturenoteDomainFacade.update(
      item,
      body as Partial<Lecturenote>,
    )
    return itemUpdated
  }

  @Delete('/:lecturenoteId')
  async delete(@Param('lecturenoteId') lecturenoteId: string) {
    const item =
      await this.lecturenoteDomainFacade.findOneByIdOrFail(lecturenoteId)

    await this.lecturenoteDomainFacade.delete(item)

    return item
  }
}

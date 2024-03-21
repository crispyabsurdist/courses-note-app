import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { LecturenoteDomainFacade } from '@server/modules/lecturenote/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { LecturenoteApplicationEvent } from './lecturenote.application.event'
import { LecturenoteCreateDto } from './lecturenote.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class LecturenoteByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private lecturenoteDomainFacade: LecturenoteDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/lecturenotes')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.lecturenoteDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/lecturenotes')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: LecturenoteCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

    const item = await this.lecturenoteDomainFacade.create(valuesUpdated)

    await this.eventService.emit<LecturenoteApplicationEvent.LecturenoteCreated.Payload>(
      LecturenoteApplicationEvent.LecturenoteCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}

import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { UsercourseDomainFacade } from '@server/modules/usercourse/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { UsercourseApplicationEvent } from './usercourse.application.event'
import { UsercourseCreateDto } from './usercourse.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class UsercourseByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private usercourseDomainFacade: UsercourseDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/usercourses')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.usercourseDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/usercourses')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: UsercourseCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

    const item = await this.usercourseDomainFacade.create(valuesUpdated)

    await this.eventService.emit<UsercourseApplicationEvent.UsercourseCreated.Payload>(
      UsercourseApplicationEvent.UsercourseCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}

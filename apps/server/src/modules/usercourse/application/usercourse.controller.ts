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
  Usercourse,
  UsercourseDomainFacade,
} from '@server/modules/usercourse/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { UsercourseApplicationEvent } from './usercourse.application.event'
import { UsercourseCreateDto, UsercourseUpdateDto } from './usercourse.dto'

@Controller('/v1/usercourses')
export class UsercourseController {
  constructor(
    private eventService: EventService,
    private usercourseDomainFacade: UsercourseDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.usercourseDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: UsercourseCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.usercourseDomainFacade.create(body)

    await this.eventService.emit<UsercourseApplicationEvent.UsercourseCreated.Payload>(
      UsercourseApplicationEvent.UsercourseCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:usercourseId')
  async findOne(
    @Param('usercourseId') usercourseId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.usercourseDomainFacade.findOneByIdOrFail(
      usercourseId,
      queryOptions,
    )

    return item
  }

  @Patch('/:usercourseId')
  async update(
    @Param('usercourseId') usercourseId: string,
    @Body() body: UsercourseUpdateDto,
  ) {
    const item =
      await this.usercourseDomainFacade.findOneByIdOrFail(usercourseId)

    const itemUpdated = await this.usercourseDomainFacade.update(
      item,
      body as Partial<Usercourse>,
    )
    return itemUpdated
  }

  @Delete('/:usercourseId')
  async delete(@Param('usercourseId') usercourseId: string) {
    const item =
      await this.usercourseDomainFacade.findOneByIdOrFail(usercourseId)

    await this.usercourseDomainFacade.delete(item)

    return item
  }
}

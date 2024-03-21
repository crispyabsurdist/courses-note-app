import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Usercourse } from './usercourse.model'

import { User } from '../../user/domain'

import { Course } from '../../course/domain'

@Injectable()
export class UsercourseDomainFacade {
  constructor(
    @InjectRepository(Usercourse)
    private repository: Repository<Usercourse>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<Usercourse>): Promise<Usercourse> {
    return this.repository.save(values)
  }

  async update(
    item: Usercourse,
    values: Partial<Usercourse>,
  ): Promise<Usercourse> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Usercourse): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Usercourse> = {},
  ): Promise<Usercourse[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Usercourse> = {},
  ): Promise<Usercourse> {
    if (!id) {
      this.databaseHelper.invalidQueryWhere('id')
    }

    const queryOptionsEnsured = {
      includes: queryOptions?.includes,
      filters: {
        id: id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    const item = await query.getOne()

    if (!item) {
      this.databaseHelper.notFoundByQuery(queryOptionsEnsured.filters)
    }

    return item
  }

  async findManyByUser(
    item: User,
    queryOptions: RequestHelper.QueryOptions<Usercourse> = {},
  ): Promise<Usercourse[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('user')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        userId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

  async findManyByCourse(
    item: Course,
    queryOptions: RequestHelper.QueryOptions<Usercourse> = {},
  ): Promise<Usercourse[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('course')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        courseId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}

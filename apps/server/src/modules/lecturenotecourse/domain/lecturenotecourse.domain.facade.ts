import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Lecturenotecourse } from './lecturenotecourse.model'

import { Lecturenote } from '../../lecturenote/domain'

import { Course } from '../../course/domain'

@Injectable()
export class LecturenotecourseDomainFacade {
  constructor(
    @InjectRepository(Lecturenotecourse)
    private repository: Repository<Lecturenotecourse>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<Lecturenotecourse>): Promise<Lecturenotecourse> {
    return this.repository.save(values)
  }

  async update(
    item: Lecturenotecourse,
    values: Partial<Lecturenotecourse>,
  ): Promise<Lecturenotecourse> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Lecturenotecourse): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Lecturenotecourse> = {},
  ): Promise<Lecturenotecourse[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Lecturenotecourse> = {},
  ): Promise<Lecturenotecourse> {
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

  async findManyByLectureNote(
    item: Lecturenote,
    queryOptions: RequestHelper.QueryOptions<Lecturenotecourse> = {},
  ): Promise<Lecturenotecourse[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('lectureNote')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        lectureNoteId: item.id,
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
    queryOptions: RequestHelper.QueryOptions<Lecturenotecourse> = {},
  ): Promise<Lecturenotecourse[]> {
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

import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Lecturenote } from './lecturenote.model'

export class LecturenoteApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Lecturenote>,
  ): Promise<Lecturenote[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/lecturenotes${buildOptions}`)
  }

  static findOne(
    lecturenoteId: string,
    queryOptions?: ApiHelper.QueryOptions<Lecturenote>,
  ): Promise<Lecturenote> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/lecturenotes/${lecturenoteId}${buildOptions}`,
    )
  }

  static createOne(values: Partial<Lecturenote>): Promise<Lecturenote> {
    return HttpService.api.post(`/v1/lecturenotes`, values)
  }

  static updateOne(
    lecturenoteId: string,
    values: Partial<Lecturenote>,
  ): Promise<Lecturenote> {
    return HttpService.api.patch(`/v1/lecturenotes/${lecturenoteId}`, values)
  }

  static deleteOne(lecturenoteId: string): Promise<void> {
    return HttpService.api.delete(`/v1/lecturenotes/${lecturenoteId}`)
  }

  static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<Lecturenote>,
  ): Promise<Lecturenote[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/lecturenotes${buildOptions}`,
    )
  }

  static createOneByUserId(
    userId: string,
    values: Partial<Lecturenote>,
  ): Promise<Lecturenote> {
    return HttpService.api.post(`/v1/users/user/${userId}/lecturenotes`, values)
  }
}

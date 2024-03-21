import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Usercourse } from './usercourse.model'

export class UsercourseApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Usercourse>,
  ): Promise<Usercourse[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/usercourses${buildOptions}`)
  }

  static findOne(
    usercourseId: string,
    queryOptions?: ApiHelper.QueryOptions<Usercourse>,
  ): Promise<Usercourse> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/usercourses/${usercourseId}${buildOptions}`)
  }

  static createOne(values: Partial<Usercourse>): Promise<Usercourse> {
    return HttpService.api.post(`/v1/usercourses`, values)
  }

  static updateOne(
    usercourseId: string,
    values: Partial<Usercourse>,
  ): Promise<Usercourse> {
    return HttpService.api.patch(`/v1/usercourses/${usercourseId}`, values)
  }

  static deleteOne(usercourseId: string): Promise<void> {
    return HttpService.api.delete(`/v1/usercourses/${usercourseId}`)
  }

  static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<Usercourse>,
  ): Promise<Usercourse[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/usercourses${buildOptions}`,
    )
  }

  static createOneByUserId(
    userId: string,
    values: Partial<Usercourse>,
  ): Promise<Usercourse> {
    return HttpService.api.post(`/v1/users/user/${userId}/usercourses`, values)
  }

  static findManyByCourseId(
    courseId: string,
    queryOptions?: ApiHelper.QueryOptions<Usercourse>,
  ): Promise<Usercourse[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/courses/course/${courseId}/usercourses${buildOptions}`,
    )
  }

  static createOneByCourseId(
    courseId: string,
    values: Partial<Usercourse>,
  ): Promise<Usercourse> {
    return HttpService.api.post(
      `/v1/courses/course/${courseId}/usercourses`,
      values,
    )
  }
}

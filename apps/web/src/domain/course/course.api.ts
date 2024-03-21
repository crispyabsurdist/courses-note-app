import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Course } from './course.model'

export class CourseApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Course>,
  ): Promise<Course[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/courses${buildOptions}`)
  }

  static findOne(
    courseId: string,
    queryOptions?: ApiHelper.QueryOptions<Course>,
  ): Promise<Course> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/courses/${courseId}${buildOptions}`)
  }

  static createOne(values: Partial<Course>): Promise<Course> {
    return HttpService.api.post(`/v1/courses`, values)
  }

  static updateOne(courseId: string, values: Partial<Course>): Promise<Course> {
    return HttpService.api.patch(`/v1/courses/${courseId}`, values)
  }

  static deleteOne(courseId: string): Promise<void> {
    return HttpService.api.delete(`/v1/courses/${courseId}`)
  }
}

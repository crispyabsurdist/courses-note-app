import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Lecturenotecourse } from './lecturenotecourse.model'

export class LecturenotecourseApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Lecturenotecourse>,
  ): Promise<Lecturenotecourse[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/lecturenotecourses${buildOptions}`)
  }

  static findOne(
    lecturenotecourseId: string,
    queryOptions?: ApiHelper.QueryOptions<Lecturenotecourse>,
  ): Promise<Lecturenotecourse> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/lecturenotecourses/${lecturenotecourseId}${buildOptions}`,
    )
  }

  static createOne(
    values: Partial<Lecturenotecourse>,
  ): Promise<Lecturenotecourse> {
    return HttpService.api.post(`/v1/lecturenotecourses`, values)
  }

  static updateOne(
    lecturenotecourseId: string,
    values: Partial<Lecturenotecourse>,
  ): Promise<Lecturenotecourse> {
    return HttpService.api.patch(
      `/v1/lecturenotecourses/${lecturenotecourseId}`,
      values,
    )
  }

  static deleteOne(lecturenotecourseId: string): Promise<void> {
    return HttpService.api.delete(
      `/v1/lecturenotecourses/${lecturenotecourseId}`,
    )
  }

  static findManyByLectureNoteId(
    lectureNoteId: string,
    queryOptions?: ApiHelper.QueryOptions<Lecturenotecourse>,
  ): Promise<Lecturenotecourse[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/lecturenotes/lectureNote/${lectureNoteId}/lecturenotecourses${buildOptions}`,
    )
  }

  static createOneByLectureNoteId(
    lectureNoteId: string,
    values: Partial<Lecturenotecourse>,
  ): Promise<Lecturenotecourse> {
    return HttpService.api.post(
      `/v1/lecturenotes/lectureNote/${lectureNoteId}/lecturenotecourses`,
      values,
    )
  }

  static findManyByCourseId(
    courseId: string,
    queryOptions?: ApiHelper.QueryOptions<Lecturenotecourse>,
  ): Promise<Lecturenotecourse[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/courses/course/${courseId}/lecturenotecourses${buildOptions}`,
    )
  }

  static createOneByCourseId(
    courseId: string,
    values: Partial<Lecturenotecourse>,
  ): Promise<Lecturenotecourse> {
    return HttpService.api.post(
      `/v1/courses/course/${courseId}/lecturenotecourses`,
      values,
    )
  }
}

export namespace LecturenotecourseApplicationEvent {
  export namespace LecturenotecourseCreated {
    export const key = 'lecturenotecourse.application.lecturenotecourse.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}

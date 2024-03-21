export namespace UsercourseApplicationEvent {
  export namespace UsercourseCreated {
    export const key = 'usercourse.application.usercourse.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}

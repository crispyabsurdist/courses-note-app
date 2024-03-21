export namespace LecturenoteApplicationEvent {
  export namespace LecturenoteCreated {
    export const key = 'lecturenote.application.lecturenote.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}

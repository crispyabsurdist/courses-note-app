import { ColumnNumeric } from '@server/core/database'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Lecturenote } from '../../../modules/lecturenote/domain'

import { Course } from '../../../modules/course/domain'

@Entity()
export class Lecturenotecourse {
  @Column({})
  lectureNoteId: string

  @ManyToOne(
    () => Lecturenote,
    parent => parent.lecturenotecoursesAsLectureNote,
  )
  @JoinColumn({ name: 'lectureNoteId' })
  lectureNote?: Lecturenote

  @Column({})
  courseId: string

  @ManyToOne(() => Course, parent => parent.lecturenotecourses)
  @JoinColumn({ name: 'courseId' })
  course?: Course

  @PrimaryGeneratedColumn('uuid')
  id: string

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}

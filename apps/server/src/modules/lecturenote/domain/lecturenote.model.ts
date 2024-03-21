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

import { User } from '../../../modules/user/domain'

import { Lecturenotecourse } from '../../../modules/lecturenotecourse/domain'

@Entity()
export class Lecturenote {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  title: string

  @Column({ nullable: true })
  content?: string

  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.lecturenotes)
  @JoinColumn({ name: 'userId' })
  user?: User

  @OneToMany(() => Lecturenotecourse, child => child.lectureNote)
  lecturenotecoursesAsLectureNote?: Lecturenotecourse[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}

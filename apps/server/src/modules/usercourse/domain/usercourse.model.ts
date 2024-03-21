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

import { Course } from '../../../modules/course/domain'

@Entity()
export class Usercourse {
  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.usercourses)
  @JoinColumn({ name: 'userId' })
  user?: User

  @Column({})
  courseId: string

  @ManyToOne(() => Course, parent => parent.usercourses)
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

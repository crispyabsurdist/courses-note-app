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

import { Usercourse } from '../../../modules/usercourse/domain'

import { Lecturenotecourse } from '../../../modules/lecturenotecourse/domain'

@Entity()
export class Course {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  name: string

  @Column({})
  code: string

  @OneToMany(() => Usercourse, child => child.course)
  usercourses?: Usercourse[]

  @OneToMany(() => Lecturenotecourse, child => child.course)
  lecturenotecourses?: Lecturenotecourse[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}

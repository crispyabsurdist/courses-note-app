import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class LecturenotecourseCreateDto {
  @IsString()
  @IsOptional()
  lectureNoteId?: string

  @IsString()
  @IsOptional()
  courseId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}

export class LecturenotecourseUpdateDto {
  @IsString()
  @IsOptional()
  lectureNoteId?: string

  @IsString()
  @IsOptional()
  courseId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}

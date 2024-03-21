'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Card, Avatar, Space, Row, Col, Tag } from 'antd'
import { BookOutlined, UserOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function LectureNoteDetailsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { enqueueSnackbar } = useSnackbar()
  const [lectureNote, setLectureNote] = useState<Model.Lecturenote | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLectureNoteDetails = async () => {
      try {
        const lectureNoteDetails = await Api.Lecturenote.findOne(params.id, {
          includes: [
            'user',
            'lecturenotecoursesAsLectureNote',
            'lecturenotecoursesAsLectureNote.course',
          ],
        })
        setLectureNote(lectureNoteDetails)
      } catch (error) {
        enqueueSnackbar('Failed to fetch lecture note details', {
          variant: 'error',
        })
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      fetchLectureNoteDetails()
    }
  }, [params.id])

  if (loading) {
    return <PageLayout layout="full-width">Loading...</PageLayout>
  }

  if (!lectureNote) {
    return <PageLayout layout="full-width">Lecture Note not found</PageLayout>
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={24} md={20} lg={16} xl={14}>
          <Card>
            <Space direction="vertical" size="middle">
              <Title level={2}>{lectureNote.title}</Title>
              <Paragraph>{lectureNote.content}</Paragraph>
              <Space>
                <Avatar
                  src={lectureNote.user?.pictureUrl}
                  icon={<UserOutlined />}
                />
                <Text strong>{lectureNote.user?.name}</Text>
              </Space>
              <Text>
                Published on{' '}
                {dayjs(lectureNote.dateCreated).format('DD MMM YYYY')}
              </Text>
              <Space wrap>
                {lectureNote.lecturenotecoursesAsLectureNote?.map(course => (
                  <Tag
                    icon={<BookOutlined />}
                    color="blue"
                    key={course.courseId}
                  >
                    {course.course?.name}
                  </Tag>
                ))}
              </Space>
            </Space>
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}

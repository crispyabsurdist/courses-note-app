'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Row, Col, Card, Spin, Space } from 'antd'
import { BookOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function CourseDetailsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { enqueueSnackbar } = useSnackbar()
  const [course, setCourse] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (params.id) {
      Api.Course.findOne(params.id, {
        includes: ['lecturenotecourses', 'lecturenotecourses.lectureNote'],
      })
        .then(data => {
          setCourse(data)
          setLoading(false)
        })
        .catch(error => {
          console.error(error)
          enqueueSnackbar('Failed to load course details', { variant: 'error' })
          setLoading(false)
        })
    }
  }, [params.id])

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={24} md={20} lg={16} xl={14}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Title level={2}>
              <BookOutlined /> Course Details
            </Title>
            {loading ? (
              <Spin size="large" />
            ) : (
              <Card>
                <Title level={4}>{course?.name}</Title>
                <Text strong>Code: </Text>
                <Text>{course?.code}</Text>
                <br />
                <Text strong>Created At: </Text>
                <Text>{dayjs(course?.dateCreated).format('DD/MM/YYYY')}</Text>
                <Title level={5} style={{ marginTop: '16px' }}>
                  Lecture Notes
                </Title>
                {course?.lecturenotecourses?.map((ln: any) => (
                  <Card key={ln.lectureNoteId} style={{ marginBottom: '10px' }}>
                    <Text strong>Title: </Text>
                    <Text>{ln.lectureNote?.title}</Text>
                    <br />
                    <Text strong>Created At: </Text>
                    <Text>
                      {dayjs(ln.lectureNote?.dateCreated).format('DD/MM/YYYY')}
                    </Text>
                  </Card>
                ))}
              </Card>
            )}
          </Space>
        </Col>
      </Row>
    </PageLayout>
  )
}

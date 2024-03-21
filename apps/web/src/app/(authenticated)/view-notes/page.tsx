'use client'

import React, { useEffect, useState } from 'react'
import { Card, Col, Row, Typography, Spin, Avatar } from 'antd'
import { BookOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function ViewLectureNotesPage() {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const [lectureNotes, setLectureNotes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLectureNotes = async () => {
      try {
        setLoading(true)
        const notes = await Api.Lecturenote.findMany({ includes: ['user'] })
        setLectureNotes(notes)
        setLoading(false)
      } catch (error) {
        enqueueSnackbar('Failed to fetch lecture notes', { variant: 'error' })
        setLoading(false)
      }
    }

    fetchLectureNotes()
  }, [])

  const navigateToNoteDetails = id => {
    router.push(`/notes/${id}`)
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        <Title level={2}>Browse Lecture Notes</Title>
        <Text>
          Explore and learn from the collection of lecture notes shared by
          others.
        </Text>
        {loading ? (
          <Spin size="large" />
        ) : (
          <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
            {lectureNotes?.map(note => (
              <Col key={note.id} xs={24} sm={12} md={8} lg={6} xl={4}>
                <Card
                  hoverable
                  onClick={() => navigateToNoteDetails(note.id)}
                  cover={<Avatar size={64} icon={<BookOutlined />} />}
                >
                  <Card.Meta
                    title={note.title}
                    description={`By ${note.user?.name || 'Unknown'} - ${dayjs(note.dateCreated).format('DD/MM/YYYY')}`}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </PageLayout>
  )
}

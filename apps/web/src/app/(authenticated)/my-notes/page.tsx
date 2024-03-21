'use client'

import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Typography, Modal, Input, Space } from 'antd'
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function MyLectureNotesPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [lectureNotes, setLectureNotes] = useState([])

  useEffect(() => {
    if (userId) {
      fetchLectureNotes()
    }
  }, [userId])

  const fetchLectureNotes = async () => {
    try {
      const notes = await Api.Lecturenote.findManyByUserId(userId, {
        includes: ['user'],
      })
      setLectureNotes(notes)
    } catch (error) {
      enqueueSnackbar('Failed to fetch lecture notes', { variant: 'error' })
    }
  }

  const deleteNote = async noteId => {
    try {
      await Api.Lecturenote.deleteOne(noteId)
      enqueueSnackbar('Lecture note deleted successfully', {
        variant: 'success',
      })
      fetchLectureNotes()
    } catch (error) {
      enqueueSnackbar('Failed to delete lecture note', { variant: 'error' })
    }
  }

  const navigateToEditPage = noteId => {
    router.push(`/edit-note/${noteId}`)
  }

  const navigateToAddPage = () => {
    router.push('/upload-notes')
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        <Title level={2}>My Lecture Notes</Title>
        <Text>Manage your uploaded lecture notes here.</Text>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          style={{ marginBottom: '20px' }}
          onClick={navigateToAddPage}
        >
          Upload New Note
        </Button>
        <Row gutter={[16, 16]}>
          {lectureNotes?.map(note => (
            <Col key={note.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                title={note.title}
                actions={[
                  <EditOutlined
                    key="edit"
                    onClick={() => navigateToEditPage(note.id)}
                  />,
                  <DeleteOutlined
                    key="delete"
                    onClick={() => deleteNote(note.id)}
                  />,
                ]}
              >
                <Text>{note.content?.substring(0, 100)}...</Text>
                <br />
                <Text type="secondary">
                  Last updated: {dayjs(note.dateUpdated).format('DD/MM/YYYY')}
                </Text>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </PageLayout>
  )
}

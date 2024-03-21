'use client'

import { useState } from 'react'
import { Button, Upload, message, Typography, Row, Col } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function UploadLectureNotesPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [fileList, setFileList] = useState([])

  const handleUpload = async options => {
    const { file } = options
    try {
      const url = await Api.Upload.upload(file)
      setFileList(fileList => [...fileList, { url: url, status: 'done' }])
      const lectureNote = await Api.Lecturenote.createOneByUserId(userId, {
        title: file.name,
        userId: userId,
        dateCreated: dayjs().format(),
        dateUpdated: dayjs().format(),
      })
      enqueueSnackbar('Lecture note uploaded successfully', {
        variant: 'success',
      })
      router.push(`/notes/${lectureNote.id}`)
    } catch (error) {
      enqueueSnackbar('Failed to upload lecture note', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col span={24} md={12} lg={8}>
          <Title level={2}>Upload Lecture Notes</Title>
          <Text>
            Here you can upload your lecture notes to share with your peers.
          </Text>
          <Upload fileList={fileList} customRequest={handleUpload} maxCount={1}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Col>
      </Row>
    </PageLayout>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { Button, Form, Input, Typography, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function EditLectureNotePage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [lectureNote, setLectureNote] = useState(null)
  const [fileList, setFileList] = useState([])

  useEffect(() => {
    const fetchLectureNote = async () => {
      try {
        const lectureNoteData = await Api.Lecturenote.findOne(params.id, {
          includes: ['user'],
        })
        setLectureNote(lectureNoteData)
      } catch (error) {
        enqueueSnackbar('Failed to fetch lecture note details', {
          variant: 'error',
        })
      }
    }

    fetchLectureNote()
  }, [params.id])

  const handleUpload = async options => {
    const { file } = options
    try {
      const url = await Api.Upload.upload(file)
      setFileList(fileList => [...fileList, { url: url, status: 'done' }])
      enqueueSnackbar('File uploaded successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to upload file', { variant: 'error' })
    }
  }

  const onFinish = async values => {
    try {
      await Api.Lecturenote.updateOne(params.id, { ...values, userId })
      enqueueSnackbar('Lecture note updated successfully', {
        variant: 'success',
      })
      router.push('/my-notes')
    } catch (error) {
      enqueueSnackbar('Failed to update lecture note', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <Title>Edit Lecture Note</Title>
      <Paragraph>Edit your previously uploaded lecture notes here.</Paragraph>
      <Form
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          title: lectureNote?.title,
          content: lectureNote?.content,
        }}
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: 'Please input the title of the lecture note!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Content" name="content">
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Upload File">
          <Upload fileList={fileList} customRequest={handleUpload} maxCount={1}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save Changes
          </Button>
        </Form.Item>
      </Form>
    </PageLayout>
  )
}

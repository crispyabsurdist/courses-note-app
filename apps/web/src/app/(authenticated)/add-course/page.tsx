'use client'

import React, { useState } from 'react'
import { Button, Form, Input, Typography } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function AddCoursePage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const { enqueueSnackbar } = useSnackbar()
  const [form] = Form.useForm()

  const handleSubmit = async (values: { name: string; code: string }) => {
    try {
      await Api.Course.createOne(values)
      enqueueSnackbar('Course added successfully', { variant: 'success' })
      router.push('/manage-courses')
    } catch (error) {
      enqueueSnackbar('Failed to add course', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <Title level={2}>
          <PlusCircleOutlined /> Add New Course
        </Title>
        <Paragraph>
          Fill in the details below to add a new course to the application.
        </Paragraph>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          autoComplete="off"
        >
          <Form.Item
            label="Course Name"
            name="name"
            rules={[
              { required: true, message: 'Please input the course name!' },
            ]}
          >
            <Input placeholder="Enter course name" />
          </Form.Item>
          <Form.Item
            label="Course Code"
            name="code"
            rules={[
              { required: true, message: 'Please input the course code!' },
            ]}
          >
            <Input placeholder="Enter course code" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Course
            </Button>
          </Form.Item>
        </Form>
      </div>
    </PageLayout>
  )
}

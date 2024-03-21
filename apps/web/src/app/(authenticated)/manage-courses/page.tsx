'use client'

import React, { useEffect, useState } from 'react'
import { Button, Table, Modal, Form, Input, Typography, Space } from 'antd'
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons'
const { Title } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function CourseManagementPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [courses, setCourses] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const coursesFound = await Api.Course.findMany()
        setCourses(coursesFound)
      } catch (error) {
        enqueueSnackbar('Failed to fetch courses', { variant: 'error' })
      }
    }

    fetchCourses()
  }, [])

  const handleAddCourse = async values => {
    try {
      await Api.Course.createOne(values)
      enqueueSnackbar('Course added successfully', { variant: 'success' })
      setIsModalVisible(false)
      form.resetFields()
      // Refresh courses list
      const coursesFound = await Api.Course.findMany()
      setCourses(coursesFound)
    } catch (error) {
      enqueueSnackbar('Failed to add course', { variant: 'error' })
    }
  }

  const handleDeleteCourse = async courseId => {
    try {
      await Api.Course.deleteOne(courseId)
      enqueueSnackbar('Course deleted successfully', { variant: 'success' })
      // Refresh courses list
      const coursesFound = await Api.Course.findMany()
      setCourses(coursesFound)
    } catch (error) {
      enqueueSnackbar('Failed to delete course', { variant: 'error' })
    }
  }

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
    form.resetFields()
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Code',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDeleteCourse(record.id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <Title level={2}>Course Management</Title>
      <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
        Add Course
      </Button>
      <Table columns={columns} dataSource={courses} rowKey="id" />
      <Modal
        title="Add Course"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form form={form} onFinish={handleAddCourse}>
          <Form.Item
            name="name"
            rules={[
              { required: true, message: 'Please input the course name!' },
            ]}
          >
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="code"
            rules={[
              { required: true, message: 'Please input the course code!' },
            ]}
          >
            <Input placeholder="Code" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Course
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}

import { RouterObject } from '@web/core/router'
import { useDesignSystem } from '@web/designSystem'
import { Model } from '@web/domain'
import { useAuthentication } from '@web/modules/authentication'
import { Col, Layout, Row } from 'antd'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import { Leftbar } from './components/Leftbar'
import { Logo } from './components/Logo'
import { SubNavigation } from './components/SubNavigation'
import { Topbar } from './components/Topbar/index.layout'

interface Props {
  children: ReactNode
}

export const NavigationLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  const authentication = useAuthentication()
  const user = authentication?.user as Model.User

  const { isMobile } = useDesignSystem()

  const goTo = (url: string) => {
    router.push(url)
  }

  const goToUserPage = (url: string) => {
    router.push(url.replace(':id', user?.id))
  }

  const itemsLeftbar = [
    {
      key: '/upload-notes',
      label: 'Upload Notes',
      onClick: () => goTo('/upload-notes'),
    },

    {
      key: '/view-notes',
      label: 'Browse Notes',
      onClick: () => goTo('/view-notes'),
    },

    {
      key: '/my-notes',
      label: 'My Notes',
      onClick: () => goTo('/my-notes'),
    },

    {
      key: '/manage-courses',
      label: 'Manage Courses',
      onClick: () => goTo('/manage-courses'),
    },

    {
      key: '/add-course',
      label: 'Add Course',
      onClick: () => goTo('/add-course'),
    },
  ]

  const itemsUser = []

  const itemsTopbar = []

  const itemsSubNavigation = [
    {
      key: '/upload-notes',
      label: 'Upload Notes',
    },

    {
      key: '/view-notes',
      label: 'Browse Notes',
    },

    {
      key: '/notes/:id',
      label: 'Note Details',
    },

    {
      key: '/my-notes',
      label: 'My Notes',
    },

    {
      key: '/manage-courses',
      label: 'Manage Courses',
    },

    {
      key: '/courses/:id',
      label: 'Course Details',
    },

    {
      key: '/add-course',
      label: 'Add Course',
    },

    {
      key: '/edit-note/:id',
      label: 'Edit Note',
    },
  ]

  const itemsMobile = [
    {
      key: 'profile',
      label: 'Profile',
      onClick: () => goTo(RouterObject.route.PROFILE),
    },
    {
      key: 'notifications',
      label: 'Notifications',
      onClick: () => goTo(RouterObject.route.NOTIFICATIONS),
    },
    ...itemsTopbar,
    ...itemsLeftbar,
  ]

  const isLeftbar = itemsLeftbar.length > 0 && !isMobile

  return (
    <>
      <Layout>
        <Row
          style={{
            height: '100vh',
            width: '100vw',
          }}
        >
          {isLeftbar && (
            <Col>
              <Leftbar
                items={itemsLeftbar}
                itemsUser={itemsUser}
                logo={<Logo className="m-2" />}
              />
            </Col>
          )}

          <Col
            style={{
              flex: 1,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            <Topbar
              isMobile={isMobile}
              items={itemsTopbar}
              itemsMobile={itemsMobile}
              logo={!isLeftbar && <Logo width={40} height={40} />}
            />

            <Col
              style={{
                flex: 1,
                overflowY: 'auto',
                overflowX: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <SubNavigation items={itemsSubNavigation} />

              {children}
            </Col>
          </Col>
        </Row>
      </Layout>
    </>
  )
}

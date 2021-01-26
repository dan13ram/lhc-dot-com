import React from 'react'
import { Link } from 'gatsby'

import { Container } from '@chakra-ui/react'
import Page from '../components/Page'
import Layout from '../components/Layout';

const NotFoundPage: React.FC = () => (
  <Layout>
    <Page>
      <Container>
        <h1>404: Page not found.</h1>
        <p>
          You've hit the void. <Link to="/">Go back.</Link>
        </p>
      </Container>
    </Page>
  </Layout>
)

export default NotFoundPage

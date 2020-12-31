import React from 'react'
import { Link } from 'gatsby'

import { Container } from '@chakra-ui/react'
import Page from '../components/Page'
import IndexLayout from '../layouts'

const IndexPage: React.FC = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage

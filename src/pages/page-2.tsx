import React from 'react'
import { Link } from 'gatsby'

import { Container } from '@chakra-ui/react'
import Page from '../components/Page'
import IndexLayout from '../layouts'

const PageTwo: React.FC = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <ul>
          <li>
            <Link to="/a-markdown-page/">Show me some Markdown!</Link>
          </li>
          <li>
            <Link to="/">Take me back home.</Link>
          </li>
        </ul>
      </Container>
    </Page>
  </IndexLayout>
)

export default PageTwo

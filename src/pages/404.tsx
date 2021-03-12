import React from 'react';
import { Link } from 'gatsby';

import { Container } from '@chakra-ui/react';
import Page from '../components/Page';

const NotFoundPage: React.FC = () => (
  <Page>
    <Container>
      <h1>404: Page not found.</h1>
      <p>
        You've hit the void. <Link to="/">Go back.</Link>
      </p>
    </Container>
  </Page>
);

export default NotFoundPage;

import { Container, Heading, Text } from '@chakra-ui/react';
import { Link } from 'gatsby';
import React from 'react';

const NotFoundPage: React.FC = () => (
  <Container>
    <Heading>404: Page not found.</Heading>
    <Text>
      You've hit the void. <Link to="/">Go back.</Link>
    </Text>
  </Container>
);

export default NotFoundPage;

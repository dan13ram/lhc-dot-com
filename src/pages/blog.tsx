import React from 'react';
import SEO from 'src/shared/SEO';

import BlogRoll from 'src/components/BlogRoll';
import { useTitle } from 'src/contexts/LayoutContext';
import { Flex } from '@chakra-ui/react';

const BlogPage: React.FC = () => {
  useTitle('Blog');
  return (
    <Flex
      direction="column"
      align="center"
      w="100%"
      position="relative"
      mt="5rem"
    >
      <SEO title="Blog" />
      <BlogRoll />
    </Flex>
  );
};

export default BlogPage;

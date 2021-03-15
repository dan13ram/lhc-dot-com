import { Box } from '@chakra-ui/react';
import React from 'react';

interface PageProps {
  className?: string;
}

const Page: React.FC<PageProps> = ({ children, className }) => (
  <Box
    display="block"
    flex="1"
    position="relative"
    padding="2rem"
    mb="3rem"
    className={className}
  >
    {children}
  </Box>
);

export default Page;

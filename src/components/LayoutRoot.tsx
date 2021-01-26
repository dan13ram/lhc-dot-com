import React from 'react';
import { Flex } from '@chakra-ui/react';

interface LayoutRootProps {
  className?: string;
}

const LayoutRoot: React.FC<LayoutRootProps> = ({ children, className }) => (
  <Flex direction="column" minH="100vh" className={className}>
    {children}
  </Flex>
);

export default LayoutRoot;

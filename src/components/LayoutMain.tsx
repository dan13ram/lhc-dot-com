import React from 'react';
import { Flex } from '@chakra-ui/react';

interface LayoutMainProps {
  className?: string;
}

const LayoutMain: React.FC<LayoutMainProps> = ({ children, className }) => (
  <Flex direction="column" flex={1} className={className}>
    {children}
  </Flex>
);

export default LayoutMain;

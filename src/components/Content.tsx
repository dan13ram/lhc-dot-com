import { Flex, FlexProps } from '@chakra-ui/react';
import React from 'react';

export const HTMLContent: React.FC<FlexProps & { content: string }> = ({
  content,
  ...props
}) => (
  <Flex {...props}>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </Flex>
);

export const Content: React.FC<FlexProps & { content: string }> = ({
  content,
  ...props
}) => (
  <Flex {...props}>
    <div>{content}</div>;
  </Flex>
);

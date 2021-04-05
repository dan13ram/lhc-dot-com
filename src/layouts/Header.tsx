import { Flex, Button, Heading } from '@chakra-ui/react';
import * as React from 'react';
import { useLayout } from 'src/contexts/LayoutContext';
import { useColors } from 'src/hooks/useColors';

interface HeaderProps {
  onOpen: () => void;
  pathname: string;
}

const checkNeedsBgColor = (pathname: string) => {
  return ['/work', '/blog', '/about'].indexOf(pathname) === -1;
};

export const Header: React.FC<HeaderProps> = ({ onOpen, pathname }) => {
  const { title } = useLayout();
  const { bgColor, fontColor } = useColors();
  const needsBgColor = checkNeedsBgColor(pathname);
  return (
    <Flex
      align="center"
      w="100%"
      h="5rem"
      px="2rem"
      position="fixed"
      left="0"
      right="0"
      zIndex="5"
      color={fontColor}
      bgColor={needsBgColor ? bgColor : 'none'}
    >
      <Button
        onClick={onOpen}
        minW={4}
        py={4}
        h="4rem"
        colorScheme={fontColor}
        variant="ghost"
        mr="1rem"
      >
        <svg
          fill="currentColor"
          width="3rem"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Button>
      <Heading color={fontColor}>{title.toLowerCase()}</Heading>
    </Flex>
  );
};

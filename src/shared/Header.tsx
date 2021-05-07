import { Flex, Button, Heading } from '@chakra-ui/react';
import * as React from 'react';
import { useLayout } from 'src/contexts/LayoutContext';
import { useColors } from 'src/hooks/useColors';
import { MenuIcon } from 'src/icons/MenuIcon';

interface HeaderProps {
  onOpen: () => void;
  pathname: string;
}

const checkNeedsBgColor = (pathname: string) => {
  return ['/work', '/blog', '/about'].indexOf(pathname) === -1;
};

export const Header: React.FC<HeaderProps> = ({ onOpen, pathname }) => {
  const { title } = useLayout();
  const { bgColor, fontColor, fontColorScheme } = useColors();
  const needsBgColor = checkNeedsBgColor(pathname);
  return (
    <Flex
      align="center"
      h="5rem"
      px="2rem"
      position="fixed"
      left="0"
      right="0"
      zIndex="5"
      color={fontColor}
      bgColor={needsBgColor ? bgColor : 'transparent'}
    >
      <Button
        onClick={onOpen}
        minW={4}
        py={4}
        colorScheme={fontColorScheme}
        variant="ghost"
        color={fontColor}
        mr="1rem"
      >
        <MenuIcon boxSize="2.5rem" />
      </Button>
      <Heading color={fontColor}>{title.toLowerCase()}</Heading>
    </Flex>
  );
};

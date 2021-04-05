import { Button, Flex, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { useColors } from 'src/hooks/useColors';
import useSiteMetadata from 'src/hooks/useSiteMetadata';

import Footer from './Footer';
import Navbar from './Navbar';
import SEO from './SEO';

const Layout: React.FC = ({ children }) => {
  const { title } = useSiteMetadata();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { bgColor, fontColor } = useColors();

  return (
    <Flex
      w="100%"
      direction="column"
      align="center"
      bgColor={bgColor}
      color={fontColor}
    >
      <SEO title={title} titleTemplate={title} />
      <Navbar isOpen={isOpen} onClose={onClose} />
      <Flex
        align="center"
        w="100%"
        h="5rem"
        px="2rem"
        position="fixed"
        left="0"
        right="0"
        zIndex="5"
      >
        <Button
          onClick={onOpen}
          minW={4}
          py={4}
          h="4rem"
          colorScheme={fontColor}
          variant="ghost"
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
      </Flex>
      <Flex w="100%" direction="column" align="center" minH="100vh">
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Layout;

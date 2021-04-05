import { Flex, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { useColors } from 'src/hooks/useColors';
import useSiteMetadata from 'src/hooks/useSiteMetadata';

import { Footer } from 'src/layouts/Footer';
import { Navbar } from 'src/layouts/Navbar';
import { Header } from 'src/layouts/Header';
import SEO from 'src/layouts/SEO';

export const Layout: React.FC = ({ location: { pathname }, children }) => {
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
      <Header onOpen={onOpen} pathname={pathname} />
      <Flex w="100%" direction="column" align="center" minH="100vh">
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};

import { useDisclosure, Flex, Button } from '@chakra-ui/react';
import React, { useRef, useState, useLayoutEffect } from 'react';
import SEO from './SEO';
import Footer from './Footer';
import Navbar from './Navbar';
import useSiteMetadata from 'src/hooks/useSiteMetadata';

const Layout: React.FC = ({ children }) => {
  const { title } = useSiteMetadata();
  const [showTop, shouldShowTop] = useState(false);
  const pageRef = useRef(null);
  const footerRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useLayoutEffect(() => {
    function updateFooter() {
      const mainHeight =
        pageRef.current.offsetHeight + footerRef.current.offsetHeight;
      if (window.innerHeight < mainHeight) {
        shouldShowTop(true);
      } else {
        shouldShowTop(false);
      }
    }
    window.addEventListener('resize', updateFooter);
    updateFooter();
    return () => window.removeEventListener('resize', updateFooter);
  }, [children]);

  return (
    <Flex w="100%" direction="column" align="center">
      <SEO title={title} titleTemplate={title} />
      <Navbar title={title} isOpen={isOpen} onClose={onClose} />
      <Button
        variant="link"
        onClick={onOpen}
        minW={4}
        p={2}
        ml={-2}
        _hover={{ background: 'black10' }}
      >
        <svg
          fill="currentColor"
          width="1.5rem"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Button>
      <Flex w="100%" direction="column" align="center">
        <div className="pageContainer" id="top" ref={pageRef}>
          {children}
        </div>
        <Footer title={title} showTop={showTop} setRef={footerRef} />
      </Flex>
    </Flex>
  );
};

export default Layout;

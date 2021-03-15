import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import React from 'react';
import { globalStyles, theme } from 'src/theme';

import Layout from './Layout';

const LayoutWrapper: React.FC = ({ children, ...props }) => {
  console.log({ props });
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeScript initialColorMode="dark" />
      <Global styles={globalStyles} />

      <Layout {...props}>{children}</Layout>
    </ChakraProvider>
  );
};

export default LayoutWrapper;

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import React from 'react';
import Layout from 'src/components/Layout';

import { globalStyles, theme } from 'src/theme';

const LayoutWrapper: React.FC = ({ children }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeScript initialColorMode="dark" />
      <Global styles={globalStyles} />

      <Layout>{children}</Layout>
    </ChakraProvider>
  );
};

export default LayoutWrapper;

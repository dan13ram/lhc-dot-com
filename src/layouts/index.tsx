import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import React from 'react';
import { globalStyles, theme } from 'src/theme';

import { Layout } from 'src/layouts/Layout';
import { LayoutContextProvider } from 'src/contexts/LayoutContext';

const LayoutWrapper: React.FC = ({ children, ...props }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeScript initialColorMode="dark" />
      <Global styles={globalStyles} />

      <LayoutContextProvider>
        <Layout {...props}>{children}</Layout>
      </LayoutContextProvider>
    </ChakraProvider>
  );
};

export default LayoutWrapper;

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import React from 'react';
import { globalStyles, theme } from 'src/theme';

import { Layout } from 'src/shared/Layout';
import { LayoutContextProvider } from 'src/contexts/LayoutContext';
import { useSiteMetadata } from 'src/hooks/useSiteMetadata';

export const BrowserRootLayout: React.FC = ({ children }) => {
  const siteMetadata = useSiteMetadata();
  console.log({ siteMetadata });
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeScript initialColorMode="dark" />
      <Global styles={globalStyles} />

      <LayoutContextProvider>{children}</LayoutContextProvider>
    </ChakraProvider>
  );
};

export const BrowserPageLayout: React.FC = ({ children, ...props }) => {
  return <Layout {...props}>{null}</Layout>;
};

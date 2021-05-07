import React from 'react';
import { BrowserPageLayout, BrowserRootLayout } from './src/layouts';

export const wrapPageElement = ({ element, props }) => {
  return <BrowserPageLayout {...props}>{element}</BrowserPageLayout>;
};

export const wrapRootElement = ({ element, props }) => {
  return <BrowserRootLayout {...props}>{element}</BrowserRootLayout>;
};

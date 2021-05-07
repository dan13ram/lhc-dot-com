import { createIcon } from '@chakra-ui/icon';
import * as React from 'react';

export const MenuIcon = createIcon({
  displayName: 'MenuIcon',
  path: (
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" 
        fill="currentColor"
    />
  ),
  viewBox: '0 0 20 20',
});

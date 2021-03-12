import chakraTheme, { Theme } from '@chakra-ui/theme';
import { css } from '@emotion/react';

export const theme: Theme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    pink: {
      50: '#ffe9e9',
      100: '#efc5c6',
      200: '#df9fa2',
      300: '#d17a7d',
      400: '#c45559',
      500: '#aa3b3f',
      600: '#852e30',
      700: '#602022',
      800: '#3b1214',
      900: '#1a0305',
    },
  },
};

export const globalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus via the mouse,
    but it will still show up on keyboard focus.
  */
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    box-shadow: none;
    outline: none;
    border: none;
  }
`;

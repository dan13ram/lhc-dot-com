import chakraTheme, { Theme, ColorHues } from '@chakra-ui/theme';
import { css } from '@emotion/react';

export const theme: Theme & {
  colors: Theme['colors'] & {
    pinkAlpha: ColorHues;
    mudPink: ColorHues;
    mudPinkAlpha: ColorHues;
    purpleAlpha: ColorHues;
  };
} = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    pink: {
      50: '#ffe3eb',
      100: '#ffb3c3',
      200: '#fd819b',
      300: '#fc5174',
      400: '#fc264c',
      500: '#e31433',
      600: '#b10c27',
      700: '#7f051c',
      800: '#4d0010',
      900: '#1e0004',
    },
    pinkAlpha: {
      50: 'rgba(255, 179, 195, 0.04)',
      100: 'rgba(255, 179, 195, 0.06)',
      200: 'rgba(255, 179, 195, 0.08)',
      300: 'rgba(255, 179, 195, 0.16)',
      400: 'rgba(255, 179, 195, 0.24)',
      500: 'rgba(255, 179, 195, 0.36)',
      600: 'rgba(255, 179, 195, 0.48)',
      700: 'rgba(255, 179, 195, 0.64)',
      800: 'rgba(255, 179, 195, 0.80)',
      900: 'rgba(255, 179, 195, 0.92)',
    },
    mudPink: {
      50: '#ffe9e9',
      100: '#eec7c8',
      200: '#dca4a5',
      300: '#cb8083',
      400: '#bb5d60',
      500: '#a24446',
      600: '#7f3436',
      700: '#5c2526',
      800: '#391515',
      900: '#1b0404',
    },
    mudPinkAlpha: {
      50: 'rgba(162, 68, 70, 0.04)',
      100: 'rgba(162, 68, 70, 0.06)',
      200: 'rgba(162, 68, 70, 0.08)',
      300: 'rgba(162, 68, 70, 0.16)',
      400: 'rgba(162, 68, 70, 0.24)',
      500: 'rgba(162, 68, 70, 0.36)',
      600: 'rgba(162, 68, 70, 0.48)',
      700: 'rgba(162, 68, 70, 0.64)',
      800: 'rgba(162, 68, 70, 0.80)',
      900: 'rgba(162, 68, 70, 0.92)',
    },
    purple: {
      50: '#f7edfd',
      100: '#ddcfe5',
      200: '#c4b0cf',
      300: '#ac92bb',
      400: '#9473a6',
      500: '#7a598c',
      600: '#5f456e',
      700: '#453150',
      800: '#2a1d32',
      900: '#120717',
    },
    purpleAlpha: {
      50: 'rgba(122, 89, 140, 0.04)',
      100: 'rgba(122, 89, 140, 0.06)',
      200: 'rgba(122, 89, 140, 0.08)',
      300: 'rgba(122, 89, 140, 0.16)',
      400: 'rgba(122, 89, 140, 0.24)',
      500: 'rgba(122, 89, 140, 0.36)',
      600: 'rgba(122, 89, 140, 0.48)',
      700: 'rgba(122, 89, 140, 0.64)',
      800: 'rgba(122, 89, 140, 0.80)',
      900: 'rgba(122, 89, 140, 0.92)',
    },
    gray: {
      50: '#fbeff2',
      100: '#d9d9d5',
      200: '#c0c0bf',
      300: '#a6a6a6',
      400: '#8d8d8d',
      500: '#747474',
      600: '#5a5a5a',
      700: '#40403f',
      800: '#272724',
      900: '#150a0d',
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

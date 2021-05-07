import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { useColors } from 'src/hooks/useColors';

export const ThemeToggle = () => {
  const { toggleColorMode } = useColorMode();
  const ToggleIcon = useColorModeValue(SunIcon, MoonIcon);
  const { fontColor, fontColorScheme } = useColors();
  return (
    <IconButton
      borderRadius="0"
      icon={<ToggleIcon />}
      variant="ghost"
      aria-label="Toggle Theme"
      onClick={toggleColorMode}
      color={fontColor}
      _hover={{
        bgColor: 'blackAlpha.200',
      }}
    />
  );
};

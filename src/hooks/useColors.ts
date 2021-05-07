import { useColorModeValue } from '@chakra-ui/react';

export const useColors = (): {
  bgColor: string;
  bgColorScheme: string;
  fontColor: string;
  fontColorScheme: string;
} => {
  const bgColor = useColorModeValue('mudPink.500', 'pink.100');
  const bgColorScheme = useColorModeValue('mudPink', 'pink');
  const fontColor = useColorModeValue('pink.100', 'mudPink.500');
  const fontColorScheme = useColorModeValue('pink', 'mudPink');
  return { bgColor, bgColorScheme, fontColor, fontColorScheme };
};

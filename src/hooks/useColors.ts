import { useColorModeValue } from '@chakra-ui/react';

export const useColors = (): { bgColor: string; fontColor: string } => {
  const bgColor = useColorModeValue('black', 'white');
  const fontColor = useColorModeValue('white', 'black');

  return { bgColor, fontColor };
};

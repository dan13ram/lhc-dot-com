import React from 'react';
import { Flex, FlexProps } from '@chakra-ui/react';

import { ReactComponent as Hoodie } from '../assets/hoodie.svg';
import { ReactComponent as Cupcake } from '../assets/cupcake.svg';
import { ReactComponent as BrushPencil } from '../assets/brush-pencil.svg';
import { ReactComponent as Moon } from '../assets/moon.svg';
import { ReactComponent as TeaCup } from '../assets/teacup.svg';
import { ReactComponent as TeaPot } from '../assets/teapot.svg';
import { ReactComponent as Strawberry } from '../assets/strawberry.svg';
import { ReactComponent as Lotus } from '../assets/lotus.svg';

type Props = {
  size?: number;
};

const CenteredBox: React.FC<FlexProps> = ({ children, ...props }) => (
  <Flex
    justify="center"
    align="center"
    position="absolute"
    transform="translate(-50%,-50%)"
    left="50%"
    top="50%"
    {...props}
  >
    {children}
  </Flex>
);

export const Loader: React.FC<Props> = ({ size: sizeInRem = 10 }) => {
  const size = `${sizeInRem}rem`;
  const teapotSize = `${sizeInRem * 1.125}rem`;
  const teacupSize = `${sizeInRem * 0.75}rem`;
  const strawberrySize = `${sizeInRem * 0.75}rem`;
  const cupcakeSize = `${sizeInRem * 0.675}rem`;
  const pencilSize = `${sizeInRem * 0.75}rem`;
  const moonSize = `${sizeInRem * 0.75}rem`;
  const lotusSize = `${sizeInRem * 0.75}rem`;

  return (
    <Flex position="relative" h={size} w={size}>
      <CenteredBox>
        <Hoodie width={size} height={size} />
      </CenteredBox>
      <CenteredBox>
        <Cupcake width={cupcakeSize} height={cupcakeSize} />
      </CenteredBox>
      <CenteredBox>
        <BrushPencil width={pencilSize} height={pencilSize} />
      </CenteredBox>
      <CenteredBox>
        <Moon width={moonSize} height={moonSize} />
      </CenteredBox>
      <CenteredBox transform="translate(-55%,-50%)">
        <TeaCup width={teacupSize} height={teacupSize} />
      </CenteredBox>
      <CenteredBox transform="translate(-45%,-50%) rotate(-2deg)">
        <TeaPot width={teapotSize} height={teapotSize} />
      </CenteredBox>
      <CenteredBox transform="translate(-50%,-57.5%)">
        <Strawberry width={strawberrySize} height={strawberrySize} />
      </CenteredBox>
      <CenteredBox>
        <Lotus width={lotusSize} height={lotusSize} />
      </CenteredBox>
    </Flex>
  );
};

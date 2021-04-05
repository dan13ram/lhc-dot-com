import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import { Flex } from '@chakra-ui/react';

const PreviewCompatibleBackgroundImage = ({ image, children, style }) => {
  if (!!image && !!image.childImageSharp) {
    const bgImage = convertToBgImage(getImage(image));

    return (
      <BackgroundImage {...bgImage} style={style}>
        {children}
      </BackgroundImage>
    );
  }

  return (
    <Flex bgImage={`url(${image})`} css={style}>
      {' '}
      {children}{' '}
    </Flex>
  );
};

export default PreviewCompatibleBackgroundImage;

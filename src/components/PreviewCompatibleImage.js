import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { Image } from '@chakra-ui/react';

const PreviewCompatibleImage = ({ image, alt, style }) => {
  if (!!image && !!image.childImageSharp) {
    return (
      <GatsbyImage
        image={image.childImageSharp.gatsbyImageData}
        alt={alt}
        style={style}
      />
    );
  }

  return <Image src={image} alt={alt} width="100%" css={style} />;
};

export default PreviewCompatibleImage;

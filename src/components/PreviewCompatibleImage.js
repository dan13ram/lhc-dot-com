import Img from 'gatsby-image';
import React from 'react';
import { Image } from '@chakra-ui/react';

const PreviewCompatibleImage = ({ imageInfo, ...props }) => {
  const { alt = '', childImageSharp, image } = imageInfo;

  if (!!image && !!image.childImageSharp) {
    return <Img fluid={image.childImageSharp.fluid} alt={alt} {...props} />;
  }

  if (childImageSharp) {
    return <Img fluid={childImageSharp.fluid} alt={alt} {...props} />;
  }

  if (!!image && typeof image === 'string')
    return <Image src={image} alt={alt} width="100%" {...props} />;

  return null;
};

export default PreviewCompatibleImage;

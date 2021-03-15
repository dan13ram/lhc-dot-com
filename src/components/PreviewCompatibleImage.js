import Img from 'gatsby-image';
import React from 'react';

const PreviewCompatibleImage = ({ imageInfo, className }) => {
  const { alt = '', childImageSharp, image } = imageInfo;

  if (!!image && !!image.childImageSharp) {
    return (
      <Img
        className={className}
        fluid={image.childImageSharp.fluid}
        alt={alt}
      />
    );
  }

  if (childImageSharp) {
    return (
      <Img className={className} fluid={childImageSharp.fluid} alt={alt} />
    );
  }

  if (!!image && typeof image === 'string')
    return (
      <img
        className={className}
        src={image}
        alt={alt}
        style={{ width: '100%' }}
      />
    );

  return null;
};

export default PreviewCompatibleImage;

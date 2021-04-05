import BackgroundImage from 'gatsby-background-image';
import React from 'react';

const PreviewCompatibleBackgroundImage = ({ fluid, children, ...props }) => {
  if (fluid) {
    return (
      <BackgroundImage fluid={fluid} {...props}>
        {children}
      </BackgroundImage>
    );
  }
  return <Flex {...props}> {children} </Flex>;
};

export default PreviewCompatibleBackgroundImage;

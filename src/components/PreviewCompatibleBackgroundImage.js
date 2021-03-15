import BackgroundImage from 'gatsby-background-image';
import React from 'react';

const PreviewCompatibleBackgroundImage = ({ fluid, className, children }) => {
  if (fluid) {
    return (
      <BackgroundImage className={className} fluid={fluid}>
        {children}
      </BackgroundImage>
    );
  }
  return <div className={className}> {children} </div>;
};

export default PreviewCompatibleBackgroundImage;

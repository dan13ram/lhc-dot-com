import { Flex } from '@chakra-ui/react';
import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { LogoIcon } from '../icons/LogoIcon';

const Footer = ({ title, showTop, setRef }) => {
  const scrollToTop = () => {
    window.setTimeout(() => {
      document.querySelector('#top').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };
  return (
    <Flex
      ref={setRef}
      position="fixed"
      bottom="0"
      right="0"
      w="100%"
      h="5rem"
      justify="flex-end"
      align="center"
    >
      {showTop && (
        <div className="topContainer">
          <span className="top" onClick={scrollToTop}>
            {'\u25b2'}
          </span>
        </div>
      )}
      <AniLink
        fade
        to="/work"
        className="navLogo"
        title={title}
      >
        <LogoIcon id="logoSvg" color="pink.400" h="4rem" w="4rem" />
      </AniLink>
    </Flex>
  );
};

export default Footer;

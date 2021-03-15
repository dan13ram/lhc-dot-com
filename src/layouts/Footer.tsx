import { Flex } from '@chakra-ui/react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React from 'react';

import { LogoIcon } from '../icons/LogoIcon';

type Props = {
  showTop?: boolean;
};

const Footer: React.FC<Props> = ({ showTop = false }) => {
  const scrollToTop = () => {
    // window.setTimeout(() => {
    //   document.querySelector('#top').scrollIntoView({ behavior: 'smooth' });
    // }, 100);
  };
  return (
    <Flex
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
      <AniLink fade to="/work">
        <LogoIcon id="logoSvg" color="pink.400" h="4rem" w="4rem" />
      </AniLink>
    </Flex>
  );
};

export default Footer;

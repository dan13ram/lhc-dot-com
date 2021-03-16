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
      bottom="0.5rem"
      right="0.5rem"
      w="100%"
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
        <LogoIcon color="pink.400" h="5rem" w="5rem" />
      </AniLink>
    </Flex>
  );
};

export default Footer;

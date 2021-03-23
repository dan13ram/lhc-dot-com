import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'gatsby';

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
      <Link to="/work">
        <LogoIcon color="pink.400" h="5rem" w="5rem" />
      </Link>
    </Flex>
  );
};

export default Footer;

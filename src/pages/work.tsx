import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import React, { useEffect, useState } from 'react';
import SEO from 'src/layouts/SEO';

import { Loader } from '../components/Loader';
import WorkRoll from '../components/WorkRoll';

const WorkPage: React.FC = () => {
  const [full, toggleFull] = useState(false);
  useEffect(() => {
    const currentFull = localStorage.getItem('full');
    if (currentFull) {
      toggleFull(currentFull === 'true');
      localStorage.setItem('full', currentFull);
    }
  }, []);
  return (
    <div className={full ? 'workPage page full' : 'workPage page'}>
      <SEO title="Work" />
      <Flex
        w="100%"
        bg="rgba(145, 125, 126)"
        p="10rem"
        justify="center"
        align="center"
      >
        <Loader size={5} />
      </Flex>
      <section className="content">
        <div className="title">my work</div>
        <div
          className="fullToggle"
          onClick={() => {
            toggleFull(full => !full);
            localStorage.setItem('full', full ? 'false' : 'true');
          }}
        >
          {full ? <MinusIcon /> : <AddIcon />}
        </div>
        <WorkRoll full={full} />
      </section>
    </div>
  );
};

export default WorkPage;

export const workPageQuery = graphql`
  query WorkQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

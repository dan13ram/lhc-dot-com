import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import WorkRoll from '../components/WorkRoll';
import SEO from '../components/SEO';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';
import { Loader } from '../components/Loader';

const WorkPage: React.FC = () => {
  console.log("test");
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
      <SEO title={`Work`} />
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

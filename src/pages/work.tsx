import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Button, Heading, Flex } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import React, { useState } from 'react';
import { useColors } from 'src/hooks/useColors';
import SEO from 'src/layouts/SEO';

// import { Loader } from '../components/Loader';
import WorkRoll from '../components/WorkRoll';

const WorkPage: React.FC = () => {
  const currentFull = localStorage.getItem('full') === "true";
  const [full, setFull] = useState(currentFull);
  console.log({ currentFull, full });

  const { fontColor } = useColors();

  return (
    <Flex
      direction="column"
      align="center"
      w="100%"
      position="relative"
      h="100%"
    >
      <SEO title="Work" />
      {/*
      <Flex
        w="100%"
        bg="rgba(145, 125, 126)"
        p="10rem"
        justify="center"
        align="center"
      >
        <Loader size={5} />
      </Flex>
        */}
      <Flex
        w="calc(100% - 8rem)"
        justify="space-between"
        align="center"
        position={full ? 'fixed' : 'relative'}
        zIndex="5"
        top="0"
        right="0"
        ml="8rem"
        pr="2rem"
        h="5rem"
      >
        <Heading>my work</Heading>
        <Button
          onClick={() => {
            setFull(!full);
            localStorage.setItem('full', (!full).toString());
          }}
          colorScheme={fontColor}
        >
          {full ? <MinusIcon /> : <AddIcon />}
        </Button>
      </Flex>
      <WorkRoll full={full} />
    </Flex>
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

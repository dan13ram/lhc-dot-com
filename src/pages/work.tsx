import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Button, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useColors } from 'src/hooks/useColors';
import SEO from 'src/shared/SEO';

// import { Loader } from '../components/Loader';
import WorkRoll from '../components/WorkRoll';
import { useTitle } from 'src/contexts/LayoutContext';

const WorkPage: React.FC = () => {
  const currentFull = localStorage.getItem('full') === 'true';
  const [full, setFull] = useState(currentFull);

  const { fontColor, fontColorScheme } = useColors();
  useTitle('Work');

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
        justify="center"
        align="center"
        position="fixed"
        zIndex="5"
        top="0"
        right="0"
        pr="2rem"
        h="5rem"
      >
        <Button
          onClick={() => {
            setFull(!full);
            localStorage.setItem('full', (!full).toString());
          }}
          colorScheme={fontColorScheme}
          variant="ghost"
          color={fontColor}
        >
          {full ? <MinusIcon /> : <AddIcon />}
        </Button>
      </Flex>
      <WorkRoll full={full} />
    </Flex>
  );
};

export default WorkPage;

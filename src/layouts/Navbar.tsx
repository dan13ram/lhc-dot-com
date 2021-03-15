import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React from 'react';
import useSiteMetadata from 'src/hooks/useSiteMetadata';
import { InstagramIcon } from 'src/icons/InstagramIcon';
import { LinkedInIcon } from 'src/icons/LinkedInIcon';
import { TwitterIcon } from 'src/icons/TwitterIcon';
import { VimeoIcon } from 'src/icons/VimeoIcon';

import { ThemeToggle } from './ThemeToggle';
import { WorkList } from './WorkList';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Navbar: React.FC<Props> = ({ isOpen, onClose }) => {
  const { social } = useSiteMetadata();

  const bgColor = useColorModeValue('black', 'white');
  const fontColor = useColorModeValue('white', 'black');

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent fontFamily="body" bgColor={bgColor} color={fontColor}>
          <DrawerHeader fontWeight={600} fontSize="2xl" mb={4}>
            littlehoodedcreature
          </DrawerHeader>
          <Flex direction="column" position="relative" w="100%" h="100%" p={2}>
            <DrawerBody>
              <VStack align="stretch">
                <Accordion allowToggle>
                  <AccordionItem>
                    <AccordionButton>
                      <Flex flex={1}>
                        <AniLink fade to="/work">
                          <Text>Work</Text>
                        </AniLink>
                      </Flex>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                      <WorkList />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionButton>
                      <AniLink fade to="/blog">
                        <Text>Blog</Text>
                      </AniLink>
                    </AccordionButton>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionButton>
                      <AniLink fade to="/about">
                        <Text>About</Text>
                      </AniLink>
                    </AccordionButton>
                  </AccordionItem>
                </Accordion>

                <ThemeToggle />
              </VStack>
            </DrawerBody>
            <DrawerFooter justifyContent="flex-start">
              <Link href={`https://vimeo.com/${social.vimeo}`} isExternal>
                <VimeoIcon boxSize="2rem" />
              </Link>
              <Link
                href={`https://instagram.com/${social.instagram}`}
                isExternal
              >
                <InstagramIcon boxSize="2rem" />
              </Link>
              <Link href={`https://twitter.com/${social.twitter}`} isExternal>
                <TwitterIcon boxSize="2rem" />
              </Link>
              <Link
                href={`https://linkedin.com/in/${social.linkedIn}`}
                isExternal
              >
                <LinkedInIcon boxSize="2rem" />
              </Link>
            </DrawerFooter>
          </Flex>
          <DrawerCloseButton />
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Navbar;

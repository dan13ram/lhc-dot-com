import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  VStack,
  Link,
  Text,
  AccordionIcon,
  Accordion,
  AccordionPanel,
  AccordionItem,
  AccordionButton,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import useSiteMetadata from 'src/hooks/useSiteMetadata';
import WorkList from './WorkList';
import { ThemeToggle } from './ThemeToggle';

import { InstagramIcon } from 'src/icons/InstagramIcon';
import { TwitterIcon } from 'src/icons/TwitterIcon';
import { VimeoIcon } from 'src/icons/VimeoIcon';
import { LinkedInIcon } from 'src/icons/LinkedInIcon';

const Navbar: React.FC = ({ isOpen, onClose }) => {
  const { social } = useSiteMetadata();
  const isActiveNavItem = ({ isCurrent }) => {
    return isCurrent
      ? { className: 'navItem active' }
      : { className: 'navItem' };
  };

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
                        <AniLink fade getProps={isActiveNavItem} to={`/work`}>
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
                      <AniLink fade getProps={isActiveNavItem} to={`/blog`}>
                        <Text>Blog</Text>
                      </AniLink>
                    </AccordionButton>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionButton>
                      <AniLink fade getProps={isActiveNavItem} to={`/about`}>
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

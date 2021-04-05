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
  VStack,
} from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import useSiteMetadata from 'src/hooks/useSiteMetadata';
import { InstagramIcon } from 'src/icons/InstagramIcon';
import { LinkedInIcon } from 'src/icons/LinkedInIcon';
import { TwitterIcon } from 'src/icons/TwitterIcon';
import { VimeoIcon } from 'src/icons/VimeoIcon';

import { ThemeToggle } from 'src/layouts/ThemeToggle';
import { WorkList } from 'src/layouts/WorkList';
import { useColors } from 'src/hooks/useColors';

type NavItemProps = {
  label: string;
  href: string;
  withIcon?: boolean;
};

const NavItem: React.FC<NavItemProps> = ({ label, href, withIcon = false }) => (
  <AccordionButton cursor="initial">
    <Flex flex={1}>
      <GatsbyLink to={href}>
        <Text cursor="pointer">{label}</Text>
      </GatsbyLink>
    </Flex>
    {withIcon && <AccordionIcon />}
  </AccordionButton>
);

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Navbar: React.FC<Props> = ({ isOpen, onClose }) => {
  const { social } = useSiteMetadata();
  const { bgColor, fontColor } = useColors();

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent fontFamily="body" bgColor={bgColor} color={fontColor}>
          <GatsbyLink to={'/'}>
            <DrawerHeader fontWeight={600} fontSize="2xl" mb={4}>
              littlehoodedcreature
            </DrawerHeader>
          </GatsbyLink>
          <Flex direction="column" position="relative" w="100%" h="100%" p={2}>
            <DrawerBody>
              <VStack align="stretch">
                <Accordion allowToggle>
                  <AccordionItem>
                    <NavItem label="Work" href="/work" withIcon />
                    <AccordionPanel>
                      <WorkList />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <NavItem label="Blog" href="/blog" />
                  </AccordionItem>
                  <AccordionItem>
                    <NavItem label="About" href="/about" />
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

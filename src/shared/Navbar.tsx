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
  HStack,
  Link,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import { useSiteMetadata } from 'src/hooks/useSiteMetadata';
import { InstagramIcon } from 'src/icons/InstagramIcon';
import { LinkedInIcon } from 'src/icons/LinkedInIcon';
import { TwitterIcon } from 'src/icons/TwitterIcon';
import { VimeoIcon } from 'src/icons/VimeoIcon';

import { ThemeToggle } from 'src/shared/ThemeToggle';
import { WorkList } from 'src/shared/WorkList';
import { useColors } from 'src/hooks/useColors';

type NavItemProps = {
  label: string;
  href: string;
  colorScheme: string;
  withIcon?: boolean;
};

const NavItem: React.FC<NavItemProps> = ({
  label,
  href,
  colorScheme,
  withIcon = false,
}) => (
  <AccordionButton cursor="initial" colorScheme={colorScheme}>
    <Flex flex={1}>
      <GatsbyLink to={href}>
        <Text cursor="pointer">{label.toLowerCase()}</Text>
      </GatsbyLink>
    </Flex>
    {withIcon && <AccordionIcon />}
  </AccordionButton>
);

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const Navbar: React.FC<Props> = ({ isOpen, onClose }) => {
  const { social } = useSiteMetadata();
  const { bgColor, fontColor, fontColorScheme } = useColors();
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent
          fontFamily="body"
          bgColor={bgColor}
          color={fontColor}
          {...(isSmallScreen ? { maxW: '100%' } : {})}
        >
          <GatsbyLink to={'/'}>
            <DrawerHeader fontWeight={600} fontSize="2xl" mb={4}>
              littlehoodedcreature
            </DrawerHeader>
          </GatsbyLink>
          <Flex direction="column" position="relative" w="100%" h="100%" p={2}>
            <DrawerBody>
              <VStack align="stretch" spacing="0">
                <Accordion allowToggle>
                  <AccordionItem>
                    <NavItem
                      label="Work"
                      href="/work"
                      colorScheme={fontColorScheme}
                      withIcon
                    />
                    <AccordionPanel>
                      <WorkList />
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <NavItem
                      label="Blog"
                      href="/blog"
                      colorScheme={fontColorScheme}
                    />
                  </AccordionItem>
                  <AccordionItem>
                    <NavItem
                      label="About"
                      href="/about"
                      colorScheme={fontColorScheme}
                    />
                  </AccordionItem>
                </Accordion>

                <ThemeToggle />
              </VStack>
            </DrawerBody>
            <DrawerFooter justifyContent="center" alignItems="center">
              <HStack w="100%" justify="center" spacing="1rem">
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
              </HStack>
            </DrawerFooter>
          </Flex>
          <DrawerCloseButton variant="ghost" />
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

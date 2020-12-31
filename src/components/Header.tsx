import * as React from 'react'
import { Link } from 'gatsby'
import { Flex, Text } from '@chakra-ui/react'

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <Flex h="5rem" px="12rem" bg="pink.100" color="pink.500">
    <Flex align="center" h="100%" w="100%" justify="space-between">
      <Link to="/">{title}</Link>
      <Text fontWeight="bold"> Test </Text>
    </Flex>
  </Flex>
)

export default Header

import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Image,
  Link,
  Spacer
} from '@chakra-ui/react';
import React from 'react';
import logo from '../../assets/images/logo.svg';

export default function Navbar() {
  return (
    <Flex bg='blue.300'>
      <Box pt='6' pl='4'>
        <Image src={logo} alt='Logo' />
      </Box>
      <Spacer />
      <Flex>
        <Flex
          w='400px'
          color='brand.black'
          justify='space-between'
          align='center'
        >
          <Link>Home</Link>
          <Link>Destination</Link>
          <Link>About</Link>
          <Link>Blog</Link>
        </Flex>
      </Flex>
      <Spacer />
      <ButtonGroup p='4' gap='2'>
        <Button color='brand.accent' variant='link'>
          Login
        </Button>
        <Button color='brand.black' colorScheme='white' variant='outline'>
          Register
        </Button>
      </ButtonGroup>
    </Flex>
  );
}

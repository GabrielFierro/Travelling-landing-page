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
    <Flex bg='bg.transparent' pos='fixed' zIndex={2} w='100%'>
      <Box pt='6' pl='4'>
        <Image src={logo} alt='Logo' />
      </Box>
      <Spacer />
      <Flex>
        <Flex
          w='400px'
          justify='space-around'
          align='center'
          color='brand.white'
          textStyle='navbar'
        >
          <Link href='#'>Home</Link>
          <Link href='#'>Destination</Link>
          <Link href='#'>About</Link>
          <Link href='#'>Blog</Link>
        </Flex>
      </Flex>
      <Spacer />
      <ButtonGroup p='4' gap='2'>
        <Button color='brand.white' variant='link'>
          Login
        </Button>
        <Button
          color='brand.black'
          colorScheme='gray'
          borderRadius='2xl'
          variant='solid'
          px='6'
        >
          Register
        </Button>
      </ButtonGroup>
    </Flex>
  );
}

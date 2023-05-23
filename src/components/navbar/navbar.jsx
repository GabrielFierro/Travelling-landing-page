import { Box, Button, ButtonGroup, Flex, Link, Spacer } from '@chakra-ui/react';
import React from 'react';

export default function navbar() {
  return (
    <Flex>
      <Box p='4'>Logo</Box>
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

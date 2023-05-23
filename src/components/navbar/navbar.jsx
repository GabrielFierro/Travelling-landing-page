import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Spacer,
  Text
} from '@chakra-ui/react';
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
          <Text>Home</Text>
          <Text>Destination</Text>
          <Text>About</Text>
          <Text>Blog</Text>
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

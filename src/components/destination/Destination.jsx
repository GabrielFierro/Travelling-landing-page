import React from 'react';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';

export default function Destination() {
  return (
    <Box maxW='100%' h='100vh' p={4}>
      <Flex h='150px' direction='column' align='center' justify='center'>
        <Text textStyle='h3' color='brand.accent' my='8'>
          EXPLORE YOUR DREAM PLACE
        </Text>
        <Heading textStyle='h1' color='brand.black'>
          Find Your Dream Destination
        </Heading>
      </Flex>
      <Box>
        <Flex h='100px' mt='12' direction='row' justify='space-evenly'>
          <Button bg='gray.200'>All</Button>
          <Button bg='gray.200'>Recommend</Button>
          <Button bg='gray.200'>Beach</Button>
          <Button bg='gray.200'>Nature</Button>
          <Button bg='gray.200'>Mountain</Button>
        </Flex>
      </Box>
    </Box>
  );
}

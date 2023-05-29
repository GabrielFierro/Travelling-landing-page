import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

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
    </Box>
  );
}

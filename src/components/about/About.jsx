import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';

export default function About() {
  return (
    <Box maxW='100%' h='100vh'>
      <Box className='overlay overlay_2'>
        <Flex align='center' justify='center'>
          <Heading
            className='about_us'
            color='brand.white'
            as='h1'
            size='2xl'
            mt='8'
          >
            ABOUT <span>US</span>
          </Heading>
        </Flex>
      </Box>
    </Box>
  );
}

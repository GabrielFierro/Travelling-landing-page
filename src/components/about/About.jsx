import React from 'react';
import { Box, Card, Flex, Heading, Image } from '@chakra-ui/react';
import Description from './Description';
import Mountains from '../../assets/images/mountains.webp';

export default function About() {
  return (
    <Box maxW='100%' h='auto'>
      <Flex align='center' justify='center'>
        <Heading color='brand.black' as='h2' size='2xl' my='9'>
          ABOUT <span>US</span>
        </Heading>
      </Flex>
      <Box width='100%' h={{ base: '300px', xs: '430px' }}>
        <Flex px={{ base: 6, xl: 1 }} direction={{ base: 'column', md: 'row' }}>
          <Card h='427px' maxW='600px' m={{ base: 0, md: 6 }}>
            <Image
              h='full'
              w='100%'
              rounded='md'
              objectFit='cover'
              src={Mountains}
              alt='Mountains'
            ></Image>
          </Card>
          <Description />
        </Flex>
      </Box>
    </Box>
  );
}

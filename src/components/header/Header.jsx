import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import video from '../../assets/videos/beach_video.mp4';

export default function Header() {
  return (
    <Box w='100%' color='black' h='100vh' overflow='hidden'>
      <video autoPlay muted loop id='video'>
        <source src={video} type='video/mp4' />
      </video>
      <Box
        pos='absolute'
        top='100'
        left={{ base: 70, md: 400 }}
        maxW={{ base: '300px', md: '500px' }}>
        <Text color='brand.black' textStyle='h1' textAlign='center' id='header'>
          TRAVEL AROUND THE WORLD
        </Text>
      </Box>
    </Box>
  );
}

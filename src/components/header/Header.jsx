import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Navbar from '../navbar/Navbar';
import video from '../../assets/videos/beach_video.mp4';

export default function Header() {
  return (
    <Box w='100%' color='black' h='100vh' overflow='hidden'>
      <Navbar />
      <video autoPlay muted loop id='video'>
        <source src={video} type='video/mp4' />
      </video>
      <Box pos='absolute' top='100' left='100' w='500px'>
        <Text color='brand.white' textStyle='h1'>
          TRAVEL AROUND THE WORLD
        </Text>
      </Box>
    </Box>
  );
}

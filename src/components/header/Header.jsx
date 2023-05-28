import React from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from '../navbar/Navbar';
import video from '../../assets/videos/beach_video.mp4';

export default function Header() {
  return (
    <Box w='100%' color='black' h='100vh' overflow='hidden'>
      <Navbar />
      <video autoPlay muted loop id='video'>
        <source src={video} type='video/mp4' />
      </video>
    </Box>
  );
}
import React from 'react';
import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
// Import images
import FloridaImage from '../../assets/images/florida_miami.webp';
import Alaska from '../../assets/images/alaska.webp';
import SidneyAustralia from '../../assets/images/sydney_australia.webp';
// Import components
import Place from '../card/Place.jsx';

export default function Destination() {
  return (
    <Box maxW='100%' h='100vh'>
      <Box className='overlay overlay_1'>
        <Flex direction='column'>
          <Flex h='150px' direction='column' align='center' justify='center'>
            <Heading textStyle='h1' color='brand.white'>
              Find Your Dream Destination
            </Heading>
            <Text textStyle='h3' color='brand.white' bg='brand.accent'>
              Top Destinations
            </Text>
          </Flex>
          <Flex h='auto' direction='column' mt='2'>
            <SimpleGrid columns={3} spacingX='40px' spacingY='20px'>
              <Place
                src={FloridaImage}
                alt='Florida, USA'
                description='Whether you are looking to relax on the beach, explore our flora and fauna.'
              />
              <Place
                src={Alaska}
                alt='Alaska, Canada'
                description='Whether you are looking to relax on the hotels, explore the best glaciars.'
              />
              <Place
                src={SidneyAustralia}
                alt='Sidney, Australia'
                description='Whether you are looking to relax on the hotels, explore coastal walks.'
              />
            </SimpleGrid>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

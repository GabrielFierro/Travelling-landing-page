import React from 'react';
import {
  Box,
  Card,
  Flex,
  Heading,
  Image,
  Spacer,
  Text
} from '@chakra-ui/react';
import Mountains from '../../assets/images/mountains.webp';

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
        <Box width='100%' h='430px' mt='12'>
          <Flex px='12' mt='8' justify='space-evenly'>
            <Card maxH={{ base: '100%', sm: '100px' }} maxW='md'>
              <Image rounded='md' src={Mountains} alt='Mountains'></Image>
            </Card>
            <Spacer />
            <Box maxW='xl' px='4'>
              <Text textStyle='h2' color='brand.white'>
                We provide all necessary details for tourists who are interested
                in visiting beautiful destinations.
              </Text>
              <Flex justify='space-around' mt='9'>
                <Box>
                  <Text textStyle='h3' color='brand.accent'>
                    12K
                  </Text>
                </Box>
                <Box>
                  <Text textStyle='h3' color='brand.accent'>
                    16+
                  </Text>
                </Box>
                <Box>
                  <Text textStyle='h3' color='brand.accent'>
                    10+
                  </Text>
                </Box>
              </Flex>
              <Flex justify='space-around' mt='3'>
                <Box>
                  <Text textStyle='navbar' color='brand.white'>
                    Success Journey
                  </Text>
                </Box>
                <Box>
                  <Text textStyle='navbar' color='brand.white'>
                    Awards Winning
                  </Text>
                </Box>
                <Box>
                  <Text textStyle='navbar' color='brand.white'>
                    Years of Experience
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

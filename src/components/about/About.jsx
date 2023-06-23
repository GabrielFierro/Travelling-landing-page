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
    <Box maxW='100%' h='auto'>
      <Flex align='center' justify='center'>
        <Heading color='brand.black' as='h1' size='2xl' my='9'>
          ABOUT <span>US</span>
        </Heading>
      </Flex>
      <Box width='100%' h={{ base: '300px', xs: '430px' }} py='8'>
        <Flex px='16' mt='8'>
          <Card maxH={{ base: '100%', sm: '100px' }} maxW='md'>
            <Image rounded='md' src={Mountains} alt='Mountains'></Image>
          </Card>
          <Spacer />
          <Box maxW='xl' px='4'>
            <Text textStyle='h2' color='brand.black' align='center'>
              We provide all necessary details for tourists who are interested
              in visiting beautiful destinations.
            </Text>
            <Flex justify='space-around' mt='12'>
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
              <Box w='120px' h='50px' align='center'>
                <Text textStyle='navbar' color='brand.black'>
                  Success Journey
                </Text>
              </Box>
              <Box w='120px' h='50px' align='center'>
                <Text textStyle='navbar' color='brand.black'>
                  Awards Winning
                </Text>
              </Box>
              <Box w='120px' h='50px' align='center'>
                <Text textStyle='navbar' color='brand.black'>
                  Years of Experience
                </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

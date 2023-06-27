import React from 'react';
import { Box, Card, Flex, Heading, Image, Text } from '@chakra-ui/react';
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
          <Card
            h='auto'
            w='auto'
            mb={{ base: 0, md: 6 }}
            mx={{ base: 0, md: 5 }}
          >
            <Image
              h='427px'
              w='100%'
              rounded='md'
              objectFit='cover'
              src={Mountains}
              alt='Mountains'
            ></Image>
          </Card>
          <Flex
            direction='column'
            h='427px'
            w={{ base: '100%', md: '550px' }}
            justify='center'
            px={0}
          >
            <Text
              textStyle='h2'
              fontSize={{ base: '24px', md: '34px' }}
              color='brand.black'
              justify='space-between'
              align='center'
              w='100%'
              px={8}
            >
              We provide all necessary details for tourists who are interested
              in visiting beautiful destinations.
            </Text>
            <Flex
              justify='space-around'
              align='center'
              mt='12'
              w='auto'
              h='auto'
              px={4}
            >
              <Text textStyle='h3' color='brand.accent'>
                12K
              </Text>
              <Text textStyle='h3' color='brand.accent'>
                16+
              </Text>
              <Text textStyle='h3' color='brand.accent'>
                10+
              </Text>
            </Flex>
            <Flex justify='space-between' mt='3' w='100%' h='auto'>
              <Text textStyle='navbar' color='brand.black'>
                Success Journey
              </Text>
              <Text textStyle='navbar' color='brand.black'>
                Awards Winning
              </Text>
              <Text textStyle='navbar' color='brand.black'>
                Years of Experience
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

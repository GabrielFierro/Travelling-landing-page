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
            w='600px'
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
            w={{ base: '100%', md: '700px' }}
            px={16}
            mt={12}
          >
            <Text
              textStyle='h2'
              fontSize={{ base: '24px', md: '34px' }}
              color='brand.black'
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
              mt={16}
              w='auto'
              h='auto'
              px={1}
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
            <Flex
              justify='space-around'
              mt='3'
              w='100%'
              h='auto'
              textAlign='center'
            >
              <Text textStyle='navbar' color='brand.black' w='100px'>
                Success Journey
              </Text>
              <Text textStyle='navbar' color='brand.black' w='100px'>
                Awards Winning
              </Text>
              <Text textStyle='navbar' color='brand.black' w='100px'>
                Years of Experience
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

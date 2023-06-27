import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

export default function Description() {
  return (
    <Flex
      direction='column'
      h={{ base: '300px', md: '427px' }}
      w={{ base: '100%', md: '700px' }}
      px={{ base: 1, md: 16 }}
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
        We provide all necessary details for tourists who are interested in
        visiting beautiful destinations.
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
      <Flex justify='space-around' mt='3' w='100%' h='auto' textAlign='center'>
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
  );
}

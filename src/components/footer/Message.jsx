import React from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';

export default function Message() {
  return (
    <Box
      id='blog'
      maxW='100%'
      align='center'
      h='auto'
      mb='24'
      py={8}
      px={{ base: '4', md: '12' }}
    >
      <Flex
        direction='column'
        align='center'
        bg='brand.accent'
        maxW='800px'
        h='100%'
        borderRadius='xl'
        p='12'
      >
        <Text textStyle='h2' color='brand.white'>
          Let&apos;s Don&apos;t Miss The 50% Discount & Explore The Beautiful Of
          The World
        </Text>
        <Button
          mt='12'
          bg='brand.white'
          size='lg'
          variant='solid'
          rounded='2xl'
          _hover={{
            background: 'brand.white'
          }}
        >
          <Text textStyle='button' color='brand.accent'>
            EXPLORE MORE
          </Text>
        </Button>
      </Flex>
    </Box>
  );
}

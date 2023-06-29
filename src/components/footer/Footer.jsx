import React from 'react';
import { Box, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react';
import Message from './Message';
import logo from '../../assets/images/footer-logo.svg';

export default function Footer() {
  return (
    <Box maxW='100%' h='auto' mt='12'>
      <Message />
      <Box maxW='100%' h='auto' p={4} mb={16}>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
          <Box>
            <Image w='124px' h='31px' src={logo} alt='Logo' cursor='pointer' />
          </Box>
          <Box height='auto'>
            <Flex direction='column' h='100px' justify='space-between'>
              <Text textStyle='footer' cursor='pointer'>
                About
              </Text>
              <Text color='brand.footer' cursor='pointer'>
                About us
              </Text>
              <Text color='brand.footer' cursor='pointer'>
                News & articles
              </Text>
            </Flex>
          </Box>
          <Box height='80px'>
            <Flex direction='column' h='100px' justify='space-between'>
              <Text textStyle='footer' cursor='pointer'>
                Company
              </Text>
              <Text color='brand.footer' cursor='pointer'>
                Blogs & Media
              </Text>
              <Text color='brand.footer' cursor='pointer'>
                FAQ&apos;s
              </Text>
            </Flex>
          </Box>
          <Box height='80px'>
            <Flex direction='column' h='100px' justify='space-between'>
              <Text textStyle='footer' cursor='pointer'>
                Further Information
              </Text>
              <Text color='brand.footer' cursor='pointer'>
                Terms & Condition
              </Text>
              <Text color='brand.footer' cursor='pointer'>
                Privacy Policy
              </Text>
            </Flex>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

import { Box, Button, ButtonGroup, Flex, Image, Link } from '@chakra-ui/react';
import React, { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import BurguerButton from './BurguerButton';

export default function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <Flex bg='transparent' pos='absolute' zIndex={2} w='100%'>
      <div className={`links ${clicked ? 'active' : ''}`}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify={['space-between', 'center']}
          w='100%'
          h='100%'
        >
          <Box
            maxW='200px'
            pt='6'
            pl='4'
            h={{ base: '100px', md: '100%' }}
            pos={{ base: 'absolute', md: 'relative' }}
            top='10%'
            left={{ base: '30%', md: '0px' }}
          >
            <Image maxW='200px' src={logo} alt='Logo' cursor='pointer' />
          </Box>
          <Flex
            w='100%'
            h='100%'
            justify='center'
            align={{ base: 'center', md: 'flex-start' }}
          >
            <Flex
              h={{ base: '250px', md: '80px' }}
              w='400px'
              direction={{ base: 'column', md: 'row' }}
              justify={{ base: 'space-evenly', md: 'space-between' }}
              align='center'
              color='brand.white'
              textStyle='navbar'
            >
              <Link href='#'>Home</Link>
              <Link href='#'>Destination</Link>
              <Link href='#'>About</Link>
              <Link href='#'>Blog</Link>
            </Flex>
          </Flex>
          <ButtonGroup p='4' gap='2'>
            <Button
              w={{ base: '200px', md: '100px' }}
              h='45px'
              background='RGBA(0, 0, 0, 0.1)'
              color='brand.white'
              borderRadius='md'
              variant='solid'
              px='4'
              _hover={{
                background: 'brand.white',
                color: 'brand.black'
              }}
            >
              Login
            </Button>
            <Button
              w={{ base: '200px', md: '100px' }}
              h='45px'
              color='brand.black'
              colorScheme='gray'
              borderRadius='md'
              variant='solid'
              px='6'
            >
              Register
            </Button>
          </ButtonGroup>
        </Flex>
      </div>
      <BurguerButton clicked={clicked} handleClick={handleClick} />
    </Flex>
  );
}

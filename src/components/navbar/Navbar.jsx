import { Box, Button, Flex, Image, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/images/logo.svg';
import BurguerButton from './BurguerButton';

export default function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const closeMenu = () => {
    setClicked(false);
  };

  return (
    <Flex bg='rgba(0,0,0,0.7)' pos='fixed' zIndex={2} w='100%'>
      <div className={clicked ? 'links active' : 'links'}>
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
            h={{ base: '80px', md: '100%' }}
            pos={{ base: 'absolute', md: 'relative' }}
            top={{ base: '10%', md: '0px' }}
            left={{ base: '35%', md: '0px' }}
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
              <Link
                style={{ cursor: 'pointer' }}
                onClick={closeMenu}
                to='header'
                smooth={true}
                offset={-200}
                duration={1000}
              >
                Home
              </Link>
              <Link
                style={{ cursor: 'pointer' }}
                onClick={closeMenu}
                to='destination'
                smooth={true}
                offset={-200}
                duration={1000}
              >
                Destination
              </Link>
              <Link
                style={{ cursor: 'pointer' }}
                onClick={closeMenu}
                to='about'
                smooth={true}
                offset={-50}
                duration={1000}
              >
                About
              </Link>
              <Link
                style={{ cursor: 'pointer' }}
                onClick={closeMenu}
                to='blog'
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Blog
              </Link>
            </Flex>
          </Flex>
          <Stack
            pb='4'
            gap='4'
            display='flex'
            direction='row'
            mt={4}
            mx='4'
            justify='center'
          >
            <Button
              w='100px'
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
              w='100px'
              h='45px'
              color='brand.black'
              colorScheme='gray'
              borderRadius='md'
              variant='solid'
              px='6'
            >
              Register
            </Button>
          </Stack>
        </Flex>
      </div>
      <BurguerButton clicked={clicked} handleClick={handleClick} />
    </Flex>
  );
}

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
          direction={['column', 'row']}
          justify={['space-between', 'center']}
          w='100%'
          h={['80px', '100%']}
        >
          <Box maxW='200px' pt='6' pl='4' h='100%'>
            <Image w='200px' src={logo} alt='Logo' cursor='pointer' />
          </Box>
          <Flex
            w='100%'
            justify='center'
            align={['center', 'flex-start']}
            className='a'
          >
            <Flex
              h={['550px', '80px']}
              w='400px'
              direction={['column', 'column', 'row']}
              justify={['space-evenly', 'space-between', 'space-around']}
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
              w='100%'
              h='50px'
              color='brand.white'
              variant='link'
              px='4'
              _hover={{
                background: 'brand.white',
                color: 'brand.black',
                borderRadius: '2xl',
                variant: 'solid'
              }}
            >
              Login
            </Button>
            <Button
              w='100%'
              h='50px'
              color='brand.black'
              colorScheme='gray'
              borderRadius='2xl'
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

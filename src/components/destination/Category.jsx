import React, { useState } from 'react';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
// import the data about the images
import { data } from './data';
import CardData from './CardData';
import ButtonHandle from './ButtonHandle';
// Import components

export default function Category() {
  const [card, setCard] = useState(data);
  const cats = ['All', ...new Set(data.map((card) => card.category))];

  const filter = (cat) => {
    if (cat === 'All') {
      setCard(data);
      return;
    }
    setCard(data.filter((item) => item.category === cat));
  };

  return (
    <Box maxW='100%' h='auto'>
      <Flex direction='column'>
        <Flex h='400px' direction='column' align='center' justify='center'>
          <Text textStyle='h3' color='brand.accent' my={3}>
            EXPLORE YOUR DREAM PLACE
          </Text>
          <Heading color='brand.black' mb={6}>
            Find Your Dream Destination
          </Heading>
          <Flex
            maxW={{ base: '300px', sm: '600px' }}
            h={{ base: '100%', xs: '100px' }}
            align='center'
            justify='center'
          >
            <ButtonHandle categories={cats} handleClick={filter} />
          </Flex>
        </Flex>
        <CardData allCards={card} />
      </Flex>
      <Flex
        maxW='100%'
        h='150px'
        direction='row'
        align='center'
        justify='center'
      >
        <Button
          bg='brand.accent'
          size='lg'
          variant='solid'
          rounded='2xl'
          _hover={{
            background: 'brand.accent'
          }}
        >
          <Text textStyle='button' color='brand.white'>
            EXPLORE MORE
          </Text>
        </Button>
      </Flex>
    </Box>
  );
}

import { Box, Image, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export default function Card({ allCards }) {
  const cards = allCards.map((card) => {
    return (
      <Box key={card.id}>
        <Image src={card.img} alt={card.title} />
        <Box>
          <Heading>{card.title}</Heading>
          <Text>{card.desc}</Text>
        </Box>
      </Box>
    );
  });
  return <div className='all-cards'>{cards}</div>;
}

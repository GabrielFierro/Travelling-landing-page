import {
  Card,
  CardBody,
  SimpleGrid,
  Stack,
  Image,
  Heading,
  Text
} from '@chakra-ui/react';
import React from 'react';

export default function CardData({ allCards }) {
  const cards = allCards.map((card) => {
    return (
      <Card key={card.id} maxW='xs'>
        <CardBody>
          <Text color='blue.600' fontSize='2xl'>
            $450
          </Text>
          <Image
            maxW='370px'
            h='350px'
            objectFit='cover'
            src={card.img}
            alt={card.title}
            borderRadius='2xl'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{card.title}</Heading>
          </Stack>
        </CardBody>
      </Card>
    );
  });
  return <SimpleGrid columns={3}>{cards}</SimpleGrid>;
}

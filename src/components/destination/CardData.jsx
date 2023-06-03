import {
  Box,
  Card,
  CardBody,
  SimpleGrid,
  Image,
  Heading,
  Flex,
  Text
} from '@chakra-ui/react';
import React from 'react';
import StarIcon from '../../assets/images/star-icon.svg';

export default function CardData({ allCards }) {
  const cards = allCards.map((card) => {
    return (
      <Card key={card.id} maxW='lg'>
        <CardBody>
          <Flex
            bg='blackAlpha.500'
            rounded='full'
            maxW='170px'
            px='4'
            pos='absolute'
            top='35px'
            right='75px'
            zIndex={1}
          >
            <Image src={StarIcon} alt='Logo' />
            <Text color='white' fontSize='2xl' px='2'>
              4.8
            </Text>
          </Flex>
          <Box className='card_overlay' width='370px'></Box>
          <Image
            maxW='370px'
            h='350px'
            objectFit='cover'
            src={card.img}
            alt={card.title}
            borderRadius='2xl'
          />
          <Heading size='md'>{card.title}</Heading>
        </CardBody>
      </Card>
    );
  });
  return <SimpleGrid columns={3}>{cards}</SimpleGrid>;
}

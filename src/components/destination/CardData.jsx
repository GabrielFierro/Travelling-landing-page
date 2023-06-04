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
import LocationIcon from '../../assets/images/location-icon.svg';

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
          <Flex maxW='300px' px='4' pos='absolute' bottom='30px' left='30px'>
            <Image src={LocationIcon} alt='Location icon' />
            <Heading size='md' color='brand.white' px='1'>
              {card.title}
            </Heading>
          </Flex>
        </CardBody>
      </Card>
    );
  });
  return <SimpleGrid columns={3}>{cards}</SimpleGrid>;
}

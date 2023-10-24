import {
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
      <Card key={card.id} maxW='lg' variant='filled' bg='brand.white'>
        <CardBody>
          <Flex
            bg='blackAlpha.700'
            rounded='full'
            maxW='170px'
            px='4'
            pos='absolute'
            top='35px'
            right={{ base: '90px', md: '75px' }}
            zIndex={1}>
            <Image
              src={StarIcon}
              alt='Logo'
              _hover={{
                cursor: 'pointer'
              }}
              pt='5px'
              w='31px'
              h='29px'
            />
            <Text color='white' fontSize='2xl' px='2'>
              {card.rating}
            </Text>
          </Flex>
          <Image
            w='370px'
            h='350px'
            objectFit='cover'
            src={card.img}
            alt={card.title}
            borderRadius='2xl'
            _hover={{
              cursor: 'pointer'
            }}
          />
          <Flex
            maxW='300px'
            px='4'
            pos='absolute'
            bottom='30px'
            left={{ base: '15px', md: '30px' }}>
            <Image src={LocationIcon} alt='Location icon' w='20px' h='20px' />
            <Heading size='md' color='brand.white' px='1'>
              {card.title}
            </Heading>
          </Flex>
        </CardBody>
      </Card>
    );
  });
  return (
    <SimpleGrid columns={{ base: '1', sm: '2', md: '3' }}>{cards}</SimpleGrid>
  );
}

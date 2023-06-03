import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  SimpleGrid,
  Stack,
  Button,
  ButtonGroup,
  Image,
  Heading,
  Text
} from '@chakra-ui/react';
import React from 'react';

// <Card key={card.id}>
//         {/* <Image
//           boxSize='100px'
//           objectFit='cover'
//           src={card.img}
//           alt={card.title}
//         />
//         <Box bg='tomato'>
//           <Heading>{card.title}</Heading>
//           <Text>{card.desc}</Text>
//         </Box> */}

//       </Card>

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

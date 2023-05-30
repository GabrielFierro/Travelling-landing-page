import React from 'react';
import {
  Card,
  CardBody,
  Heading,
  Flex,
  Image,
  Stack,
  Text
} from '@chakra-ui/react';
// Import icons
import LocationIcon from '../../assets/images/location-icon.svg';

export default function Place({ src, alt, description }) {
  return (
    <Card maxW='sm'>
      <CardBody>
        <Image src={src} alt={alt} borderRadius='lg' />
        <Stack mt='4' spacing='3'>
          <Flex direction='row' justify='space-between'>
            <Flex>
              <Image src={LocationIcon} alt={alt} />
              <Heading size='base'>{alt}</Heading>
            </Flex>
            <Text color='brand.accent' fontSize='md'>
              $45.50
            </Text>
          </Flex>
          <Text>{description}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

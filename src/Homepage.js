import {
  VStack,
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Box,
} from '@chakra-ui/react';
import React from 'react';
import extrados from './img/logo.jpg';
import title from './img/title.jpg';
import SocialBtns from './components/SocialBtns.js';

export default function Homepage() {
  return (
    <Container fontFamily='Fira Sans' maxW={[null, 'container.lg']}>
      <Flex
        color='blackAlpha.800'
        textAlign='center'
        align='center'
        justify='center'
        minH='100vh'
      >
        <VStack spacing={['1rem', '5rem']}>
          <SimpleGrid
            position={['unset', 'relative']}
            columns={[1, 2]}
            gap={['1rem', '3rem', '1rem']}
            p={[null, '1rem']}
            left='8.9rem'
          >
            <Image src={title} id='extrados' />

            <SocialBtns />
          </SimpleGrid>
          <Box
            fontWeight='regular'
            lineHeight={['1.5rem', '2rem']}
            fontSize={['1rem', '1.5rem']}
          >
            Enfocados en brindar soluciones de negocios, EXTRADOS Software
            Technology es una consultora de sistemas que se especializa en el
            desarrollo de software y servicios de calidad, con tecnología,
            infraestructura y recursos IT de alta capacidad y gran experiencia.
          </Box>
        </VStack>
      </Flex>
    </Container>
  );
}

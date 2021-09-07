import {
  VStack,
  Container,
  SimpleGrid,
  Image,
  Flex,
  Box,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import title from './img/title.jpg';
import SocialBtns from './components/SocialBtns.js';

export default function Homepage() {
  const [isViewed, setIsViewed] = useState(true);

  return (
    <Container fontFamily='Open Sans' maxW={[null, 'container.lg']}>
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
            gap={['1rem', '0.5rem']}
            p={[null, '1rem']}
            left='9rem'
          >
            <Image
              src={title}
              id='extrados'
              onClick={() => setIsViewed(!isViewed)}
            />

            <SocialBtns />
          </SimpleGrid>
          <Box w='100%' h='5rem'>
            <Box
              fontWeight='regular'
              lineHeight={['1.5rem', '2rem']}
              fontSize={['1rem', '1.5rem']}
              textColor='#020202'
              display={isViewed === false && 'none'}
            >
              Enfocados en brindar soluciones de negocios, EXTRADOS Software
              Technology es una consultora de sistemas que se especializa en el
              desarrollo de software y servicios de calidad, con tecnología,
              infraestructura y recursos IT de alta capacidad y gran
              experiencia.
            </Box>
          </Box>
        </VStack>
      </Flex>
    </Container>
  );
}

import { Text, Icon, HStack } from '@chakra-ui/react';

import React from 'react';

export default function IconBtn({ icon, text, href, width }) {
  return (
    <HStack
      className='socialStack'
      border='1px'
      borderColor='blackAlpha.300'
      bg='white'
      as={'a'}
      href={href}
      target='_blank'
      color='black'
      rounded='md'
      p='0.5rem'
      w='3rem'
      _hover={[
        null,
        {
          w: width,
        },
      ]}
      overflow='hidden'
      align='center'
      textAlign='center'
    >
      <Icon
        as={icon}
        className='socialStack'
        color='black'
        h='2rem'
        w='2rem'
        me='0.5rem'
      />
      <Text fontWeight='bold'>{text}</Text>
    </HStack>
  );
}

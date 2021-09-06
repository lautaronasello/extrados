import React from 'react';
import IconBtn from './IconBtn.js';
import { Stack, Center } from '@chakra-ui/react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function SocialBtns() {
  var arraySocialData = [
    {
      id: 1,
      icon: FaTwitter,
      text: 'Twitter',
      href: 'http://twitter.com/extrados_',
      width: '7.2rem',
    },
    {
      id: 2,
      icon: FaLinkedin,
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/company/extrados-software-technology',
      width: '8rem',
    },
    {
      id: 3,
      icon: FaFacebook,
      text: 'Facebook',
      href: 'https://www.facebook.com/extrados.st',
      width: '8.5rem',
    },
  ];

  return (
    <Center>
      <Stack direction={['row', 'column']} w='10rem' className='socialStack'>
        {arraySocialData.map((data) => {
          return (
            <IconBtn
              key={data.id}
              icon={data.icon}
              text={data.text}
              href={data.href}
              width={data.width}
            />
          );
        })}
      </Stack>
    </Center>
  );
}

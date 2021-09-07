import React from 'react';
import IconBtn from './IconBtn.js';
import { Stack, Box } from '@chakra-ui/react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function SocialBtns() {
  var arraySocialData = [
    {
      id: 1,
      icon: FaTwitter,
      text: 'Twitter',
      href: 'http://twitter.com/extrados_',
      width: '7.9rem',
    },
    {
      id: 2,
      icon: FaLinkedin,
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/company/extrados-software-technology',
      width: '8.5rem',
    },
    {
      id: 3,
      icon: FaFacebook,
      text: 'Facebook',
      href: 'https://www.facebook.com/extrados.st',
      width: '9rem',
    },
  ];

  return (
    <Box mx={['auto', 0]}>
      <Stack direction={['row', 'column']} w='10rem'>
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
    </Box>
  );
}

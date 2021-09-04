import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColormode: true,
};

const theme = extendTheme({ config });

export default theme;

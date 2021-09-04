import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Homepage from './Homepage';
function App() {
  return (
    <ChakraProvider>
      <Homepage />
    </ChakraProvider>
  );
}

export default App;

// 1. import `ChakraProvider` component, `extendTheme`
import { extendTheme } from '@chakra-ui/react';

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    brand: {
      white: '#FFFFFF',
      black: '#000000',
      accent: '#19A7CE'
    }
  }
});

export default theme;

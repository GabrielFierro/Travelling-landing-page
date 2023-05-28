// 1. import `ChakraProvider` component, `extendTheme`
import { extendTheme } from '@chakra-ui/react';

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    brand: {
      white: '#FFFFFF',
      black: '#000000',
      accent: '#19A7CE',
      footer: '#898E8C'
    }
  },
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Rubik', sans-serif`
  },
  fontWeights: {
    regular: 400, // categories, Rubik footer sections categories
    medium: 500, // Rubik navbar, Montserrat subtitles
    semibold: 600, // Montserrat paragraph, about us
    bold: 700 // Montserrat titles, Rubik buttons, Rubik footer sections
  }
});

export default theme;

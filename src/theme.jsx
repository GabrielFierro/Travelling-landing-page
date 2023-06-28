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
  fontWeights: {
    regular: 400, // categories, Rubik footer sections categories
    medium: 500, // Rubik navbar, Montserrat subtitles
    semibold: 600, // Montserrat paragraph, about us
    bold: 700 // Montserrat titles, Rubik buttons, Rubik footer sections
  },
  textStyles: {
    h1: {
      fontSize: ['40px', '52px'],
      fontWeight: 'bold',
      lineHeight: '130%',
      letterSpacing: '5%'
    },
    h2: {
      fontSize: ['16px', '20px', '24px', '28px', '36px'],
      fontWeight: 'semibold',
      lineHeight: '110%',
      letterSpacing: '-1%'
    },
    h3: {
      fontSize: ['16px', '20px'],
      fontWeight: 'medium',
      lineHeight: '110%',
      letterSpacing: '-1%'
    },
    navbar: {
      fontSize: ['16px'],
      fontWeight: 'regular',
      lineHeight: '110%',
      letterSpacing: '-2%'
    },
    footer: {
      fontSize: ['12px', '16px'],
      fontWeight: 'bold',
      lineHeight: '110%',
      letterSpacing: '-2%'
    },
    button: {
      fontSize: ['24px'],
      fontWeight: 'bold',
      lineHeight: '110%',
      letterSpacing: '-2%'
    }
  }
});

export default theme;

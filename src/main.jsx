import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme.jsx';
// Import the fonts
// Rubik font
import '@fontsource/rubik/400.css';
import '@fontsource/rubik/500.css';
import '@fontsource/rubik/700.css';
// Montserrat font
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // 2. Wrap ChakraProvider at the root of your app
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

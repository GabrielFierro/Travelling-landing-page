import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  // 2. Wrap ChakraProvider at the root of your app
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

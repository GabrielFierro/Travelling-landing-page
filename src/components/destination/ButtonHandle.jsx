import { Flex, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

export default function ButtonHandle({ categories, handleClick }) {
  const [activeButton, setActiveButton] = useState(0);
  const [btnColor, setBtnColor] = useState('#19A7CE');
  const [textColor, setTextColor] = useState('white');

  const handleClickButton = (index) => {
    setActiveButton(index);
    setBtnColor('#19A7CE');
    setTextColor('white');
  };

  const buttons = categories.map((category, index) => {
    return (
      <div key={index} style={{ marginBottom: '15px' }}>
        <Button
          key={index}
          style={{
            backgroundColor: activeButton === index ? btnColor : '#E2E8F0',
            color: activeButton === index ? textColor : 'black'
          }}
          onClick={() => {
            handleClick(category);
            handleClickButton(index);
          }}
        >
          {category}
        </Button>
      </div>
    );
  });

  return (
    <Flex
      w={{ base: '200px', md: '600px' }}
      h={{ base: '100%', md: '100px' }}
      align='center'
      justify='space-around'
      direction={{ base: 'column', md: 'row' }}
    >
      {buttons}
    </Flex>
  );
}

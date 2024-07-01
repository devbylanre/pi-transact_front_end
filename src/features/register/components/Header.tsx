import React from 'react';
import Box from '../../../components/Box/Box';
import Text from '../../../components/Text/Text';

const Header = () => {
  return (
    <Box>
      <Text
        as={'h1'}
        size={32}
        weight={500}
      >
        Let's get you started.
        <br /> What's your name?
      </Text>
    </Box>
  );
};

export default Header;

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
        Good to have you back. Sign in to your account
      </Text>
    </Box>
  );
};

export default Header;

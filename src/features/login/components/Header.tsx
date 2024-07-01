import React from 'react';
import Box from '../../../components/Box/Box';
import Text from '../../../components/Text/Text';

const Header = () => {
  return (
    <Box>
      <Text
        as={'h1'}
        weight={500}
        size={{ initial: 25, sm: 32 }}
      >
        Sign in
      </Text>
    </Box>
  );
};

export default Header;

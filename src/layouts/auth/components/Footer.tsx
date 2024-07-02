import React from 'react';
import Box from '../../../components/Box/Box';
import Text from '../../../components/Text/Text';
import { Link, useLocation } from 'react-router-dom';
import Flex from '../../../components/Flex/Flex';
import navigation from '../../../data/navigation';

const Footer = () => {
  const { pathname } = useLocation();
  const PATH = pathname.split('/')[2];

  console.log({ PATH });

  return (
    <Box
      pb={'xl'}
      mt={'5xl'}
      spaceY={'4xl'}
    >
      <Text
        as={'p'}
        size={16}
        align={'center'}
      >
        {PATH === 'new' ? 'Already have an account? ' : 'No account? '}
        <Text size={'inherit'}>
          <Link to={PATH === 'new' ? navigation.login : navigation.register}>
            {PATH === 'new' ? 'Sign in' : 'Sign up'}
          </Link>
        </Text>
      </Text>

      <Box spaceY={'xs'}>
        <Text
          as={'p'}
          size={16}
          align={'center'}
        >
          By continuing, you agree to our policies
        </Text>
        <Flex
          justifyContent={'center'}
          gapX={'md'}
        >
          <Text size={16}>
            <Link to={'/terms-of-use/'}>Terms of use</Link>
          </Text>
          <Text size={16}>
            <Link to={'/privacy-policy/'}>Privacy policy</Link>
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;

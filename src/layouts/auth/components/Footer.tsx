import React from 'react';
import Box from '../../../components/Box/Box';
import { useLocation } from 'react-router-dom';
import Text from '../../../components/Text/Text';
import Flex from '../../../components/Flex/Flex';
import navigation from '../../../data/navigation';
import Anchor from '../../../components/Link/Anchor';

const Footer = () => {
  const { pathname } = useLocation();
  const PATH = pathname.split('/')[2];

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
          <Anchor
            color={'blue-50'}
            to={PATH === 'new' ? navigation.login : navigation.register}
          >
            {PATH === 'new' ? 'Sign in' : 'Sign up'}
          </Anchor>
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
            <Anchor to={'/terms-of-use/'}>Terms of use</Anchor>
          </Text>
          <Text size={16}>
            <Anchor to={'/privacy-policy/'}>Privacy policy</Anchor>
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;

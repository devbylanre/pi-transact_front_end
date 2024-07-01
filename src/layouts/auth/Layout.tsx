import React from 'react';
import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import { Outlet } from 'react-router-dom';
import Flex from '../../components/Flex/Flex';
import Text from '../../components/Text/Text';
import Box from '../../components/Box/Box';

const AuthLayout = () => {
  return (
    <Section>
      <Container
        mx={'auto'}
        container={'xxs'}
      >
        <Flex
          flexDirection={'column'}
          style={{ minHeight: '100vh' }}
          py={{ initial: '2xl', sm: '8xl' }}
        >
          <Text
            weight={500}
            size={{ initial: 21, sm: 25 }}
          >
            Pi-transact
          </Text>
          <Box mt={{ initial: '2xl', sm: '4xl' }}>
            <Outlet />
          </Box>
        </Flex>
      </Container>
    </Section>
  );
};

export default AuthLayout;

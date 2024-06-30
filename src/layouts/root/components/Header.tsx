import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Flex from '../../../components/Flex/Flex';
import Text from '../../../components/Text/Text';
import Box from '../../../components/Box/Box';
import Button from '../../../components/Button/Button';
import MegaMenu from './MegaMenu';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Section
      top={0}
      as={'header'}
      position={'sticky'}
      backgroundColor={'white'}
      style={{ zIndex: 1 }}
    >
      <Container
        py={'xl'}
        px={'lg'}
        mx={'auto'}
        container={'xl'}
      >
        <Flex
          alignItems={'center'}
          justifyContent={'between'}
        >
          <Link
            to={'/'}
            style={{ textDecoration: 'none' }}
          >
            <Text
              size={19}
              weight={500}
            >
              Pi-Transact
            </Text>
          </Link>

          <Box display={{ initial: 'hidden', md: 'block' }}>
            <MegaMenu />
          </Box>

          <Flex
            gapX={'md'}
            display={{ initial: 'hidden', md: 'flex' }}
          >
            <Button
              backgroundColor={'white'}
              pseudos={{ hover: { backgroundColor: 'gray-100' } }}
            >
              Sign In
            </Button>
            <Button>Start for Free</Button>
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
};

export default Header;

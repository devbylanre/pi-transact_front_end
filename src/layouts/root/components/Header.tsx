import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Flex from '../../../components/Flex/Flex';
import Text from '../../../components/Text/Text';
import Box from '../../../components/Box/Box';
import Button from '../../../components/Button/Button';
import MegaMenu from './MegaMenu';
import { Link } from 'react-router-dom';
import navigation from '../../../data/navigation';
import MobileMenu from './MobileMenu';

const Header = () => {
  return (
    <Section
      top={0}
      px={'lg'}
      as={'header'}
      position={'sticky'}
      style={{
        zIndex: 1,
        backdropFilter: 'blur(2rem)',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
      }}
    >
      <Container
        mx={'auto'}
        container={'xl'}
        className='header-height'
      >
        <Flex
          height={'full'}
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

          <Box display={{ initial: 'hidden', sm: 'block' }}>
            <MegaMenu />
          </Box>

          <Flex>
            <Box display={{ initial: 'block', sm: 'hidden' }}>
              <MobileMenu />
            </Box>
            <Box
              spaceX={'md'}
              display={{ initial: 'hidden', sm: 'inline' }}
            >
              <Link to={navigation.login}>
                <Button
                  backgroundColor={'white'}
                  pseudos={{ hover: { backgroundColor: 'gray-100' } }}
                >
                  Sign In
                </Button>
              </Link>
              <Link to={navigation.register}>
                <Button>Start for Free</Button>
              </Link>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
};

export default Header;

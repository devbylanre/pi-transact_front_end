import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Flex from '../../../components/Flex/Flex';
import Text from '../../../components/Text/Text';
import Box from '../../../components/Box/Box';
import { NavLink } from 'react-router-dom';
import Button from '../../../components/Button/Button';

const links = [
  { name: 'products', path: '/products' },
  { name: 'company', path: '/company' },
  { name: 'pricing', path: '/pricing' },
  { name: 'help center', path: '/help' },
];

const Header = () => {
  return (
    <Section as={'header'}>
      <Container
        py={'lg'}
        px={'sm'}
        mx={'auto'}
        container={'lg'}
      >
        <Flex
          alignItems={'center'}
          justifyContent={'between'}
        >
          <Box>
            <Text
              size={19}
              weight={500}
            >
              Pi-Transact
            </Text>
          </Box>

          <Flex
            as={'ul'}
            gap={'md'}
            display={{ initial: 'hidden', lg: 'flex' }}
            style={{ listStyleType: 'none' }}
          >
            {links.map((link) => (
              <Box
                as={'li'}
                py={'md'}
                px={'md'}
                radius={'lg'}
                key={link.name}
                cursor={'pointer'}
                pseudos={{ hover: { backgroundColor: 'gray-100' } }}
              >
                <NavLink
                  to={link.path}
                  style={{ textDecoration: 'none' }}
                >
                  {({ isActive }) => (
                    <Text
                      size={14}
                      transform={'capitalize'}
                    >
                      {link.name}
                    </Text>
                  )}
                </NavLink>
              </Box>
            ))}
          </Flex>

          <Flex gapX={'md'}>
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

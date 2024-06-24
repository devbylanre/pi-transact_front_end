import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Text from '../../../components/Text/Text';
import Box from '../../../components/Box/Box';
import Grid from '../../../components/Grid/Grid';
import { Link } from 'react-router-dom';
import Flex from '../../../components/Flex/Flex';

const groups = [
  {
    group: 'products',
    prefix: '/products',
    links: [
      { name: 'Automation', path: '/automation' },
      { name: 'Inventory', path: '/automation' },
      { name: 'Market', path: '/automation' },
      { name: 'For Business', path: '/business' },
      { name: 'For Team', path: '/team' },
    ],
  },
  {
    group: 'company',
    prefix: '/company',
    links: [
      { name: 'about', path: '/about' },
      { name: 'team', path: '/team' },
      { name: 'careers', path: '/careers' },
      { name: 'pricing', path: '/pricing' },
      { name: 'contact', path: '/contact' },
    ],
  },
  {
    group: 'resources',
    prefix: '/resources',
    links: [
      { name: 'help center', path: '/help' },
      { name: 'knowledge base', path: '/knowledge' },
      { name: 'blog', path: '/blog' },
      { name: 'Privacy policy', path: '/policy' },
      { name: 'Legal', path: '/legal' },
    ],
  },
];

const Footer = () => {
  return (
    <Section
      pt={'10xl'}
      pb={'xl'}
      as={'footer'}
      backgroundColor={'gray-100'}
    >
      <Container
        px={'sm'}
        mx={'auto'}
        container={'xl'}
      >
        <Grid
          gap={{ initial: '3xl', lg: '8xl' }}
          gridColumn={{ initial: 1, lg: 5 }}
        >
          <Box
            spaceY={'md'}
            gridColumnSpan={{ initial: 1, lg: 2 }}
          >
            <Text
              as={'h3'}
              size={25}
              weight={500}
            >
              Pi-Transact
            </Text>
            <Text
              as={'p'}
              size={17}
              color={'gray-40'}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              numquam maxime atque laborum doloribus accusantium quibusdam
              expedita? Eligendi ullam sed dignissimos, aliquam earum voluptate
              ea molestias, culpa, eveniet placeat id.
            </Text>
          </Box>

          <React.Fragment>
            {groups.map((group) => (
              <Box
                key={group.group}
                spaceY={'lg'}
              >
                <Text
                  as={'h4'}
                  transform={'capitalize'}
                >
                  {group.group}
                </Text>
                <Box
                  as={'ul'}
                  spaceY={'sm'}
                  style={{ listStyleType: 'none' }}
                >
                  {group.links.map((link, index) => (
                    <Box
                      as={'li'}
                      key={index}
                    >
                      <Link
                        to={`${group.prefix}${link.path}`}
                        style={{ textDecoration: 'none' }}
                      >
                        <Text
                          size={14}
                          color={'gray-40'}
                          transform={'capitalize'}
                          pseudos={{
                            hover: {
                              color: 'gray-10',
                              decoration: 'underline',
                            },
                          }}
                        >
                          {link.name}
                        </Text>
                      </Link>
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </React.Fragment>

          <Box gridColumnSpan={{ initial: 1, lg: 2 }}>
            <Box spaceY={'xs'}>
              <Text
                as={'h3'}
                weight={500}
              >
                Subscribe to our newsletter
              </Text>
              <Text
                size={14}
                color={'gray-40'}
              >
                For promotions, offers, announcements, and exclusive insights.
              </Text>
            </Box>
          </Box>
        </Grid>
      </Container>

      <Container
        px={'sm'}
        mt={'10xl'}
        mx={'auto'}
        container={'xl'}
      >
        <Grid
          gap={'lg'}
          gridColumn={{ initial: 1, lg: 3 }}
        >
          <Box>
            <Text size={13}>Multi-language dropdown feature.</Text>
          </Box>

          <Box>
            <Text
              as={'h4'}
              size={13}
              align={{ initial: 'left', lg: 'center' }}
              color={'gray-40'}
            >
              &copy; Pi-Transact , Inc. All rights reserved
            </Text>
          </Box>

          <Flex justifyContent={{ initial: 'start', lg: 'end' }}>
            <Text size={13}>Social icons feature.</Text>
          </Flex>
        </Grid>
      </Container>
    </Section>
  );
};

export default Footer;

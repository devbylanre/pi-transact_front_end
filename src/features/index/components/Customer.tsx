import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Box from '../../../components/Box/Box';
import Text from '../../../components/Text/Text';
import Grid from '../../../components/Grid/Grid';

const Customer = () => {
  return (
    <Section
      px={'md'}
      mt={'max'}
    >
      <Container
        mx={'auto'}
        container={'xs'}
      >
        <Box spaceY={{ initial: 'xl', md: '4xl' }}>
          <Text
            as={'h2'}
            weight={500}
            align={'center'}
            size={{ initial: 40, md: 48, lg: 56 }}
          >
            Get a little help from some friends
          </Text>

          <Text
            as={'h3'}
            weight={500}
            align={'center'}
            size={{ initial: 16, md: 19 }}
          >
            Anyone can get started building and growing their business on
            Pi-Transact — with one-to-one guidance to suit the way you learn.
          </Text>
        </Box>
      </Container>

      <Container
        mt={'6xl'}
        mx={'auto'}
        container={'md'}
      >
        <Box
          radius={'2xl'}
          backgroundColor={'gray-100'}
          aspectRatio={{ initial: '1/1', lg: '2/1' }}
        ></Box>

        <Grid
          mt={'5xl'}
          gridColumn={{ initial: 1, md: 3 }}
          gap={{ initial: '5xl', md: '8xl' }}
        >
          {Array.from('abc').map((char) => (
            <Box
              key={char}
              spaceY={'lg'}
            >
              <Text
                as={'h3'}
                size={{ initial: 21, md: 25 }}
                weight={500}
              >
                One-to-one guidance from our team
              </Text>
              <Text
                as={'p'}
                size={16}
              >
                Our team is here to help you get going. We’ll provide hands-on
                help from your very first question through to your first
                customer sign up. They’re available by email, Slack, and
                Discord. Whatever works for you.
              </Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Customer;

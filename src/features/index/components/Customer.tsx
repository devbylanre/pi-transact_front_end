import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Box from '../../../components/Box/Box';
import Text from '../../../components/Text/Text';
import Grid from '../../../components/Grid/Grid';

const Customer = () => {
  return (
    <Section
      px={'lg'}
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
            size={{ initial: 48, sm: 56, lg: 64 }}
          >
            Save. Send. Spend.
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
        container={'lg'}
      >
        <Box
          radius={'2xl'}
          backgroundColor={'gray-100'}
          aspectRatio={{ initial: '1/1', lg: '2/1' }}
        ></Box>

        <Grid
          mt={'5xl'}
          gridColumn={{ initial: 1, sm: 3 }}
          gap={{ initial: '6xl', md: '8xl' }}
        >
          {Array.from('abc').map((char) => (
            <Box
              key={char}
              spaceY={'lg'}
            >
              <Text
                as={'h3'}
                weight={500}
                size={19}
              >
                Send money to your contacts
              </Text>
              <Text
                as={'p'}
                size={16}
              >
                A lot of businesses still need to use traditional passwords for
                access. Roll out passwords with ease and when they're ready to
                make the move you can convert with the flick of a switch.
              </Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Customer;

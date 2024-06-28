import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Text from '../../../components/Text/Text';
import Box from '../../../components/Box/Box';
import Flex from '../../../components/Flex/Flex';
import Grid from '../../../components/Grid/Grid';

const Speak = () => {
  return (
    <Section
      px={'md'}
      mt={'max'}
    >
      <Container
        mx={'auto'}
        container={'md'}
      >
        <Flex
          gapY={'6xl'}
          alignItems={'center'}
          flexDirection={'column'}
        >
          <Text
            as={'h2'}
            weight={500}
            align={'center'}
            size={{ initial: 40, sm: 48 }}
          >
            Speak to a human
          </Text>

          <Text
            as={'p'}
            size={16}
            weight={500}
            align={'center'}
            style={{ maxWidth: '80rem' }}
          >
            The Pi-Transact team is mostly based in England. If you’re in a
            different timezone, it might take a few hours to get back to you. We
            do our best to stay up late and get up early.
          </Text>
        </Flex>

        <Grid
          mt={'8xl'}
          gap={'5xl'}
          gridColumn={{ initial: 1, md: 3 }}
        >
          {Array.from('abc').map((char) => (
            <Box spaceY={{ initial: 'xl', sm: '3xl' }}>
              <Text
                as={'h3'}
                weight={500}
                size={{ initial: 21, sm: 25 }}
              >
                Live chat
              </Text>
              <Text
                as={'p'}
                size={16}
              >
                Reach out to a human via the in-product help widget (paid plans
                only), and we’ll get back to as soon as we can. Average response
                time is 3 hours.
              </Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Speak;

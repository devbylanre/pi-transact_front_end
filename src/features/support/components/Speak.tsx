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
            size={{ initial: 40, md: 48 }}
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
            The Pi-Transact team is mostly based in Australia. If you’re in a
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
            <Box spaceY={'3xl'}>
              <Text
                as={'h3'}
                size={{ initial: 21, md: 25 }}
                weight={500}
              >
                Email
              </Text>
              <Text
                as={'p'}
                size={16}
              >
                Shoot an email to support@pitransact.com with any questions
              </Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Speak;

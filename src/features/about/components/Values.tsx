import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Box from '../../../components/Box/Box';
import Grid from '../../../components/Grid/Grid';
import Text from '../../../components/Text/Text';

const Values = () => {
  return (
    <Section
      px={'md'}
      mt={'max'}
    >
      <Container
        mx={'auto'}
        container={'md'}
      >
        <Box>
          <Text
            as={'h2'}
            weight={500}
            align={'center'}
            size={{ initial: 32, md: 40, lg: 48 }}
          >
            Our values
          </Text>
        </Box>
        <Grid
          mt={'6xl'}
          gap={'8xl'}
          gridColumn={{ initial: 1, md: 2, lg: 3 }}
        >
          {Array.from('abcdef').map((char) => (
            <Box
              key={char}
              spaceY={'xl'}
            >
              <Text
                as={'h3'}
                size={17}
                weight={500}
              >
                Do your life's best work
              </Text>
              <Text
                as={'p'}
                size={14}
              >
                We are creating an environment that inspires people to do the
                best work of their lives. The work we do has an impact on the
                world today, tomorrow, and beyond. For this reason we build for
                the long term. We admire and reward people who do meaningful
                work and have an outsized impact. We have a healthy bias towards
                action. We seek to do whenever possible.
              </Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Values;

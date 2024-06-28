import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Grid from '../../../components/Grid/Grid';
import Box from '../../../components/Box/Box';
import Text from '../../../components/Text/Text';
import Button from '../../../components/Button/Button';

const Answers = () => {
  return (
    <Section
      px={'md'}
      mt={'10xl'}
    >
      <Container
        mx={'auto'}
        container={'xl'}
      >
        <Grid
          gridColumn={{ initial: 1, md: 4 }}
          gap={{ initial: '5xl', sm: '8xl' }}
        >
          <Box>
            <Text
              as={'h2'}
              weight={500}
              size={{ initial: 21, sm: 25 }}
            >
              Find answers
            </Text>
          </Box>

          {Array.from('abc').map((char) => (
            <Box
              key={char}
              spaceY={{ initial: 'xl', sm: '3xl' }}
            >
              <Text
                as={'h3'}
                size={19}
                weight={500}
              >
                Docs
              </Text>
              <Text
                as={'p'}
                size={16}
              >
                Browse or search the docs to see if we’ve covered what you’re
                looking for.
              </Text>

              <Button
                px={'min'}
                height={'fit'}
                radius={'min'}
                backgroundColor={'inherit'}
                pseudos={{ hover: { translateX: 'md' } }}
              >
                Read docs
              </Button>
            </Box>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Answers;

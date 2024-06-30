import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Grid from '../../../components/Grid/Grid';
import Box from '../../../components/Box/Box';
import Text from '../../../components/Text/Text';
import Button from '../../../components/Button/Button';
import { Link } from 'react-router-dom';

const helps = [
  {
    title: 'Tips',
    body: "Take a look through the <strong>Tips</strong> to find out if we've addressed what you need.",
    button: { label: 'All tips', url: '' },
  },
  {
    title: 'Support agents',
    body: 'Give us or call, send a mail, to have any of our support agent attend to you.',
    button: { label: 'Support', url: '/support/' },
  },
  {
    title: 'Guides',
    body: 'Explore our detailed guides designed to assist you in building, expanding, and generating revenue.',
    button: { label: 'Browse our guides', url: '' },
  },
];

const Answers = () => {
  return (
    <Section
      px={'lg'}
      mt={'10xl'}
    >
      <Container
        mx={'auto'}
        container={'xl'}
      >
        <Grid
          gridColumn={{ initial: 1, sm: 4 }}
          gap={'5xl'}
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

          {helps.map((help, index) => (
            <Box
              key={index}
              spaceY={{ initial: '2xl', sm: '3xl' }}
            >
              <Text
                as={'h3'}
                size={19}
                weight={500}
              >
                {help.title}
              </Text>
              <Text
                as={'p'}
                size={16}
                dangerouslySetInnerHTML={{ __html: help.body }}
              />

              <Link to={help.button.url}>
                <Button
                  px={'min'}
                  height={'fit'}
                  radius={'min'}
                  backgroundColor={'inherit'}
                  pseudos={{ hover: { translateX: 'md' } }}
                >
                  {help.button.label}
                </Button>
              </Link>
            </Box>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Answers;

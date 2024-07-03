import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Grid from '../../../components/Grid/Grid';
import Box from '../../../components/Box/Box';
import Text from '../../../components/Text/Text';
import Anchor from '../../../components/Link/Anchor';

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
      mt={{ initial: '2xl', sm: '10xl' }}
    >
      <Container
        mx={'auto'}
        container={'xl'}
      >
        <Grid
          gap={'5xl'}
          gridColumn={{ initial: 1, sm: 4 }}
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

              <Anchor to={help.button.url}>{help.button.label}</Anchor>
            </Box>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Answers;

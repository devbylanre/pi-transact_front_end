import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Text from '../../../components/Text/Text';
import Box from '../../../components/Box/Box';
import Flex from '../../../components/Flex/Flex';
import Grid from '../../../components/Grid/Grid';

const options = [
  {
    title: 'Email',
    body: 'Shoot an email to <a style="text-decoration: none" href="mailto:support@pi-transact.com" class="text-blue-50 weight-500">support@pi-transact.com</a> with any questions',
  },
  {
    title: 'Phone',
    body: 'Give us a call on Pi-Transact <a style="text-decoration: none" href="tel:+1 254 678 655 4567" class="text-blue-50 weight-500">support line</a> with any questions',
  },
  {
    title: 'Live chat',
    body: 'Reach out to a human via the in-product help widget, and we’ll get back to as soon as we can. Average response time is 3 hours.',
  },
];

const Speak = () => {
  return (
    <Section
      px={'lg'}
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
            Most of the Pi-Transact team operates out of England. If you're in a
            different timezone, please expect a delay of a few hours in our
            response times. We make every effort to accommodate varying time
            zones by working late hours and early mornings.
          </Text>
        </Flex>

        <Grid
          mt={'8xl'}
          gap={'5xl'}
          gridColumn={{ initial: 1, md: 3 }}
        >
          {options.map((option, index) => (
            <Box
              key={index}
              spaceY={{ initial: 'xl', sm: '3xl' }}
            >
              <Text
                as={'h3'}
                weight={500}
                size={{ initial: 21, sm: 25 }}
              >
                {option.title}
              </Text>
              <Text
                as={'p'}
                size={16}
                dangerouslySetInnerHTML={{ __html: option.body }}
              />
            </Box>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Speak;

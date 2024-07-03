import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Box from '../../../components/Box/Box';
import Grid from '../../../components/Grid/Grid';
import Text from '../../../components/Text/Text';

const values = [
  {
    title: 'Grow your business',
    body: 'We are fostering an environment that motivates people to achieve their best work. The impact of our work extends beyond today, influencing the future. This is why we focus on long-term goals. We value and reward those who contribute meaningful work and make a significant impact.',
  },
  {
    title: 'Bound to build the business of our customers',
    body: 'Our priority is our customers because helping their businesses grow is the best way to grow ours. Customers come first, and revenue comes second—always in that order. From the beginning, we have chosen the path that supports the creation of more founders.',
  },
  {
    title: 'Simple interface, fast responses',
    body: 'At our core, we believe that simplicity and speed are crucial for an exceptional user experience. Our interface is designed with a focus on intuitive navigation, ensuring that even first-time users can easily find what they need without any hassle.',
  },
  {
    title: 'A space for giants',
    body: 'We believe in creating an environment where visionaries, innovators, and leaders can thrive. Our platform is designed to support those with big ideas and bold ambitions, offering the tools, resources, and community needed to achieve extraordinary things. Here, you’ll find more than just a workspace—you’ll find a launchpad for greatness.',
  },
  {
    title: 'Create a bigger pie',
    body: 'We believe in expanding opportunities, fostering innovation, and ensuring that everyone can benefit from collective growth. We focus on creating new possibilities and increasing value for all. Our approach is collaborative and inclusive. By working together, sharing knowledge, and pooling resources, we can achieve more than we ever could alone. ',
  },
  {
    title: 'Act foolish',
    body: "Pi-Transact is an invitation to embrace curiosity, creativity, and the courage to explore the unknown. It's about daring to dream big, taking risks, and stepping outside the comfort zone. In a world that often values caution and conformity. We remain open-minded, to question assumptions, and to pursue ideas that might seem unconventional or even impossible.",
  },
];

const Values = () => {
  return (
    <Section
      px={'lg'}
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
            align={'left'}
            size={{ initial: 32, sm: 48 }}
          >
            Our values
          </Text>
        </Box>
        <Grid
          mt={'6xl'}
          gap={{ initial: '4xl', sm: '6xl' }}
          gridColumn={{ initial: 1, sm: 2, md: 3 }}
        >
          {values.map((value, index) => (
            <Box
              key={index}
              spaceY={'xl'}
            >
              <Text
                as={'h3'}
                size={19}
                weight={500}
              >
                {value.title}
              </Text>
              <Text
                as={'p'}
                size={16}
              >
                {value.body}
              </Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Values;

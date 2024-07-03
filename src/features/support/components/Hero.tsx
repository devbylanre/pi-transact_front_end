import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Flex from '../../../components/Flex/Flex';
import Text from '../../../components/Text/Text';
import Box from '../../../components/Box/Box';

const Hero = () => {
  return (
    <Section
      px={'lg'}
      mt={'5xl'}
    >
      <Container
        mx={'auto'}
        container={'lg'}
      >
        <Box
          mx={'auto'}
          spaceY={'4xl'}
          style={{ maxWidth: '60rem', minHeight: '60vh' }}
        >
          <Text
            as={'h1'}
            size={19}
            weight={500}
            align={'center'}
          >
            Get help
          </Text>
          <Text
            as={'h2'}
            weight={500}
            align={'center'}
            size={{ initial: 40, sm: 80 }}
          >
            Get the most of Pi-transact.
          </Text>

          <Text
            as={'p'}
            size={19}
            weight={500}
            align={'center'}
            style={{ maxWidth: '70rem' }}
          >
            Creating a strong business culture can be challenging. Whether
            you're just beginning or already managing a thriving business, our
            team is here to support you in maintaining your course.
          </Text>
        </Box>
      </Container>
    </Section>
  );
};

export default Hero;

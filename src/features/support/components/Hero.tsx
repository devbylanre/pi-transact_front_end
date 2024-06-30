import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Flex from '../../../components/Flex/Flex';
import Text from '../../../components/Text/Text';

const Hero = () => {
  return (
    <Section px={'lg'}>
      <Container
        mx={'auto'}
        container={'lg'}
      >
        <Flex
          gapY={'4xl'}
          alignItems={'center'}
          flexDirection={'column'}
          justifyContent={'center'}
          style={{ minHeight: '60vh' }}
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
            size={{ initial: 56, sm: 80, lg: 96 }}
            style={{ maxWidth: '80rem' }}
          >
            Smart support for smart businesses
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
        </Flex>
      </Container>
    </Section>
  );
};

export default Hero;

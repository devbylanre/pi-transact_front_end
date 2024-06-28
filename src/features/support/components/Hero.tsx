import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Flex from '../../../components/Flex/Flex';
import Text from '../../../components/Text/Text';

const Hero = () => {
  return (
    <Section px={'md'}>
      <Container
        mx={'auto'}
        container={'lg'}
      >
        <Flex
          gapY={'5xl'}
          alignItems={'center'}
          flexDirection={'column'}
          justifyContent={'center'}
          style={{ minHeight: '85vh' }}
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
            size={{ initial: 64, sm: 80, lg: 96 }}
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
            Get started with the trusted support your business needs. Reach our
            support team or check out our FAQs.
          </Text>
        </Flex>
      </Container>
    </Section>
  );
};

export default Hero;

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
        container={'sm'}
      >
        <Flex
          gapY={'6xl'}
          flexDirection={'column'}
          justifyContent={'center'}
          style={{ minHeight: '80vh' }}
        >
          <Text
            as={'h1'}
            weight={500}
            align={'center'}
            size={{ initial: 64, md: 80, lg: 96 }}
          >
            Fast financing when you need it
          </Text>

          <Text
            as={'p'}
            size={16}
            align={'center'}
          >
            (We’re an Australian born company with people all over the world)
          </Text>
        </Flex>
      </Container>
    </Section>
  );
};

export default Hero;

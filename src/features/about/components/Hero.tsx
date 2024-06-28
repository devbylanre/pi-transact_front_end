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
        container={'xs'}
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
            size={{ initial: 64, sm: 80, lg: 96 }}
          >
            Here for you.
          </Text>

          <Text
            as={'p'}
            size={16}
            align={'center'}
          >
            Pi-Transact is a web-3 business, aiding businesses and individuals
            making finance more accessible leveraging the Pi-Network.
          </Text>
        </Flex>
      </Container>
    </Section>
  );
};

export default Hero;

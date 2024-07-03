import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Flex from '../../../components/Flex/Flex';
import Text from '../../../components/Text/Text';
import Image from '../../../components/Image/Image';
import Box from '../../../components/Box/Box';

const Hero = () => {
  return (
    <Section
      px={'lg'}
      backgroundColor={'blue-60'}
    >
      <Container
        pt={'8xl'}
        mx={'auto'}
        container={'xs'}
        style={{ height: '90vh', overflow: 'hidden' }}
      >
        <Flex
          flexDirection={'column'}
          justifyContent={'center'}
          gapY={'4xl'}
        >
          <Box spaceY={'2xl'}>
            <Text
              as={'h1'}
              weight={500}
              align={'center'}
              color={'white'}
              size={{ initial: 48, sm: 80 }}
            >
              Pay with Pi.
            </Text>

            <Text
              as={'p'}
              align={'center'}
              color={'white'}
              size={{ initial: 19, sm: 21 }}
            >
              Pi-transact is a web-3 business, aiding businesses and individuals
              making finance more accessible leveraging the Pi network.
            </Text>
          </Box>

          <Image
            mx={'auto'}
            radius={'5xl'}
            src={'/assets/svgs/reserve.svg'}
            width={{ initial: 'full', sm: 'auto' }}
            style={{ boxShadow: '0px 0px 10px 8px rgba(255, 255, 255, 0.2)' }}
          />
        </Flex>
      </Container>
    </Section>
  );
};

export default Hero;

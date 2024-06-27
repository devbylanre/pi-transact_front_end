import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Text from '../../../components/Text/Text';
import Box from '../../../components/Box/Box';
import Flex from '../../../components/Flex/Flex';
import Button from '../../../components/Button/Button';
import Image from '../../../components/Image/Image';

const Hero = () => {
  return (
    <Section px={'md'}>
      <Container
        mx={'auto'}
        container={'sm'}
      >
        <Flex
          flexDirection={'column'}
          justifyContent={'center'}
          style={{ minHeight: '87vh' }}
          gapY={{ initial: 'lg', lg: '5xl' }}
        >
          <Text
            as={'h1'}
            weight={500}
            align={'center'}
            size={{ initial: 48, md: 64, lg: 96 }}
          >
            Auth for modern applications
          </Text>
          <Text
            as={'h2'}
            align={'center'}
            color={'gray-20'}
            size={{ initial: 19, md: 21, lg: 25 }}
          >
            Payment processing platform that facilitates transactions between
            businesses and their customers using Pi network.
          </Text>

          <Flex
            gap={'xl'}
            justifyContent={'center'}
          >
            <Button>Open Account</Button>
            <Button
              backgroundColor={'gray-100'}
              pseudos={{ hover: { backgroundColor: 'gray-95' } }}
            >
              Talk to Us
            </Button>
          </Flex>
        </Flex>
      </Container>

      <Container
        mt={'8xl'}
        mx={'auto'}
        container={'lg'}
      >
        <Flex
          gap={'xl'}
          flexWrap={'yes'}
        >
          <Flex
            p={'10xl'}
            radius={'2xl'}
            alignItems={'center'}
            justifyContent={'center'}
            backgroundColor={'gray-100'}
            width={{ initial: 'full', md: '8/12' }}
          >
            <Image
              width={'full'}
              objectFit={'cover'}
              alt={'user data table'}
              src={'./assets/images/user-data-table.png'}
            />
          </Flex>

          <Flex
            p={'10xl'}
            radius={'2xl'}
            alignItems={'center'}
            justifyContent={'center'}
            backgroundColor={'gray-100'}
            width={{ initial: 'full', md: '4/12' }}
          >
            <Image
              width={'full'}
              alt={'user chart'}
              objectFit={'cover'}
              src={'./assets/images/user-chart.png'}
            />
          </Flex>

          <Box width={'full'}>
            <Text
              size={14}
              color={'gray-40'}
            >
              Keep track of your transactions from a single dashboard
            </Text>
          </Box>
        </Flex>
      </Container>
    </Section>
  );
};

export default Hero;

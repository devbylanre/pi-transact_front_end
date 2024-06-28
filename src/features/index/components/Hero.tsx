import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Text from '../../../components/Text/Text';
import Box from '../../../components/Box/Box';
import Flex from '../../../components/Flex/Flex';
import Button from '../../../components/Button/Button';
import Image from '../../../components/Image/Image';
import Grid from '../../../components/Grid/Grid';

const Hero = () => {
  return (
    <Section px={'md'}>
      <Container
        mx={'auto'}
        container={'sm'}
      >
        <Flex
          alignItems={'center'}
          flexDirection={'column'}
          justifyContent={'center'}
          style={{ minHeight: '87vh' }}
          gapY={{ initial: 'lg', lg: '5xl' }}
        >
          <Text
            as={'h1'}
            weight={500}
            align={'center'}
            size={{ initial: 64, sm: 80, lg: 96 }}
          >
            App for ambitious founders
          </Text>
          <Text
            as={'h2'}
            align={'center'}
            color={'gray-20'}
            size={{ initial: 19, md: 21, lg: 25 }}
            style={{ maxWidth: '56rem' }}
          >
            Pi-Transact allows us to to organize your finances, optimizing it
            for our specific goals.
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
        container={'xl'}
      >
        <Grid
          gap={'xl'}
          gridColumn={{ initial: 1, sm: 3 }}
        >
          <Flex
            p={'10xl'}
            radius={'2xl'}
            alignItems={'center'}
            justifyContent={'center'}
            backgroundColor={'gray-100'}
            gridColumnSpan={{ initial: 1, sm: 2 }}
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
        </Grid>
      </Container>
    </Section>
  );
};

export default Hero;

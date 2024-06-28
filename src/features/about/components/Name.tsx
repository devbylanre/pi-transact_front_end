import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Box from '../../../components/Box/Box';
import Text from '../../../components/Text/Text';
import Flex from '../../../components/Flex/Flex';

const Name = () => {
  return (
    <Section
      px={'md'}
      mt={'max'}
    >
      <Container
        mx={'auto'}
        container={'sm'}
      >
        <Box spaceY={'4xl'}>
          <Text
            as={'h2'}
            weight={500}
            align={'center'}
            size={{ initial: 25, md: 32 }}
          >
            Why choose us?
          </Text>
          <Text
            as={'h3'}
            weight={500}
            align={'center'}
            size={{ initial: 56, sm: 64, lg: 80 }}
          >
            New Experience
          </Text>

          <Text
            as={'p'}
            size={16}
            align={'center'}
          >
            We’re called Pi-Transact because we aim to create more abundance in
            the world. We spend a lot of time thinking about how to create a
            world with more founders — because founders are the people who
            change the world and make all of humanity better. Better for the
            people and organizations who use their tools, better for their
            customers, and better for humanity.
          </Text>
        </Box>
      </Container>

      <Container
        mt={'6xl'}
        mx={'auto'}
        container={'xl'}
      >
        <Flex
          p={'4xl'}
          radius={'4xl'}
          aspectRatio={{ initial: '1/1', sm: '16/7' }}
          flexDirection={'column'}
          justifyContent={'center'}
          backgroundColor={'gray-100'}
        >
          <Flex
            flex={'full'}
            alignItems={'center'}
            flexDirection={'column'}
            justifyContent={'center'}
          >
            <Text
              as={'h4'}
              weight={500}
              align={'center'}
              size={{ initial: 40, sm: 48 }}
              style={{ maxWidth: '90rem' }}
            >
              "Experience new finance."
            </Text>
          </Flex>
          <Box>
            <Text
              size={12}
              color={'gray-40'}
            >
              Words from Pi-Transact CEO
            </Text>
          </Box>
        </Flex>
      </Container>
    </Section>
  );
};

export default Name;

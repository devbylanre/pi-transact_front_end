import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Text from '../../../components/Text/Text';
import Flex from '../../../components/Flex/Flex';
import Box from '../../../components/Box/Box';

const Purpose = () => {
  return (
    <Section
      px={'lg'}
      mt={'10xl'}
    >
      <Container
        mx={'auto'}
        container={'sm'}
      >
        <Flex
          gapY={'5xl'}
          alignItems={'center'}
          flexDirection={'column'}
        >
          <Text
            as={'h2'}
            size={16}
            align={'center'}
          >
            Our purpose
          </Text>
          <Box
            mx={'auto'}
            style={{ maxWidth: '60rem' }}
            spaceY={'2xl'}
          >
            <Text
              as={'h3'}
              weight={500}
              align={'center'}
              size={{ initial: 32, sm: 56 }}
            >
              Making finance easier and more accessible
            </Text>
            <Text
              as={'p'}
              size={16}
              align={'center'}
            >
              Unlocking the full power of decentralized finance (DeFi) with our
              next-generation tools, comprehensive support, and a wide range of
              exciting opportunities, enabling users to maximize their potential
              and achieve their financial goals.
            </Text>
          </Box>
        </Flex>
      </Container>
    </Section>
  );
};

export default Purpose;

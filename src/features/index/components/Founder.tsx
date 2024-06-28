import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Text from '../../../components/Text/Text';
import Box from '../../../components/Box/Box';
import Flex from '../../../components/Flex/Flex';

const Founder = () => {
  return (
    <Section
      mt={'max'}
      px={'md'}
    >
      <Container
        mx={'auto'}
        container={'sm'}
      >
        <Box>
          <Text
            as={'h2'}
            align={'center'}
            size={{ initial: 21, sm: 25 }}
          >
            Designed by founders and engineers to foster business growth, manage
            finances, and create lasting customer relationships.
          </Text>
        </Box>
      </Container>

      <Container
        mx={'auto'}
        container={'xl'}
        mt={{ initial: '5xl', md: '8xl' }}
      >
        <Flex
          p={'8xl'}
          radius={'2xl'}
          alignItems={'center'}
          justifyContent={'end'}
          backgroundColor={'gray-100'}
          style={{ minHeight: '80vh' }}
        ></Flex>
      </Container>
    </Section>
  );
};

export default Founder;

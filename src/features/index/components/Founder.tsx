import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Text from '../../../components/Text/Text';
import Box from '../../../components/Box/Box';
import Flex from '../../../components/Flex/Flex';
import Image from '../../../components/Image/Image';

const Founder = () => {
  return (
    <Section
      px={'lg'}
      mt={'max'}
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
          p={'5xl'}
          radius={'2xl'}
          justifyContent={'center'}
          backgroundColor={'gray-100'}
          aspectRatio={{ initial: '9/16', lg: '16/9' }}
        >
          <Image
            radius={'lg'}
            alt={'managing user notifications'}
            src={'/assets/svgs/managing-notifications.svg'}
          />
        </Flex>
      </Container>
    </Section>
  );
};

export default Founder;

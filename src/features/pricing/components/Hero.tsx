import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Flex from '../../../components/Flex/Flex';
import Text from '../../../components/Text/Text';
import Button from '../../../components/Button/Button';
import Anchor from '../../../components/Link/Anchor';

const Hero = () => {
  return (
    <Section
      px={'lg'}
      mt={{ initial: '5xl', sm: '8xl' }}
    >
      <Container
        mx={'auto'}
        container={'xs'}
      >
        <Flex
          gapY={'3xl'}
          alignItems={'center'}
          flexDirection={'column'}
          justifyContent={'center'}
        >
          <Text
            as={'h1'}
            weight={500}
            align={'center'}
            size={{ initial: 40, sm: 64, md: 80 }}
          >
            Start for free. Pay as you grow
          </Text>
          <Text
            size={16}
            weight={500}
            align={'center'}
          >
            Choose the best plan for your business. Change plans whenever you
            need to.
          </Text>

          <Flex
            gapY={'xl'}
            alignItems={'center'}
            flexDirection={'column'}
            style={{ maxWidth: '38rem' }}
          >
            <Anchor to={'/auth/new/'}>
              <Button>Start spending on For free</Button>
            </Anchor>
            <Text
              as={'p'}
              size={14}
              align={'center'}
              color={'gray-50'}
            >
              Try Pi-Transact Free up to 10,500 monthly active users. No credit
              card required.
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
};

export default Hero;

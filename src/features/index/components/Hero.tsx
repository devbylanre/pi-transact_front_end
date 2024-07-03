import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Text from '../../../components/Text/Text';
import Flex from '../../../components/Flex/Flex';
import Button from '../../../components/Button/Button';
import Image from '../../../components/Image/Image';
import { Link } from 'react-router-dom';
import { InView } from 'react-intersection-observer';

const Hero = () => {
  return (
    <Section px={'lg'}>
      <Container
        mx={'auto'}
        container={'xl'}
      >
        <Flex
          mx={'auto'}
          gapY={'5xl'}
          alignItems={'center'}
          flexDirection={'column'}
          justifyContent={'center'}
          style={{ minHeight: '85vh', maxWidth: '80rem' }}
        >
          <Text
            as={'h1'}
            weight={500}
            align={'center'}
            size={{ initial: 56, sm: 80, lg: 96 }}
          >
            App for ambitious founders
          </Text>
          <Text
            as={'h2'}
            align={'center'}
            color={'gray-20'}
            size={{ initial: 21, sm: 25 }}
            style={{ maxWidth: '56rem' }}
          >
            Manage and grow your finances leveraging Pi network. Start your Pi
            journey today
          </Text>

          <Flex
            gap={'lg'}
            justifyContent={'center'}
          >
            <Link to={'/register/'}>
              <Button>Open Account</Button>
            </Link>
            <Link to={'/app/'}>
              <Button
                backgroundColor={'gray-100'}
                pseudos={{ hover: { backgroundColor: 'gray-95' } }}
              >
                Talk to Us
              </Button>
            </Link>
          </Flex>
        </Flex>

        <Flex
          mb={'2xl'}
          radius={'2xl'}
          justifyContent={'center'}
          backgroundColor={'gray-100'}
          p={{ initial: 'xl', sm: '5xl' }}
          aspectRatio={{ initial: '9/16', sm: '16/9' }}
        >
          <InView>
            {({ inView, ref }) => (
              <Image
                ref={ref}
                radius={'lg'}
                alt={'user registration'}
                scale={inView ? 100 : 75}
                opacity={inView ? 100 : 0}
                src={'/assets/svgs/register-page-one.svg'}
              />
            )}
          </InView>
        </Flex>

        <Text
          size={14}
          color={'gray-40'}
        >
          Keep track of your transactions from a single dashboard
        </Text>
      </Container>
    </Section>
  );
};

export default Hero;

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
    <Section
      px={'lg'}
      mt={{ initial: '2xl', sm: '8xl' }}
    >
      <Container
        mx={'auto'}
        container={'xl'}
      >
        <Flex
          gapY={'xl'}
          flexDirection={'column'}
          style={{ maxWidth: '60rem' }}
        >
          <Text
            as={'h1'}
            weight={500}
            size={{ initial: 40, sm: 80 }}
          >
            Manage your finance like Pro's
          </Text>
          <Text
            as={'h2'}
            color={'gray-20'}
            size={{ initial: 21, sm: 25 }}
            style={{ maxWidth: '56rem' }}
          >
            Manage and grow your finances leveraging Pi network. Start your Pi
            journey today
          </Text>

          <Flex gap={'lg'}>
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
          mt={'5xl'}
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

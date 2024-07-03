import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Box from '../../../components/Box/Box';
import Text from '../../../components/Text/Text';
import Grid from '../../../components/Grid/Grid';
import Image from '../../../components/Image/Image';
import Flex from '../../../components/Flex/Flex';
import { InView } from 'react-intersection-observer';

const features = [
  {
    title: 'Get an address',
    body: 'Join Pi-Transact today and receive your very own Pi Network wallet address, giving you a secure and efficient platform to handle all your Pi transactions. Pi-Transact provides a comprehensive suite of tools and features that ensure your cryptocurrency dealings are smooth and secure.',
  },
  {
    title: 'Founders tools',
    body: "Leverage the unique business tools we've put in place for your customers. These tools are designed to help you manage recurring payments seamlessly and handle enhance customer satisfaction.",
  },
  {
    title: 'Free for founders',
    body: 'Get free access forever, with absolutely no hidden costs. We promise a transparent experience with no surprise charges or fees.',
  },
];

const Save = () => {
  return (
    <Section
      px={'lg'}
      mt={'max'}
    >
      <Container
        mx={'auto'}
        container={'lg'}
      >
        <Box
          mx={'auto'}
          spaceY={{ initial: 'xl', md: '4xl' }}
          style={{ maxWidth: '64rem' }}
        >
          <Text
            as={'h2'}
            weight={500}
            align={'center'}
            size={{ initial: 32, sm: 56, lg: 64 }}
          >
            Save. Send. Spend.
          </Text>
          <Text
            as={'h3'}
            weight={500}
            align={'center'}
            size={{ initial: 17, md: 19 }}
          >
            Anyone can get started building and growing their business on
            Pi-Transact — with one-to-one guidance to suit the way you learn.
          </Text>
        </Box>

        <Flex
          mt={'5xl'}
          radius={'2xl'}
          justifyContent={'center'}
          backgroundColor={'gray-100'}
          p={{ initial: 'xl', sm: '5xl' }}
          aspectRatio={{ initial: '9/16', sm: '16/9' }}
          style={{ overflow: 'hidden' }}
        >
          <InView>
            {({ inView, ref }) => (
              <Image
                ref={ref}
                radius={'lg'}
                opacity={inView ? 1 : 0}
                alt={'handyman-commission'}
                src={'/assets/svgs/handyman.svg'}
                translateY={inView ? 'min' : 'max'}
              />
            )}
          </InView>
        </Flex>

        <Grid
          mt={'5xl'}
          gridColumn={{ initial: 1, sm: 3 }}
          gap={{ initial: '4xl', md: '8xl' }}
        >
          {features.map((feature, index) => (
            <Box
              key={index}
              spaceY={'lg'}
            >
              <Text
                as={'h3'}
                weight={500}
                size={{ initial: 21, sm: 25 }}
              >
                {feature.title}
              </Text>
              <Text
                as={'p'}
                size={16}
              >
                {feature.body}
              </Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Save;

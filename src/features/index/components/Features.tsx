import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Box from '../../../components/Box/Box';
import Text from '../../../components/Text/Text';
import Flex from '../../../components/Flex/Flex';
import Button from '../../../components/Button/Button';
import Grid from '../../../components/Grid/Grid';
import { Link } from 'react-router-dom';
import Image from '../../../components/Image/Image';
import { InView } from 'react-intersection-observer';

const features = [
  {
    caption: 'Powerful, flexible feature management',
    title: 'Powerful feature management',
    image: {
      alt: 'user-registration-mobile',
      src: '/assets/svgs/register.svg',
    },
    body: 'Deliver new experiences and increase the speed that your team deploys, learns and releases with feature-based continuous deployment.',
    button: { label: 'Learn more about Pi-Transact', url: '/about/' },
  },
  {
    caption: 'Smart recurring payment feature',
    title: 'Done it before. Do it quick',
    image: {
      alt: 'admin-store-mobile',
      src: '/assets/svgs/store.svg',
    },
    body: 'This convenient feature allows you to avoid the repetitive task of manually making payments each time, ensuring that your finances stay on track effortlessly.',
    button: { label: 'Feature roadmap', url: '/about/' },
  },
];

const Features = () => {
  return (
    <Section
      px={'lg'}
      mt={'max'}
    >
      <Container
        mt={'8xl'}
        mx={'auto'}
        container={'lg'}
      >
        <Box style={{ maxWidth: '56rem' }}>
          <Text
            as={'h2'}
            weight={500}
            size={{ initial: 40, sm: 80 }}
          >
            More features. More you.
          </Text>
        </Box>

        <Grid
          mt={'5xl'}
          gap={'5xl'}
          alignItems={'start'}
          gridColumn={{ initial: 1, sm: 2 }}
        >
          {features.map((feature, index) => (
            <Flex
              key={index}
              alignItems={'start'}
              flexDirection={'column'}
            >
              <Box
                mb={'2xl'}
                width={'full'}
                radius={'2xl'}
                backgroundColor={'gray-100'}
                style={{ overflow: 'hidden' }}
                p={{ initial: 'md', sm: 'xl' }}
              >
                <InView>
                  {({ inView, ref }) => (
                    <Image
                      ref={ref}
                      size={'full'}
                      radius={'lg'}
                      aspectRatio={'1/1'}
                      objectFit={'cover'}
                      src={feature.image.src}
                      alt={feature.image.alt}
                      opacity={inView ? 1 : 0}
                      translateY={inView ? 'min' : 'max'}
                      transitionDelay={index === 1 ? 300 : 'min'}
                    />
                  )}
                </InView>
              </Box>

              <Text
                size={14}
                color={'gray-40'}
              >
                {feature.caption}
              </Text>
              <Box
                my={'3xl'}
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
              <Link to={feature.button.url}>
                <Button
                  height={'fit'}
                  px={'min'}
                  radius={'min'}
                  border={0}
                  transitionDuration={100}
                  backgroundColor={'transparent'}
                  pseudos={{ hover: { borderBottom: 2 } }}
                >
                  {feature.button.label}
                </Button>
              </Link>
            </Flex>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Features;

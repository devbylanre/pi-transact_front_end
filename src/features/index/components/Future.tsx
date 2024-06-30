import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Text from '../../../components/Text/Text';
import Flex from '../../../components/Flex/Flex';
import { InView, useInView } from 'react-intersection-observer';
import Image from '../../../components/Image/Image';
import Box from '../../../components/Box/Box';

const Future = () => {
  const { ref, inView } = useInView({ rootMargin: '-15% 0% -15% 0%' });

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
          ref={ref}
          mx={'auto'}
          spaceY={'4xl'}
          transition={'all'}
          transitionDuration={500}
          opacity={inView ? 100 : 0}
          translateY={inView ? 'min' : '3xl'}
          transitionTimingFunction={'ease-in-out'}
          style={{ maxWidth: '68rem' }}
        >
          <Text
            as={'h2'}
            weight={500}
            align={'center'}
            size={{ initial: 48, md: 56, lg: 64 }}
          >
            The future of finance
          </Text>
          <Text
            as={'h3'}
            size={17}
            weight={500}
            align={'center'}
          >
            When it comes to what you pay, we believe that software pricing
            should be transparent and based around shared value. We also believe
            in investing in your growth – as you grow you pay for what you use –
            and unit costs come down as you use more. Fair and simple.
          </Text>
        </Box>

        <Flex
          p={'5xl'}
          mt={'8xl'}
          radius={'2xl'}
          justifyContent={'center'}
          backgroundColor={'gray-100'}
          aspectRatio={{ initial: '9/16', sm: '16/9' }}
        >
          <InView>
            {({ inView, ref }) => (
              <Image
                ref={ref}
                radius={'lg'}
                alt={'review'}
                opacity={inView ? 1 : 0}
                scale={inView ? 100 : 75}
                src={'/assets/svgs/review.svg'}
              />
            )}
          </InView>
        </Flex>
      </Container>
    </Section>
  );
};

export default Future;

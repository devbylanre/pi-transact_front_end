import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Text from '../../../components/Text/Text';
import Box from '../../../components/Box/Box';
import Flex from '../../../components/Flex/Flex';
import { useInView } from 'react-intersection-observer';

const Spend = () => {
  const { ref, inView } = useInView({ rootMargin: '-15% 0% -15% 0%' });

  return (
    <Section mt={'max'}>
      <Container
        mx={'auto'}
        container={'xs'}
      >
        <Box
          ref={ref}
          spaceY={'4xl'}
          transition={'all'}
          transitionDuration={500}
          opacity={inView ? 100 : 0}
          translateY={inView ? 'min' : '3xl'}
          transitionTimingFunction={'ease-in-out'}
        >
          <Text
            as={'h2'}
            weight={500}
            align={'center'}
            size={{ initial: 48, md: 56, lg: 64 }}
          >
            The future of finance <br /> - at your tip
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
      </Container>

      <Container
        mt={'8xl'}
        mx={'auto'}
        container={'lg'}
      >
        <Flex
          radius={'2xl'}
          style={{ aspectRatio: '4/2' }}
          backgroundColor={'gray-100'}
        ></Flex>
      </Container>
    </Section>
  );
};

export default Spend;

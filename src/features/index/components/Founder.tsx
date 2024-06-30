import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Text from '../../../components/Text/Text';
import Box from '../../../components/Box/Box';
import Flex from '../../../components/Flex/Flex';
import Image from '../../../components/Image/Image';
import { InView } from 'react-intersection-observer';

const Founder = () => {
  return (
    <Section
      px={'lg'}
      mt={'max'}
    >
      <Container
        mx={'auto'}
        container={'xl'}
      >
        <Box
          mx={'auto'}
          style={{ maxWidth: '72rem' }}
        >
          <Text
            as={'h2'}
            align={'center'}
            size={{ initial: 21, sm: 25 }}
          >
            Designed by founders and engineers to foster business growth, manage
            finances, and create lasting customer relationships.
          </Text>
        </Box>

        <Flex
          mt={'5xl'}
          radius={'2xl'}
          justifyContent={'center'}
          backgroundColor={'gray-100'}
          p={{ initial: 'md', sm: '5xl' }}
          aspectRatio={{ initial: '9/16', lg: '16/9' }}
          style={{ overflow: 'hidden' }}
        >
          <InView>
            {({ inView, ref }) => (
              <Image
                ref={ref}
                radius={'lg'}
                opacity={inView ? 1 : 0}
                translateY={inView ? 'min' : 'max'}
                alt={'managing user notifications'}
                src={'/assets/svgs/managing-notifications.svg'}
              />
            )}
          </InView>
        </Flex>
      </Container>
    </Section>
  );
};

export default Founder;

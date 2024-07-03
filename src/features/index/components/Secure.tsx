import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Box from '../../../components/Box/Box';
import Text from '../../../components/Text/Text';
import Flex from '../../../components/Flex/Flex';
import { useInView } from 'react-intersection-observer';
import Anchor from '../../../components/Link/Anchor';

const Secure = () => {
  const { ref, inView } = useInView({ rootMargin: '-30% 0% -30% 0%' });

  return (
    <Section
      px={'lg'}
      mt={'max'}
    >
      <Container
        mx={'auto'}
        container={'lg'}
      >
        <Flex
          gapY={'5xl'}
          radius={'2xl'}
          alignItems={'center'}
          flexDirection={'column'}
          justifyContent={'between'}
          backgroundColor={'gray-100'}
          p={{ initial: '3xl', md: '5xl' }}
          aspectRatio={{ initial: '1/1', sm: '2/1', md: '3/2' }}
        >
          <Flex
            flex={'full'}
            flexDirection={'column'}
            justifyContent={'center'}
          >
            <Text
              ref={ref}
              as={'h2'}
              weight={500}
              align={'center'}
              size={{ initial: 32, sm: 48, md: 56 }}
              className={`${inView && 'animate--secureText'} secureText`}
            >
              <Text
                size={'inherit'}
                weight={500}
              >
                {' '}
                by default
              </Text>
            </Text>
          </Flex>

          <Box style={{ maxWidth: '50rem' }}>
            <Text
              as={'p'}
              size={16}
              align={'center'}
            >
              We prioritize the safety of you and your customers. Pi-Transact is
              designed with top-tier security measures.
            </Text>
          </Box>

          <Anchor
            to={'/about/'}
            align={'center'}
          >
            Learn more about Security
          </Anchor>
        </Flex>
      </Container>
    </Section>
  );
};

export default Secure;

import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Box from '../../../components/Box/Box';
import Text from '../../../components/Text/Text';
import Flex from '../../../components/Flex/Flex';
import Button from '../../../components/Button/Button';
import { useInView } from 'react-intersection-observer';

const Protect = () => {
  const { ref, inView } = useInView({ rootMargin: '-30% 0% -30% 0%' });

  return (
    <Section
      px={'md'}
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
          p={{ initial: '2xl', md: '5xl' }}
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
              size={{ initial: 40, sm: 48, md: 56 }}
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
              We’ll keep you and your customers safe. Pi-Transact is built using
              best in class security protocols.
            </Text>
          </Box>

          <Button
            px={'min'}
            border={0}
            height={'fit'}
            radius={'min'}
            align={'center'}
            transitionDuration={200}
            backgroundColor={'inherit'}
            pseudos={{ hover: { borderBottom: 1 } }}
          >
            Learn more about Security at Pi-Transact
          </Button>
        </Flex>
      </Container>
    </Section>
  );
};

export default Protect;

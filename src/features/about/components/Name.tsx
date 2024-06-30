import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Box from '../../../components/Box/Box';
import Text from '../../../components/Text/Text';
import Flex from '../../../components/Flex/Flex';

const Name = () => {
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
          spaceY={'4xl'}
          style={{ maxWidth: '72rem' }}
        >
          <Text
            as={'h2'}
            weight={500}
            align={'center'}
            size={{ initial: 25, md: 32 }}
          >
            Why choose us?
          </Text>
          <Text
            as={'h3'}
            weight={500}
            align={'center'}
            size={{ initial: 56, sm: 64, lg: 80 }}
          >
            New Experience
          </Text>

          <Text
            as={'p'}
            size={16}
            align={'center'}
          >
            We named ourselves Pi-Transact because our goal is to foster greater
            prosperity globally. We dedicate considerable effort to envisioning
            a future where more innovators thrive. Innovators are pivotal in
            transforming our world for the better, enhancing the lives of their
            users and customers, and ultimately benefiting humanity as a whole.
          </Text>
        </Box>

        <Flex
          mt={'5xl'}
          radius={'4xl'}
          flexDirection={'column'}
          justifyContent={'center'}
          backgroundColor={'gray-100'}
          p={{ initial: 'xl', sm: '4xl' }}
          aspectRatio={{ initial: '1/1', sm: '16/7' }}
        >
          <Flex
            flex={'full'}
            alignItems={'center'}
            flexDirection={'column'}
            justifyContent={'center'}
          >
            <Text
              as={'h4'}
              weight={500}
              align={'center'}
              size={{ initial: 32, sm: 48 }}
              style={{ maxWidth: '90rem' }}
            >
              "Experience new De-Fi."
            </Text>
          </Flex>
          <Box>
            <Text
              size={12}
              color={'gray-40'}
            >
              Words from Pi-Transact CEO
            </Text>
          </Box>
        </Flex>
      </Container>
    </Section>
  );
};

export default Name;

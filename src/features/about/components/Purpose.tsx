import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Box from '../../../components/Box/Box';
import Text from '../../../components/Text/Text';
import Flex from '../../../components/Flex/Flex';

const Purpose = () => {
  return (
    <Section
      mt={'10xl'}
      px={'md'}
    >
      <Container
        mx={'auto'}
        container={'sm'}
      >
        <Flex
          gapY={'4xl'}
          alignItems={'center'}
          flexDirection={'column'}
        >
          <Text
            as={'h2'}
            size={16}
            align={'center'}
          >
            Our purpose
          </Text>
          <Text
            as={'h3'}
            weight={500}
            align={'center'}
            size={{ initial: 48, md: 56 }}
            style={{ maxWidth: '60rem' }}
          >
            Making financing easier and more accessible
          </Text>
          <Text
            as={'p'}
            size={16}
            align={'center'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            fugiat unde ipsa maxime autem dolores ratione ullam ex, et nostrum
            aperiam ducimus dolorem! Iure, nobis error. Culpa cum quibusdam
            dolorem.
          </Text>
        </Flex>
      </Container>
    </Section>
  );
};

export default Purpose;

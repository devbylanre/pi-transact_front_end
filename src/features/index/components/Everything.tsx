import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Box from '../../../components/Box/Box';
import Text from '../../../components/Text/Text';
import Flex from '../../../components/Flex/Flex';
import Button from '../../../components/Button/Button';
import Grid from '../../../components/Grid/Grid';

const Everything = () => {
  return (
    <Section
      mt={'max'}
      px={'md'}
    >
      <Container
        mt={'8xl'}
        mx={'auto'}
        container={'lg'}
      >
        <Box>
          <Text
            as={'h2'}
            size={{ initial: 56, sm: 64, lg: 80 }}
            weight={500}
          >
            Go further with more features
          </Text>
        </Box>

        <Grid
          mt={'6xl'}
          gap={'3xl'}
          gridColumn={{ initial: 1, md: 2 }}
          alignItems={'start'}
        >
          {Array.from('ab').map((char) => (
            <Flex
              key={char}
              alignItems={'start'}
              flexDirection={'column'}
            >
              <Flex
                mb={'xl'}
                radius={'2xl'}
                width={'full'}
                alignItems={'center'}
                justifyContent={'center'}
                backgroundColor={'gray-100'}
                style={{ minHeight: '80vh' }}
              ></Flex>
              <Text
                size={14}
                color={'gray-40'}
              >
                Powerful, flexible feature management
              </Text>
              <Box
                my={'3xl'}
                spaceY={'lg'}
              >
                <Text
                  as={'h3'}
                  size={21}
                  weight={500}
                >
                  Powerful feature management
                </Text>
                <Text as={'p'}>
                  Deliver new experiences and increase the speed that your team
                  deploys, learns and releases with feature-based continuous
                  deployment.
                </Text>
              </Box>
              <Button
                height={'fit'}
                px={'min'}
                radius={'min'}
                border={0}
                transitionDuration={100}
                backgroundColor={'transparent'}
                pseudos={{ hover: { borderBottom: 2 } }}
              >
                Learn more about Pi-Transact
              </Button>
            </Flex>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Everything;

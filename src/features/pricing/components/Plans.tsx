import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Text from '../../../components/Text/Text';
import Grid from '../../../components/Grid/Grid';
import plans from '../../../data/plans';
import Box from '../../../components/Box/Box';
import Button from '../../../components/Button/Button';
import Flex from '../../../components/Flex/Flex';
import { TbCheck } from 'react-icons/tb';

const Plans = () => {
  return (
    <Section
      px={'lg'}
      mt={'10xl'}
    >
      <Container
        mx={'auto'}
        container={'lg'}
      >
        <Text
          as={'h2'}
          size={25}
          weight={500}
        >
          Plans and pricing
        </Text>

        <Grid
          mt={{ initial: 'lg', sm: '5xl' }}
          gridColumn={{ initial: 1, sm: 3 }}
          gap={{ initial: '2xl', sm: '5xl', md: '10xl' }}
        >
          {plans.map((plan, index) => (
            <React.Fragment key={index}>
              {index > 1 ? (
                <Box
                  radius={'2xl'}
                  px={index === 3 ? { initial: 'xl', sm: '4xl' } : 'min'}
                  py={{ initial: '5xl', sm: '8xl' }}
                  backgroundColor={index === 3 ? 'gray-100' : 'inherit'}
                >
                  <Box spaceY={'3xl'}>
                    <Text
                      as={'h3'}
                      size={25}
                      weight={500}
                      transform={'capitalize'}
                    >
                      {plan.name}
                    </Text>
                    <Text
                      as={'p'}
                      size={16}
                      weight={500}
                    >
                      {plan.description}
                    </Text>
                  </Box>
                  <Box
                    mt={'5xl'}
                    spaceY={'2xl'}
                  >
                    <Text
                      as={'p'}
                      size={16}
                    >
                      Starting at
                    </Text>
                    <Text
                      as={'h4'}
                      size={25}
                      weight={500}
                    >
                      ${plan.price}
                      <Text
                        size={14}
                        weight={500}
                        color={'gray-40'}
                      >
                        {' '}
                        USD per month
                      </Text>
                    </Text>
                    <Text
                      as={'p'}
                      size={14}
                      color={'gray-40'}
                      transform={'capitalize'}
                    >
                      Experience new features for free on this plan. All user is
                      eligible.
                    </Text>
                    <Button>Start spending now</Button>
                  </Box>
                  <Box mt={'8xl'}>
                    <Text
                      as={'h5'}
                      size={14}
                    >
                      All features in{' '}
                      <Text
                        weight={500}
                        size={'inherit'}
                        transform={'capitalize'}
                      >
                        {plans[index - 1].name} and :
                      </Text>
                    </Text>
                  </Box>

                  <Box
                    as={'ul'}
                    mt={'2xl'}
                    spaceY={'2xs'}
                  >
                    {plan.features.map((feature, index) => (
                      <Flex
                        gapX={'md'}
                        key={index}
                      >
                        <TbCheck size={16} />
                        <Text
                          size={14}
                          color={'gray-40'}
                          className='flex-full'
                        >
                          {feature}
                        </Text>
                      </Flex>
                    ))}
                  </Box>
                </Box>
              ) : null}
            </React.Fragment>
          ))}
        </Grid>
      </Container>

      <Container
        mx={'auto'}
        container={'xl'}
        mt={{ initial: '10xl', sm: 'max' }}
      >
        <Text
          as={'h2'}
          size={25}
          weight={500}
        >
          Alternative plans for your business
        </Text>

        <Grid
          gap={'4xl'}
          mt={{ initial: 'xl', sm: '5xl' }}
          gridColumn={{ initial: 1, sm: 2 }}
        >
          {plans.map((plan, index) => (
            <React.Fragment key={index}>
              {index < 2 ? (
                <Box
                  radius={'2xl'}
                  backgroundColor={'gray-100'}
                  p={{ initial: '2xl', sm: '5xl' }}
                >
                  <Box spaceY={'3xl'}>
                    <Text
                      as={'h3'}
                      weight={500}
                      transform={'capitalize'}
                      size={{ initial: 32, sm: 48 }}
                    >
                      {plan.name}
                    </Text>
                    <Text
                      as={'p'}
                      size={16}
                      weight={500}
                    >
                      {plan.description}
                    </Text>
                  </Box>

                  <Box mt={'8xl'}>
                    <Button>Start building on {plan.name}</Button>
                  </Box>

                  <Box mt={'8xl'}>
                    <Text
                      size={14}
                      color={'gray-40'}
                    >
                      What's included in{' '}
                      <Text
                        weight={500}
                        size={'inherit'}
                      >
                        {plan.name}
                      </Text>
                    </Text>
                  </Box>

                  <Box
                    as={'ul'}
                    mt={'2xl'}
                    spaceY={'2xs'}
                  >
                    {plan.features.map((feature, index) => (
                      <Flex
                        gapX={'md'}
                        key={index}
                      >
                        <TbCheck size={16} />
                        <Text
                          size={14}
                          color={'gray-40'}
                          className='flex-full'
                        >
                          {feature}
                        </Text>
                      </Flex>
                    ))}
                  </Box>
                </Box>
              ) : null}
            </React.Fragment>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Plans;

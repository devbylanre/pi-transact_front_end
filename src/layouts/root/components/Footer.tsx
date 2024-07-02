import React from 'react';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';
import Text from '../../../components/Text/Text';
import Box from '../../../components/Box/Box';
import Grid from '../../../components/Grid/Grid';
import { Link } from 'react-router-dom';
import Flex from '../../../components/Flex/Flex';
import navigation from '../../../data/navigation';

const Footer = () => {
  return (
    <Section
      mt={'max'}
      pt={'10xl'}
      pb={'xl'}
      as={'footer'}
      backgroundColor={'gray-100'}
    >
      <Container
        px={'lg'}
        mx={'auto'}
        container={'lg'}
      >
        <Grid
          gap={{ initial: '3xl', md: '8xl' }}
          gridColumn={{ initial: 2, sm: 5 }}
        >
          {Object.keys(navigation).map((key) => (
            <React.Fragment key={key}>
              {navigation[key as 'products'].categories
                ? navigation[key as 'products'].categories.map((category) => (
                    <Box
                      key={category.name}
                      spaceY={'xl'}
                    >
                      <Text
                        as={'h3'}
                        size={16}
                        transform={'capitalize'}
                      >
                        {category.name}
                      </Text>
                      <Box spaceY={'md'}>
                        {category.subCategories.map((subCategory, index) => (
                          <Box key={index}>
                            <Link
                              to={subCategory.path}
                              style={{
                                display: 'block',
                                textDecoration: 'none',
                              }}
                            >
                              <Text size={13}>{subCategory.name}</Text>
                            </Link>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  ))
                : null}
            </React.Fragment>
          ))}
        </Grid>
      </Container>

      <Container
        px={'sm'}
        mt={'10xl'}
        mx={'auto'}
        container={'lg'}
      >
        <Grid
          gap={'md'}
          gridColumn={{ initial: 1, md: 3 }}
        >
          <Box>
            <Text size={13}>Multi-language dropdown feature.</Text>
          </Box>

          <Box>
            <Text
              as={'h4'}
              size={13}
              align={{ initial: 'left', md: 'center' }}
              color={'gray-40'}
            >
              &copy; Pi-Transact , Inc. All rights reserved
            </Text>
          </Box>

          <Flex justifyContent={{ initial: 'start', md: 'end' }}>
            <Text size={13}>Social icons feature.</Text>
          </Flex>
        </Grid>
      </Container>
    </Section>
  );
};

export default Footer;

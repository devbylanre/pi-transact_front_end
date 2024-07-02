import React from 'react';
import Grid from '../../../components/Grid/Grid';
import navigation from '../../../data/navigation';
import Box from '../../../components/Box/Box';
import Text from '../../../components/Text/Text';
import { Link } from 'react-router-dom';
import useModal from '../../../hooks/useModal';
import Flex from '../../../components/Flex/Flex';
import Image from '../../../components/Image/Image';

const ResourcesMenu = () => {
  const { setIsOpen } = useModal();

  return (
    <Grid
      py={'5xl'}
      placeContent={'center'}
      gridColumn={{ initial: 1, md: 4 }}
      gap={{ initial: '2xl', lg: '5xl' }}
    >
      {navigation.resources.categories.map((category, index) => (
        <Box key={index}>
          <Box px={'md'}>
            <Text
              as={'p'}
              size={12}
              color={'gray-40'}
            >
              {category.name}
            </Text>
          </Box>

          <Box
            as={'ul'}
            mt={'xl'}
            spaceY={'4xs'}
            style={{ listStyleType: 'none' }}
          >
            {category.subCategories.map((subCategory, index) => (
              <Box
                as={'li'}
                key={index}
                radius={'2xl'}
                width={'full'}
                cursor={'pointer'}
                backgroundColor={'inherit'}
                onClick={() => setIsOpen(false)}
                pseudos={{ hover: { backgroundColor: 'gray-100' } }}
              >
                <Link
                  to={subCategory.path}
                  style={{ display: 'block', textDecoration: 'none' }}
                  className='p-md'
                >
                  <Text
                    size={16}
                    weight={500}
                  >
                    {subCategory.name}
                  </Text>
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
      ))}

      <Box
        spaceY={'xl'}
        gridColumnSpan={{ initial: 1, md: 2 }}
      >
        <Flex
          radius={'2xl'}
          aspectRatio={'16/9'}
          justifyContent={'center'}
          backgroundColor={'gray-100'}
          p={{ initial: 'xl', sm: '2xl' }}
          display={{ initial: 'hidden', md: 'block' }}
        >
          <Image
            size={'full'}
            alt={'user-membership'}
            src={'/assets/svgs/membership.svg'}
          />
        </Flex>
        <Box spaceY={'xs'}>
          <Text
            as={'h3'}
            size={21}
            weight={500}
          >
            Spread the funds. Join the club.
          </Text>
          <Text
            size={16}
            color={'gray-40'}
          >
            Sign up and become a member.
          </Text>
        </Box>
      </Box>
    </Grid>
  );
};

export default ResourcesMenu;

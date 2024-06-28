import React from 'react';
import Box from '../../../components/Box/Box';
import Grid from '../../../components/Grid/Grid';
import Text from '../../../components/Text/Text';
import { Link } from 'react-router-dom';
import navigation from '../../../data/navigation';
import useModal from '../../../hooks/useModal';

const ProductMenu = () => {
  const { setIsOpen } = useModal();

  return (
    <Grid
      py={'5xl'}
      placeContent={'center'}
      gap={{ initial: '2xl', md: '5xl' }}
      gridColumn={{ initial: 1, md: 2, lg: 4 }}
    >
      {navigation['products'].categories.map((category, index) => (
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
                p={'md'}
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
    </Grid>
  );
};

export default ProductMenu;

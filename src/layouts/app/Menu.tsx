import React from 'react';
import Flex from '../../components/Flex/Flex';
import Text from '../../components/Text/Text';
import { NavLink } from 'react-router-dom';
import { IconType } from 'react-icons';

type MenuProps = {
  menus: { name: string; path: string; icon: IconType }[];
  flex: 'full' | 'none';
};

const Menu = ({ menus, flex }: MenuProps) => {
  return (
    <React.Fragment>
      {menus.map((menu) => (
        <NavLink
          key={menu.name}
          to={menu.path}
          style={{ display: 'block', width: '100%', textDecoration: 'none' }}
        >
          {({ isActive }) => (
            <Flex
              px={'md'}
              gapX={'md'}
              gapY={'2xs'}
              radius={'2xl'}
              width={'full'}
              cursor={'pointer'}
              alignItems={'center'}
              height={{ initial: 56, md: 40 }}
              flexDirection={{ initial: 'column', md: 'row' }}
              justifyContent={{ initial: 'center', md: 'start' }}
              pseudos={{ hover: { backgroundColor: 'primary-95' } }}
            >
              <menu.icon
                size={20}
                className='text-primary-30 size-24 md:size-20'
              />
              <Text
                transform={'capitalize'}
                size={{ initial: 12, md: 16 }}
                className={'display-hidden md:display-inline'}
              >
                {menu.name}
              </Text>
            </Flex>
          )}
        </NavLink>
      ))}
    </React.Fragment>
  );
};

export default Menu;

import React from 'react';
import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import User from './User';
import Flex from '../../components/Flex/Flex';
import Menu from './Menu';

import {
  TbIcons,
  TbArrowUpRight,
  TbChartLine,
  TbRefresh,
  TbTextCaption,
  TbSettings,
  TbMessage2,
} from 'react-icons/tb';

const primaryMenus = [
  { name: 'overview', path: '/app/', icon: TbIcons },
  { name: 'send', path: '/app/', icon: TbArrowUpRight },
  { name: 'analytics', path: '/app/', icon: TbChartLine },
  { name: 'history', path: '/app/', icon: TbRefresh },
  { name: 'bills', path: '/app/', icon: TbTextCaption },
];

const secondaryMenus = [
  { name: 'settings', path: '/app/', icon: TbSettings },
  { name: 'help', path: '/app/', icon: TbMessage2 },
];

const Sidebar = () => {
  return (
    <Section>
      <Container
        left={0}
        position={'fixed'}
        backgroundColor={'white'}
        bottom={{ initial: 0 }}
        container={{ initial: 'full', md: 'min' }}
      >
        <Flex
          gapY={'3xl'}
          flexDirection={'column'}
          p={{ initial: 'sm', md: 'lg' }}
          height={{ initial: 'auto', md: 'max' }}
        >
          <Flex
            gapX={'sm'}
            alignItems={'center'}
            display={{ initial: 'hidden', md: 'flex' }}
          >
            <User />
          </Flex>
          <Flex
            gap={'xs'}
            flex={'full'}
            width={'full'}
            flexDirection={{ initial: 'row', md: 'column' }}
          >
            <Menu
              flex={'full'}
              menus={primaryMenus}
            />
          </Flex>

          <Flex
            gap={'xs'}
            width={'full'}
            display={{ initial: 'hidden', md: 'flex' }}
            flexDirection={{ initial: 'row', md: 'column' }}
          >
            <Menu
              flex={'none'}
              menus={secondaryMenus}
            />
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
};

export default Sidebar;

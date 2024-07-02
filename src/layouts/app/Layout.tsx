import React from 'react';
import Sidebar from './Sidebar';
import Box from '../../components/Box/Box';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import { InView } from 'react-intersection-observer';

const AppLayout = () => {
  return (
    <InView>
      {({ inView, ref }) => (
        <Box
          ref={ref}
          height={'max'}
          transition={'all'}
          opacity={inView ? 1 : 0}
          transitionDuration={300}
          backgroundColor={'gray-100'}
          transitionTimingFunction={'ease-in'}
        >
          <Sidebar />
          <Box className={'app-sidebar-left'}>
            <Header />
            <Outlet />
          </Box>
        </Box>
      )}
    </InView>
  );
};

export default AppLayout;

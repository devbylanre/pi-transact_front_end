import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';

const RootLayout = () => {
  return (
    <React.Fragment>
      <ScrollRestoration
        getKey={(location) => {
          return location.key;
        }}
      />
      <Outlet />;
    </React.Fragment>
  );
};

export default RootLayout;

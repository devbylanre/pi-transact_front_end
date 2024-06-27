import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet-async';

const RootLayout = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Pi-Transact</title>
        <meta
          name='description'
          content='Simplifying payment using Pi'
        />
      </Helmet>

      <Header />
      <ScrollRestoration
        getKey={(location) => {
          return location.key;
        }}
      />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default RootLayout;

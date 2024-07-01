import React from 'react';
import { Helmet } from 'react-helmet-async';
import LoginFeature from '../features/login/Feature';

const LoginPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Sign in | Pi-Transact</title>
      </Helmet>
      <LoginFeature />
    </React.Fragment>
  );
};

export default LoginPage;

import React from 'react';
import RegisterFeature from '../features/register/Feature';
import { Helmet } from 'react-helmet-async';

const RegisterPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Sign up | Pi-Transact</title>
        <meta
          name={'description'}
          content={''}
        />
      </Helmet>

      <RegisterFeature />
    </React.Fragment>
  );
};

export default RegisterPage;

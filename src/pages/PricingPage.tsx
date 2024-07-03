import React from 'react';
import PricingFeature from '../features/pricing/Feature';
import { Helmet } from 'react-helmet-async';

const PricingPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Pay as you grow | Pi-transact</title>
        <meta
          name='description'
          content='Choose the best plan for your business. Change plans whenever you need to.'
        />
      </Helmet>
      <PricingFeature />
    </React.Fragment>
  );
};

export default PricingPage;

import React from 'react';
import { Helmet } from 'react-helmet-async';
import PrivacyFeature from '../features/privacy/Feature';

const PrivacyPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Our privacy policy- Pi-transact</title>
      </Helmet>
      <PrivacyFeature />
    </React.Fragment>
  );
};

export default PrivacyPage;

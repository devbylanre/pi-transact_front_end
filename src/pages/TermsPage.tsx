import React from 'react';
import { Helmet } from 'react-helmet-async';
import TermsFeature from '../features/terms/Feature';

const TermsPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Terms of service - Pi-transact</title>
      </Helmet>
      <TermsFeature />
    </React.Fragment>
  );
};

export default TermsPage;

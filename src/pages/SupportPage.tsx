import React from 'react';
import SupportFeature from '../features/support/Feature';
import { Helmet } from 'react-helmet-async';

const SupportPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Smart support for smart business | Pi-transact</title>
        <meta
          name='description'
          content='Creating a strong business culture can be challenging. Whether you\"re just beginning or already managing a thriving business, our team is here to support you in maintaining your course.'
        />
      </Helmet>
      <SupportFeature />
    </React.Fragment>
  );
};

export default SupportPage;

import React from 'react';
import AboutFeature from '../features/about/Feature';
import { Helmet } from 'react-helmet-async';

const AboutPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Here for you | Pi-transact</title>
        <meta
          name='description'
          content='Pi-Transact is a web-3 business, aiding businesses and individuals making finance more accessible leveraging the Pi-Network.'
        />
      </Helmet>
      <AboutFeature />
    </React.Fragment>
  );
};

export default AboutPage;

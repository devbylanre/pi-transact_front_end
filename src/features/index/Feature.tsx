import React from 'react';
import Hero from './components/Hero';
import Founder from './components/Founder';
import Features from './components/Features';
import Save from './components/Save';
import Secure from './components/Secure';
import Future from './components/Future';

const IndexFeature = () => {
  return (
    <React.Fragment>
      <Hero />
      <Founder />
      <Features />
      <Save />
      <Future />
      <Secure />
    </React.Fragment>
  );
};

export default IndexFeature;

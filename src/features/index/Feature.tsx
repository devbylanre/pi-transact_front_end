import React from 'react';
import Hero from './components/Hero';
import Founder from './components/Founder';
import Everything from './components/Everything';
import Customer from './components/Customer';
import Protect from './components/Protect';
import Spend from './components/Spend';

const IndexFeature = () => {
  return (
    <React.Fragment>
      <Hero />
      <Founder />
      <Everything />
      <Customer />
      <Spend />
      <Protect />
    </React.Fragment>
  );
};

export default IndexFeature;

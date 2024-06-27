import React from 'react';
import Hero from './components/Hero';
import Purpose from './components/Purpose';
import Values from './components/Values';
import Name from './components/Name';

const AboutFeature = () => {
  return (
    <React.Fragment>
      <Hero />
      <Purpose />
      <Values />
      <Name />
    </React.Fragment>
  );
};

export default AboutFeature;

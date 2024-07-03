import React from 'react';
import IndexFeature from '../features/index/Feature';
import { Helmet } from 'react-helmet-async';

const IndexPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>App for ambitious founders | Pi-Transact</title>
        <meta
          name={'description'}
          content={
            'Manage and grow your finances leveraging Pi network. Start your Pi journey today'
          }
        />
      </Helmet>
      <IndexFeature />
    </React.Fragment>
  );
};

export default IndexPage;

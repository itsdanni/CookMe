import React from 'react';
import PropTypes from 'prop-types';
import Instructions from './Instructions';

const Landing = props => {
  return (
    <main className="mt-5">
      <div className="container">
        <Instructions />
      </div>
    </main>
  );
};

export default Landing;

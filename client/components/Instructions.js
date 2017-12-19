import React from 'react';
import PropTypes from 'prop-types';

const Instructions = props => {
  return (
    <section className="instructions text-center">
      <h2 className="mb-4 font-weight-bold">How it works</h2>

      <div className="row d-flex justify-content-center mb-4">
        <div className="col-md-8">
          <p className="grey-text">Follow the steps below to get started after you register or login.</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 mb-5">
          <div style={{color:"#ffd600"}}>
            <i className="fas fa-search fa-4x" />
          </div>
          <h4 className="my-4">Step 1: Find</h4>
          <p className="grey-text">What would you like to cook? Find a recipe from your favorite food blog. If you don't know where to start, checkout some popular recipes here</p>
        </div>
        <div className="col-md-4 mb-1">
          <div style={{color:"#ffd600"}}>
            <i className="fas fa-bookmark fa-4x" />
          </div>
          <h4 className="my-4">Step 2: Save</h4>
          <p className="grey-text">Save it to your kitchen with our Chrome Extension</p>
        </div>
        <div className="col-md-4 mb-1">
          <div style={{color:"#ffd600"}}>
            <i className="fas fa-utensils fa-4x" />
          </div>
          <h4 className="my-4">Step 3: Cook</h4>
          <p className="grey-text">When you are ready to cook, come back and start cooking. Enjoy!</p>
        </div>
      </div>

    </section>
  );
};

export default Instructions;

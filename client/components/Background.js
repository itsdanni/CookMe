import React from 'react';
import PropTypes from 'prop-types';

const Background = props => {
  return (
    <div className="view intro hm-black-light">
      <div className="container-fluid full-bg-img d-flex align-items-center justify-content-center">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8 text-center">
            <h3 className="display-3 font-bold white-text mb-2">Save and cook any recipe in one place, hands-free</h3>
            <hr className="hr-light" />
            <button type="button" className="btn btn-yellow">How it works</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;

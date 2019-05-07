import React from 'react';

const Loader = ({ show }) => (
  <div className={`loader ${show ? 'active': 'hidden'}`}>
    <div className="loader-inner">
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Loader;

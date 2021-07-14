/* eslint-disable react/prop-types */
import React from 'react';

import classes from './Loader.module.scss';

const Loader = ({ isLoading }) => {
  if (isLoading) {
    return (
      <div className="container text-center">
        <div className={classes['lds-ripple']}>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
  return <></>;
};

export default Loader;

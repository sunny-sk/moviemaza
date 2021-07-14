import React from 'react';

import classes from './Loader.module.scss';
const MoreLoader = () => {
  return (
    <div className="container text-center">
      <div className={classes['lds-facebook']}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default MoreLoader;

/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

import classes from './TopToScroll.module.scss';
const TopToScroll = (props) => {
  console.log(props.display);
  const [display, setDisplay] = useState(false);
  const scrollToTopHandler = () => {
    window.scroll({
      left: 0,
      top: 0,
      behavior: 'smooth',
    });
    setDisplay(false);
  };
  return (
    <>
      {display && (
        <div onClick={scrollToTopHandler} className={classes['scroll']}>
          ☝️
        </div>
      )}
    </>
  );
};

export default TopToScroll;

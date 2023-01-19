import React from 'react';
import classes from './LoadingSpiner.module.scss';

const LoadingSpinner = () => {
  return (
    <div className={classes.loadingSpinnerContainer}>
      <div className={classes.loadingSpinner}></div>
    </div>
  );
};

export default LoadingSpinner;

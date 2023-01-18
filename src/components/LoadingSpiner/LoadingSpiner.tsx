import React from "react";
import classes from "./LoadingSpiner.module.scss";

const LoadingSpinner = () => {
  return (
    <div className={classes.spinnerContainer}>
      <div className={classes.loadingSpinner}>
      </div>
    </div>
  );
}

export default LoadingSpinner;
import React from "react";
import "./Spinner.scss";

const Spinner = () => {
  return (
    <div className="fallback-spinner">
      <div className="loading component-loader">
        <div className="effect-1"></div>
        <div className="effect-2"></div>
        <div className="effect-3"></div>
      </div>
    </div>
  );
};

export default Spinner;

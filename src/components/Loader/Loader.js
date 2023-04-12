import React from "react";

function Loader() {
  return (
    <div className="loading-overlay">
      <div className="bounce-loader">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    </div>
  );
}

export default Loader;

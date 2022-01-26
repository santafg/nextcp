import React from "react";

const OurPortfolio = () => {
  return (
    <div className="ourPortfolio">
      <div className="top">
        <div>
          <h1>Our selected work.</h1>
        </div>
        <div>
            <button>See all Portfolio</button>
        </div>
      </div>
      <div className="bottom">
          <div className="portImg"></div>
          <div className="portImg"></div>
          <div className="portImg"></div>
          <div className="portImg"></div>
      </div>
    </div>
  );
};

export default OurPortfolio;

import Link from "next/link";
import React from "react";

const PlaceHolder = () => {
  return (
    <div className="placeholder">
      <div className="left">
        <h1>Have any project in mind?</h1>
      </div>
      <div className="right">
        <div>
          <Link href="/discuss" passHref>
            <button className="point discussBtn ">Let’s Discuss</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlaceHolder;

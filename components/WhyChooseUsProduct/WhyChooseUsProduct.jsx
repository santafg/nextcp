import React from "react";
import AboutsProducts from "./AboutsProducts";
import { abouts } from "./aboutspro";

const WhyChooseUsProduct = () => {
  return (
    <div className="WhyChooseUsProduct">
      <div className="left">
        <div>
          <h5>Why choose us</h5>
        </div>
        <div>
          <div>
            <h1>Create visual strategy lorem.</h1>
          </div>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet cons quis</p>
        </div>
      </div>
      <div className="right">
        <ul>
          {abouts.map((e, i) => (
            <AboutsProducts e={e} key={i} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhyChooseUsProduct;

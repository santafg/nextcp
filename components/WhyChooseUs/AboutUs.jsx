import React from "react";
import Abouts from "./Abouts.jsx";
import { abouts } from "./abouts";

import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div className="top">
        <div className="tt">
          <h5>Why choose us</h5>
        </div>
        <div className="tb">
          <div className="tbl">
            <div>
              <h1>We solve your Problem.</h1>
            </div>
          </div>
          <div className="tbr">
            <p>
              We don’t sell technology, We give <u>ideas that boosts</u> your
              journey.
            </p>
          </div>
        </div>
      </div>
      <div className="middle">
        <div className="ml">
          <Image layout="fill" src="/images/block.png" alt={""} />
        </div>
        <div className="mr">
          <ul>
            {abouts.map((e, i) => (
              <Abouts e={e} key={i} />
            ))}
          </ul>
        </div>
      </div>
      <div className="bottom">
        <ul>
          <li>
            <h1>3.5K</h1>
            <p>Projects done</p>
          </li>
          <li>
            <h1>20million</h1>
            <p>Plus page build</p>
          </li>
          <li>
            <h1>3000+</h1>
            <p>Device Envented</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;

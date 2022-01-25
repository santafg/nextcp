import Image from "next/image";
import React from "react";
import { wwd } from "./wwd";

const WhatWeDo = () => {
  return (
    <div className="whatWeDo">
      {wwd.map((e, i) => (
        <div key={i}>
          <div className="whatwedoImg">
            <Image layout="fill" src={e.icon} alt={""} />
          </div>
          <h1>{e.name}</h1>
          <p>{e.description}</p>
        </div>
      ))}
    </div>
  );
};

export default WhatWeDo;

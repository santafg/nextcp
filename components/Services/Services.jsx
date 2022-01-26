import Image from "next/image";
import React from "react";
import { servicelist } from "./servicelist";

const Services = () => {
  return (
    <div className="Services">
      <div className="top">
        <div>
          <h1>Our included service.</h1>
        </div>
        <div>
          <p className="point" >See all Services</p>
        </div>
      </div>
      <div className="bottom">
        {servicelist.map((e, i) => (
          <div key={i}>
            <div className="blackBtns">
              <Image layout="fill" alt={""} src={`/images/${e.img}.png`} />
            </div>
            <div>
              <h2>{e.name}</h2>
            </div>
            <div>
              {e.details.map((detail, index) => (
                <div className="detailsDiv" key={index}>
                  <p>{detail}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

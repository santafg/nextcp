import Image from "next/image";
import React, { useState } from "react";

const OurNews = () => {
  const cp = ["gcloud", "dcloud", "aws", "ibm"];
  return (
    <div className="ourNews">
      <div className="news">
        <div>
          <h4>NEWS</h4>
        </div>
        <div>
          <h1>Our Partners.</h1>
        </div>
      </div>
      <div className="cp">
        <div>
          <h4>Cloud partners</h4>
          <div className="cps">
            {cp.map((e, i) => (
              <div className="cpImg" key={i}>
                <Image
                  layout="fill"
                  src={`/images/${e}.png`}
                  alt={""}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bp">
        <div>
          <h4>Blockchain partners</h4>
          <div className="bpImg">
            <Image
             layout="fill"
              src="/images/opartner.png"
              alt={""}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurNews;

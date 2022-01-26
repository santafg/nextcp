import Image from "next/image";
import React from "react";

const WhyChooseUsHome = () => {
  return (
    <div className="whyChooseUsHome">
      <div className="left">
        <div className="videoBtn">
          <Image layout="fill" src="/images/videobtn.png" alt={""} />
        </div>
        <div>
          <h1>Why Choose Code Partner?</h1>
        </div>
        <div>
          <p>
            So how does it work? Let’s check our Getting Started tutorial for
            detailed info.
          </p>
        </div>
        <div>
          <ul>
            <li>
              <span>
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8.87722L6.70377 12.4214L14 1"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              <p>
                Provides professional service with ease and single point of
                contact.
              </p>
            </li>
            <li>
              <span>
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8.87722L6.70377 12.4214L14 1"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <p>Takes complete responsibility from start to end.</p>
            </li>
            <li>
              <span>
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8.87722L6.70377 12.4214L14 1"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              <p>Dedicated Relationship Manager in place.</p>
            </li>
          </ul>
        </div>
        <div>
          <button className="point">Consult with an exprt now!</button>
        </div>
      </div>
      <div className="right">
        <div className="yladyImg">
          <Image layout="fill" src="/images/ylady.png" alt={""} />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsHome;

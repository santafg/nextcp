import Image from "next/image";
import Link from "next/link";
import React from "react";

const BannerHome = () => {
  return (
    <div className="bannerhome">
      <div className="left">
        <div className="heading">
          <h1>Smart Consulting Group.</h1>
        </div>
        <div className="subtitle">
          <div>
            <p>
              We helping client to create technology that uses Blockchain, AI
              and IOT with our talented expert.
            </p>
          </div>
        </div>
        <div>
          <button className="point">Consult with an exprt now!</button>
        </div>
        <div>
          <Link href="/signin" passHref>
            <a>
              <p className="point">
                Already a member? <b>Sign in.</b>
              </p>
            </a>
          </Link>
        </div>
      </div>
      <div className="right">
        <div className="rightImg">
          <Image layout="fill" src="/images/Right.png" alt={""} />
        </div>
      </div>
      <div className="outside">
        <div className="number">
          <p>01.</p>
        </div>
        <div className="socialMedia">
          <ul>
            <li>Fb.</li>
            <li>Tw.</li>
            <li>Inst.</li>
          </ul>
        </div>
        <div className="support point">
          <div className="supportImg">
            <Image layout="fill" src="/images/support.png" alt={""} />
          </div>
        </div>
        <div className="scroll">
          <div className="bblineImg">
            <Image layout="fill" src="/images/bbline.png" alt={""} />
          </div>
          <p>SCROLL</p>
        </div>
      </div>
    </div>
  );
};

export default BannerHome;

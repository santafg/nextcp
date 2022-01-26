import Image from "next/image";
import Link from "next/link";
import React from "react";

const BannerProduct = () => {
  return (
    <div className="BannerProduct">
      <div className="left">
        <div className="bannerImg"></div>
      </div>
      <div className="right">
        <div className="blackBtns point ">
          <Image layout="fill" src="/images/videobtn.png" alt={""} />
        </div>
        <div>
          <h1>We are the Blockchain Master</h1>
        </div>
        <div>
          <p>
            We helping our client to create WordPress websites with our talented
            expert.
          </p>
        </div>
        <div className="demoInput">
          <div>
            <input type="text" />
          </div>
          <div>
            <button className="point" >Try free demo</button>
          </div>
        </div>
        <div>
          <Link href="/signin" passHref>
            <a>
              <p className="point signin">
                Already a member? <b>Sign in.</b>
              </p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerProduct;

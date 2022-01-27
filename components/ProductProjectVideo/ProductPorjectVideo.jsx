import Image from "next/image";
import React from "react";

const ProductPorjectVideo = () => {
  return (
    <div className="ProductPorjectVideo">
      <div className="playBtnDiv">
        <div className="blackBtns point">
          <Image layout="fill" src="/images/videobtn.png" alt={""} />
        </div>
      </div>
      <div className="projectStatus">
        <div>
          <h1>3.5K</h1>
          <p>Successfully Project</p>
        </div>
        <div>
          <h1>50K+</h1>
          <p>Successfully Project</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPorjectVideo;

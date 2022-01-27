import React, { useState } from "react";

import AproductTestimonial from "./AproductTestimonial";
import { test } from "./testimoninalsProduct";

const ProductTestimonials = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  return (
    <div className="ProductTestimonials">
      <div className="porductSliderDiv">
        {test.map((e, i) => (
          <div
            key={i}
            className={slideIndex === i + 1 ? "slide active-anim" : "slide"}
          >
            <AproductTestimonial key={i} e={e} />
          </div>
        ))}
      </div>
      <div className="dotDiv" >
        {test.map((item, index) => (
          <div
            onClick={() => setSlideIndex(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProductTestimonials;

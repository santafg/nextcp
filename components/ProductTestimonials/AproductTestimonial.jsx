import Image from "next/image";
import React from "react";

const Testimonials = ({ e }) => {
  return (
    <div className="aproductTestimonials">
      <div className="left">
        <div className="testimonImg">
          {/* <Image layout="fill" src="/images/meetun.png" alt={""} /> */}
        </div>
      </div>
      <div className="right">
        <div>
          <Image layout="fill" src="/images/quote.png" alt={""} />
        </div>
        <div>
          <h1>{e.quote}</h1>
        </div>
        <div className="rb">
          <p>—</p>
          <div>
            <h3>{e.name}</h3>
            <h4>{e.from}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

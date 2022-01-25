import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="left">
        <div className="testimonIng">
          <Image layout="fill" src="/images/meetun.png" alt={""} />
        </div>
      </div>
      <div className="right">
        <div>
          <Image layout="fill" src="/images/star.png" alt={""} />
        </div>
        <div>
          <p>
            “Certainly from my perspective, Dream City has been a great
            success—with <u>CPIOT Platform</u> giving us that enterprise-level
            of assured quality on top.”
          </p>
        </div>
        <div className="rb">
          <p>—</p>
          <div>
            <h3>Meetun Norsha</h3>
            <h4>INDIA</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

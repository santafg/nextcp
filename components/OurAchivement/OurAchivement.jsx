import React, { useRef } from "react";
import { stories } from "./stories";
import Story from "./Story";

const OurAchivement = () => {
  const ref = useRef();
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  return (
    <div className="ourAchivements">
      <div className="top">
        <div className="heading">
          <h1>Our Success Story.</h1>
        </div>
        <div className="slidebtns">
          <button onClick={() => scroll(-140)}>&larr;</button>
          <button onClick={() => scroll(140)}>&rarr;</button>
        </div>
      </div>
      <div ref={ref} className="stories">
        {stories.map((e, i) => (
          <Story e={e} key={i} />
        ))}
      </div>
    </div>
  );
};

export default OurAchivement;

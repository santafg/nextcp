import Image from "next/image";
import React, { useState } from "react";

const Story = ({ e }) => {
  const [mouse, setmouse] = useState(false);
  return (
    <div
      className="story point"
      onMouseEnter={() => setmouse(true)}
      onMouseLeave={() => setmouse(false)}
    >
      <div className="storyImg" >
        <Image layout="fill" src={`/images/${e.pic}.png`} alt="" />
      </div>
      <div className="full">
        <div className={mouse ? "content blue" : "content"}>
          <div>
            <h2>{e.title}</h2>
            <span>{mouse ? "-" : "+"}</span>
          </div>
          <div className={mouse ? "show" : "hide"}>
            <p>{e.subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
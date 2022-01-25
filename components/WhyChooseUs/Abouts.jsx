import React, { useState } from "react";

const Abouts = ({ e }) => {
  const [clicked, setclicked] = useState(false);
  return (
    <li>
      <div className="up point" onClick={() => setclicked(!clicked)}>
        <h3 className="title">{e.title}</h3>
        <span>{clicked ? "-" : "+"}</span>
      </div>
        <div className={clicked ? "down" : "down hide"}>
        <p>{e.details}</p>
      </div>
    </li>
  );
};

export default Abouts;

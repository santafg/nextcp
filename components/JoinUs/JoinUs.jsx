import Link from "next/link";
import React from "react";

const JoinUs = () => {
  return (
    <div className="joinUs">
      <div className="left">
        <h1>
          Join our <br></br> team be a great skills elit.
        </h1>
      </div>
      <div className="right">
        <div>
          <p>
            We’re a team of creatives who are excited about unique ideas & help.
          </p>
        </div>
        <div>
          <Link href="/sendcv" passHref>
            <button className="point">Send your CV &rarr;</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;

import Image from "next/image";
import React, { useState } from "react";
// import "./Header.css";

const MobileHeader = () => {
  const [open, setopen] = useState(false);
  return (
    <>
      <div className="mheader">
        <div className="logo">
          <Image width="100%" height="100%" src="/images/Logo.png" alt={""} />
        </div>
        <div className="mnav">
          <div className="mlogin">
            <div className="loginIcon">
              <Image
                width="100%"
                height="100%"
                src="/images/path823.png"
                alt={""}
              />
            </div>
            <div>
              <ul>
                <li className="point">Login</li>
              </ul>
            </div>
          </div>
          <div>
            <Image
              width="100%"
              height="100%"
              onClick={() => setopen(!open)}
              src="/images/Nav.png"
              alt={""}
            />
          </div>
        </div>
        <div className={open ? "sidenav open" : "sidenav"}>
          <ul>
            <li>About</li>
            <li>Case Studies</li>
            <li>Services</li>
            <li>Blog</li>
            <li>
              <input type="text" placeholder="Search Here..." />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;

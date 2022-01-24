import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

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
              <Link href="/login">
                <a>Login </a>
              </Link>
            </div>
          </div>
          <div className="navIcon">
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
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/casestudies">
                <a>Case Studies</a>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <a>Services</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
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

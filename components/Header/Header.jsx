import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo point">
        <Link href="/">
          <a>
            <Image width="100%" height="100%" src="/images/Logo.png" alt={""} />
          </a>
        </Link>
      </div>
      <div className="menu">
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
        </ul>
      </div>
      <div className="search">
        <div className="searchIcon">
          <Image width="100%" height="100%" src="/images/search.png" alt={""} />
        </div>
        <div>
          <input type="text" placeholder="Search Here..." />
        </div>
      </div>
      <div className="login">
        <div className="loginIcon">
          <Image
            width="100%"
            height="100%"
            src="/images/path823.png"
            alt={""}
          />
        </div>
        <div className="loginDiv" >
          <Link href="/login">
            <a>Login </a>
          </Link>
        </div>
      </div>
      <div className="navIcon point">
        <Image width="100%" height="100%" src="/images/Nav.png" alt={""} />
      </div>
    </div>
  );
};

export default Header;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="ftop">
        <div className="c1 point">
          <div className="footlogo">
            <Image width="100%" height="100%" src="/images/Logo.png" alt={""} />
          </div>
          <div className="footname">
            <Image width="100%" height="100%" src="/images/Name.png" alt={""} />
          </div>
        </div>
        <div className="c2">
          <h3>Links</h3>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <a>Services</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About us</a>
              </Link>
            </li>
            <li>
              <Link href="/careers">
                <a>Careers</a>
              </Link>
            </li>

            <li>
              <Link href="/pressrelease">
                <a>Press Release</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="c3">
          <h3>Legal</h3>
          <ul>
            <li>Terms of use</li>
            <li>Terms & conditions</li>
            <li>Privacy policy</li>
            <li>Cookie policy</li>
          </ul>
        </div>
        <div className="c4">
          <h3>Newslettert</h3>
          <h5>
            Join over <u>68,000</u> people getting our emails
          </h5>
          <div className="email">
            <input type="text" placeholder="Enter Your Email" />
            <button>Sign Up</button>
          </div>
          <p>We only send interesting and relevant emails.</p>
        </div>
      </div>
      <div className="fline"></div>
      <div className="fbottom">
        <div className="fl">
          <ul>
            <li>Privacy & Terms.</li>
            <li>
              <Link href="/contact">
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="fc">
          <p>Copyright @2021 Code PartnerIT Solutions Pvt. Ltd.</p>
        </div>
        <div className="fr">
          <ul>
            <li>
              <Image src="/images/facebook.png" layout="fill" alt={""} />
            </li>
            <li>
              <Image src="/images/twitter.png" layout="fill" alt={""} />
            </li>
            <li>
              <Image src="/images/linkedin.png" layout="fill" alt={""} />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

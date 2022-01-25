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
          <p>* Copyright @2021 Code PartnerIT Solutions Pvt. Ltd.</p>
        </div>
        <div className="fr">
          <ul>
            <li>
              <svg
                width="10"
                height="15"
                viewBox="0 0 10 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.78422 10.7247C2.71462 10.7247 1.18329 10.7247 0.487239 10.7247C0.116009 10.7247 0 10.582 0 10.2253C0 9.27409 0 8.29912 0 7.34793C0 6.96746 0.139211 6.84856 0.487239 6.84856H2.78422C2.78422 6.77722 2.78422 5.398 2.78422 4.75594C2.78422 3.80476 2.94664 2.90113 3.41067 2.06884C3.89791 1.21277 4.59397 0.642053 5.47564 0.309136C6.05568 0.0951189 6.63573 0 7.26218 0H9.53596C9.86079 0 10 0.142678 10 0.475594V3.18648C10 3.5194 9.86079 3.66208 9.53596 3.66208C8.90951 3.66208 8.28306 3.66208 7.65661 3.68586C7.03016 3.68586 6.70534 3.99499 6.70534 4.66083C6.68213 5.37422 6.70534 6.06383 6.70534 6.801H9.39675C9.76798 6.801 9.90719 6.94368 9.90719 7.32416V10.2015C9.90719 10.582 9.79118 10.7009 9.39675 10.7009C8.56148 10.7009 6.77494 10.7009 6.70534 10.7009V18.4531C6.70534 18.8573 6.58933 19 6.17169 19C5.19722 19 4.24594 19 3.27146 19C2.92343 19 2.78422 18.8573 2.78422 18.5006C2.78422 16.0038 2.78422 10.796 2.78422 10.7247Z"
                  fill="black"
                />
              </svg>
            </li>
            <li>
              <svg
                width="10"
                height="18"
                viewBox="0 0 18 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 1.70323C17.325 1.99078 16.6275 2.18986 15.885 2.27834C16.65 1.83594 17.235 1.12811 17.505 0.265438C16.785 0.685714 15.9975 0.973272 15.165 1.15023C14.49 0.442396 13.5225 0 12.465 0C10.4175 0 8.775 1.63687 8.775 3.62765C8.775 3.91521 8.7975 4.18065 8.865 4.44608C5.805 4.31336 3.105 2.85346 1.2825 0.663594C-0.0224999 2.96406 1.44 4.86636 2.4075 5.50783C1.8225 5.50783 1.2375 5.33088 0.7425 5.06544C0.7425 6.85714 2.025 8.33917 3.69 8.67097C3.33 8.78157 2.52 8.84793 2.025 8.73733C2.4975 10.1751 3.87 11.2369 5.4675 11.259C4.2075 12.2323 2.3625 13.0065 0 12.7631C1.6425 13.8028 3.5775 14.4 5.67 14.4C12.465 14.4 16.155 8.87005 16.155 4.09217C16.155 3.93733 16.155 3.78249 16.1325 3.62765C16.8975 3.07465 17.5275 2.43318 18 1.70323Z"
                  fill="black"
                />
              </svg>
            </li>
            <li>
              <svg
                width="10"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 17.9998V11.4434C18 8.22119 17.3092 5.75977 13.5658 5.75977C11.7609 5.75977 10.5577 6.74434 10.0674 7.68415H10.0229V6.05066H6.47998V17.9998H10.1789V12.07C10.1789 10.5036 10.4685 9.00437 12.3848 9.00437C14.2788 9.00437 14.3011 10.7721 14.3011 12.1595V17.9774H18V17.9998Z"
                  fill="black"
                />
                <path
                  d="M0.719971 5.75977H4.31997V17.9998H0.719971V5.75977Z"
                  fill="black"
                />
                <path
                  d="M2.16 0C0.9675 0 0 0.962487 0 2.14881C0 3.33513 0.9675 4.32 2.16 4.32C3.3525 4.32 4.32 3.33513 4.32 2.14881C4.32 0.962487 3.3525 0 2.16 0Z"
                  fill="black"
                />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

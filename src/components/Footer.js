import React from "react";
import footer_logo from "../assets/images/footer-logo.png";
import phone from "../assets/images/phone.png";
import inbox from "../assets/images/inbox.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const scroll_top = () => {
    document.documentElement.scrollTo(0, 0);
  };
  return (
    <div className="footer-wrapper">
      <footer className=" pt-5">
        <div className="container">
          <div className="text-start">
            <a href="/">
              <img
                src={footer_logo}
                height={100}
                width={200}
                className="logo-staysafe"
              />{" "}
            </a>
            &nbsp;&nbsp;&nbsp;
            {/* <p className="mb-0 mt-5">
              stayX GmbH Ludwig-Erhard-Allee 20, 76131 Karlsruhe
            </p> */}
            <div className="d-md-flex phone mt-2">
              <p className="me-4">
                <img src={phone} height={16} width={16} />
                &nbsp; +92 320 4515124&nbsp;&nbsp;
              </p>
              <p className="inbox">
                <img src={inbox} height={14} width={18} />
                &nbsp; samradar4@gmail.com
              </p>
            </div>
            <hr />
            <div className="d-md-flex">
              <p className="copywrite-text">
                © Copyright 2025 – All rights reserved.
              </p>
              {/* <div className="ms-auto">
                <Link
                  className="d-md-inline-block"
                  to="/private-policy"
                  onClick={() => scroll_top()}
                >
                  Data policy
                </Link>
                <Link
                  className="d-md-inline-block imprint-link"
                  to="/imprint"
                  onClick={() => scroll_top()}
                >
                  Imprint
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

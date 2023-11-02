import React from "react";
import "./Footer.css";
import linkedin from "../../Documents/linkedin.png";
import instagram from "../../Documents/instagram.png";
import github from "../../Documents/github.png";
import logo from "../../Documents/logo.png";

const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <hr />
        <div className="blur footer-blur-left"></div>
        <div className="blur footer-blur-right"></div>
        <div className="footer">
          <div className="social-links">
            <img src={github} alt="" />
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
          </div>
        <img src={logo} alt="" />
        </div>
      </div>
    </>
  );
};

export default Footer;

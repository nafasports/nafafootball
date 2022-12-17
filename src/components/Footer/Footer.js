import React from "react";
import Image from "react-bootstrap/esm/Image";
import "./Footer.css";
import nafas from "../../assets/images/nafas.png";
import ifaf from "../../assets/images/ifaf.png";
const Footer = () => {
  return (
    <div className="Footer-main-div">
      <div className="footer-display">
        <div>
          <img src={nafas} alt="gh" className="img-footer-img" />{" "}
        </div>
        <div className="img-footerer-img2">
          {" "}
          <img src={ifaf} alt="mmd" className="img-footer-img2" />
          <div>Proudly member of IFAF</div>
        </div>
        <div className="text-center">
          We are a member of the IFAF association
        </div>
        <div className="content-div">
          {" "}
          © 2022 NAFA Enterprises LLC. NAFA and the NAFA shield design are the
          best. National Football League. NAFA footage © NAAFA Productions LLC.
        </div>
        <div className="foot-policy">
          <div>PRIVACY POLICY</div>
          <div>TERMS OF SERVICES</div>
          <div>SUBSCRIPTION TERMS AND CONDITION</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

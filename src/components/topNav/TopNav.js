import React from "react";
import "./TopNavBar.css";
// import { FiTwitter } from "react-icons/fi";
import { BiEnvelope } from "react-icons/bi";
import { GrFacebookOption } from "react-icons/gr";
import { IoIosCall } from "react-icons/io";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
const TopNav = () => {
  const ref = () => {
    window.location.href = "https://www.instagram.com/jovine360hub/";
  };
  const refs = () => {
    window.location.href = "https://twitter.com/Jovine360Hub";
  };
  const refer = () => {
    window.location.href =
      "https://web.facebook.com/profile.php?id=100088397130017";
  };
  const refers = () => {
    window.location.href = "https://www.linkedin.com/in/jovine-hub-654600258/";
  };
  return (
    <div className="top-main-div">
      <div className="top-ds-div">
        <div className="dsp-one" style={{ cursor: "pointer" }}>
          <div className="hr-div-line"></div>
          <div onClick={refs}>
            <i class="fab fa-twitter"></i>
            {/* <FiTwitter />{" "} */}
          </div>
          <div className="hr-div-line"></div>
          <div onClick={refer}>
            <GrFacebookOption />{" "}
          </div>
          <div className="hr-div-line"></div>
          <div onClick={ref}>
            <FaInstagram />{" "}
          </div>
          <div className="hr-div-line"></div>
          <div onClick={refers}>
            <FaLinkedinIn />{" "}
          </div>
          <div className="hr-div-line"></div>
        </div>
        <div className="dspy-two">
          <div className="hr-div-line"></div>
          <div className="hr-div-line2">
            <IoIosCall /> <h7>+2348182004445 </h7>
          </div>
          <div className="hr-div-line"></div>
          <div className="hr-div-line2">
            <BiEnvelope />{" "}
            <h7 style={{ marginLeft: "5px" }}>
              josiahorie@jovine360solutions.com
            </h7>
          </div>
          <div className="hr-div-line"></div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;

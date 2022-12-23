import React from "react";
import Marquee from "react-fast-marquee";
import pr from "../../assets/images/pr.jpeg";
import pulse from "../../assets/images/pulse.jpg";
import lagos from "../../assets/images/lagos.jpg";
import nssf from "../../assets/images/nssf.jpg";
import partner6 from "../../assets/images/partner6.png";
import partners7 from "../../assets/images/partners7.jpg";
import partner8 from "../../assets/images/partner8.png";
import nafa from "../../assets/images/nafa.jpg";
import "./Partners.css";
import { Col, Row } from "react-bootstrap";
import { RiH4 } from "react-icons/ri";
const Partners = () => {
  return (
    <div>
      {" "}
      <h6
        className="text-center py-3"
        style={{ color: "blue", fontWeight: "600", marginTop: "20px" }}
      >
        OUR PARTNERS
      </h6>
      <div className="m-partners">
        <Marquee direction="left" pauseOnHover="true">
          <div className="img-wrap">
            <img src={nssf} alt="nns" className="parnet-img" />
          </div>
          <div className="img-wrap">
            <img src={pr} alt="nns" className="parnet-img" />
          </div>
          <div className="img-wrap">
            <img src={pulse} alt="nns" className="parnet-img" />
          </div>
          {/* <div className="img-wrap">
            <img src={partners3} alt="nns" className="parnet-img" />
          </div> */}
          <div className="img-wrap">
            <img src={lagos} alt="nns" className="parnet-img" />
          </div>
        </Marquee>
        <div className="p-per">
          <Marquee direction="right" pauseOnHover="true">
            <div className="img-wrap">
              <img src={nssf} alt="nns" className="parnet-img" />
            </div>
            {/* <div className="img-wrap">
              <img src={partners3} alt="nns" className="parnet-img" />
            </div> */}
            <div className="img-wrap">
              <img src={lagos} alt="nns" className="parnet-img" />
            </div>
            <div className="img-wrap">
              <img src={pr} alt="nns" className="parnet-img" />
            </div>
            <div className="img-wrap">
              <img src={pulse} alt="nns" className="parnet-img" />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Partners;

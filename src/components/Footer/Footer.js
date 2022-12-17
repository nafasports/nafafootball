import React from "react";
import Image from "react-bootstrap/esm/Image";
import "./Footer.css";
import { Link } from "react-router-dom";
import nafas from "../../assets/images/nafas.png";
import ifaf from "../../assets/images/ifaf.png";
const Footer = () => {
  const ref = () => {
    window.location.href = "https://americanfootball.sport/";
  };
  const book = () => {
    window.location.href =
      "https://web.facebook.com/100083218524152/posts/pfbid02kKDFpdKcHoJdJ5RWzg6EJnsFDtTmJjBXoqQd8j72FjC1Y8miDdCxrGrnU3mZtJaEl/?d=n&_rdc=1&_rdr";
  };
  const twitter = () => {
    window.location.href =
      "https://twitter.com/nafa_ng/status/1594670430131986432?s=21&t=iIAZIlYjvw7qw2EYe2vW8w";
  };
  const instagram = () => {
    window.location.href =
      "https://www.instagram.com/p/ClONprytxmr/?igshid=YmMyMTA2M2Y%3D";
  };
  const gmail = () => {
    window.location.href = "football@nafa.ng";
  };
  const youtube = () => {
    window.location.href =
      "https://www.youtube.com/watch?v=z287QVrvmMQ&feature=youtu.be";
  };
  const google = () => {
    window.location.href =
      "https://www.youtube.com/watch?v=z287QVrvmMQ&feature=youtu.be";
  };
  return (
    <div className="Footer-main-div">
      <section
        class="d-flex justify-content-between p-4 text-white"
        style={{ backgroundColor: "green" }}
      >
        {/* <!-- Left --> */}
        <div class="me-5">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* <!-- Left --> */}

        {/* <!-- Right --> */}
        <div>
          <a
            class="text-white me-4"
            onClick={book}
            style={{ cursor: "pointer" }}
          >
            <i class="fab fa-facebook-f"></i>
          </a>

          <a
            class="text-white me-4"
            onClick={twitter}
            style={{ cursor: "pointer" }}
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            class="text-white me-4"
            onClick={gmail}
            style={{ cursor: "pointer" }}
          >
            <i class="fab fa-gmail"></i>
          </a>
          <a
            class="text-white me-4"
            onClick={instagram}
            style={{ cursor: "pointer" }}
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a
            class="text-white me-4"
            onClick={youtube}
            style={{ cursor: "pointer" }}
          >
            <i class="fab fa-youtube"></i>
          </a>
          <a class="text-white me-4">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
        {/* <!-- Right --> */}
      </section>
      <div className="footer-display">
        <div>
          <img src={nafas} alt="gh" className="img-footer-img" />{" "}
        </div>
        <div className="img-footerer-img2">
          {" "}
          <img
            src={ifaf}
            alt="mmd"
            className="img-footer-img2"
            style={{ cursor: "pointer" }}
          />
        </div>
        <div
          className="text-center"
          onClick={ref}
          style={{ cursor: "pointer" }}
        >
          Proudly a member of IFAF
        </div>
        <div className="content-div">
          {" "}
          © 2022 NAFA Enterprises .NAFA shield design are the best. NSSFFL. NAFA
          footage © NAAFA Productions LLC.
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

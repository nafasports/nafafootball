import React from "react";
import "./OurT.css";

import { Col, Container, Row } from "react-bootstrap";
import hy2 from "../../assets/images/hy2.jpg";
import ldt from "../../assets/images/ldt.jpg";
import nag from "../../assets/images/nag.jpg";
import tnaf from "../../assets/images/tnaf.jpg";
import tnafay from "../../assets/images/tnafay.jpg";
import tnag from "../../assets/images/tnag.jpg";

const OurTeams = () => {
  return (
    <div style={{ marginTop: "40px" }}>
      <div style={{ marginRight: "30px", marginLeft: "30px" }}>
        <div class="section_header" style={{ marginBottom: "10px" }}>
          {/* <div class="about-section">
            <h2>About Us </h2>
            <p>
              We are the Nigerian Institute of American Football Association
            </p>
            <p>
              Resize the browser window to see that this page is responsive by
              the way.
            </p>
          </div> */}
          <h3
            className="text-center py-3"
            style={{ fontSize: "23px", fontWeight: "600" }}
          >
            About Us
          </h3>
          <Container>
            <div className="text-center py-3 tyr">
              {" "}
              The American Football Association of Nigeria is a nongovernmental
              organization which operates as NAFA in Nigeria. It is an
              association created to promote and growth across the 36 states of
              the federation [including the FCT] the contact and noncontact
              American Football. This is currently done under the NFFL AND NAFL
              brand, in partnership with the international federation IFAF.{" "}
            </div>
          </Container>
          <span class="section_hint" style={{ marginTop: "30px" }}>
            {" "}
            Our Team
          </span>{" "}
        </div>
        <div id="blogCarousel" class="carousel slide" data-ride="carousel">
          <ol class="invisible carousel-indicators">
            <li
              data-target="#blogCarousel"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#blogCarousel" data-slide-to="1"></li>
          </ol>

          {/* <!-- Carousel items --> */}
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row ">
                <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
                  <div class="our-team">
                    <div class="pic">
                      <img src={hy2} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">HE.Oluwarotimi Akeredolu(SAN) </h3>
                      <span class="post">Governor Ondo state</span>
                      <span>Chairman of the Board</span>
                    </div>
                    <ul class="social">
                      <li>
                        <a href="#" class="fa fa-envelope"></a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
                  <div class="our-team">
                    <div class="pic">
                      <img src={nag} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">Lynette Mitchell</h3>
                      <span class="post">Executive Director Marketing </span>
                    </div>
                    <ul class="social">
                      <li>
                        <a href="#" class="fa fa-envelope"></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
                  <div class="our-team">
                    <div class="pic">
                      <img src={tnaf} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">Seye Obatolu</h3>
                      <span class="post">
                        Co-Founder/Executive Director of Finance
                      </span>
                    </div>
                    <ul class="social">
                      <li>
                        <a href="#" class="fa fa-envelope"></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
                  <div class="our-team">
                    <div class="pic">
                      <img src={ldt} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">Ojaideh Lawrence</h3>
                      <span class="post">Co-Director of NAFA Football.</span>
                    </div>
                    <ul class="social">
                      <li>
                        <a href="#" class="fa fa-envelope"></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
                  <div class="our-team">
                    <div class="pic">
                      <img src={tnafay} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">Babajide Akeredolu</h3>
                      <span class="post">Founder/President</span>
                    </div>
                    <ul class="social">
                      <li>
                        <a href="#" class="fa fa-envelope"></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!--.row--> */}
            </div>
            {/* <!--.item--> */}

            <div class="carousel-item">
              <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="our-team">
                    <div class="pic">
                      <img src={tnaf} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">Ted Robbins</h3>
                      <span class="post">Law Expert</span>
                    </div>
                    <ul class="social">
                      <li>
                        <a href="#" class="fa fa-envelope"></a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="our-team">
                    <div class="pic">
                      <img src={tnaf} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">Noel Flantier</h3>
                      <span class="post">Marketing Consultant</span>
                    </div>
                    <ul class="social">
                      <li>
                        <a href="#" class="fa fa-envelope"></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="our-team">
                    <div class="pic">
                      <img src={tnag} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">Ernesto Appia</h3>
                      <span class="post">Team Leader</span>
                    </div>
                    <ul class="social">
                      <li>
                        <a href="#" class="fa fa-envelope"></a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="our-team">
                    <div class="pic">
                      <img src={tnafay} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">Rosita Jimenez</h3>
                      <span class="post">Marketing Consultant</span>
                    </div>
                    <ul class="social">
                      <li>
                        <a href="#" class="fa fa-envelope"></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!--.row--> */}
            </div>
            {/* <!--.item--> */}
          </div>
          {/* <!--.carousel-inner--> */}
        </div>
        {/* <!--.Carousel--> */}
      </div>
    </div>
  );
};

export default OurTeams;

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
          <span class="section_hint" style={{ marginTop: "30px" }}>
            <h3 style={{ fontWeight: "600" }}> Our Team</h3>
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
                      <span class="post">General Secretary NAFA </span>
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

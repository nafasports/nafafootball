import React from "react";
import "./OurT.css";
import ldt from "../../assets/images/ldt.jpg";
import vj from "../../assets/images/vj.jpg";
import { Col, Row } from "react-bootstrap";
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
          <Row>
            <Col
              className="text-center py-3"
              style={{ fontSize: "23px", fontWeight: "600" }}
            >
              WHO ARE WE
            </Col>
          </Row>
          <Row>
            <Col className="text-center py-3">
              {" "}
              We are the Nigerian Institute of American Football Association
            </Col>
          </Row>
          <Row>
            <Col className="text-center py-3">
              {" "}
              Our long history of unparalleled commitment to partnering with the
              most extensive carriers and our ability to offer the most
              versatile services
            </Col>
          </Row>
          <h5
            className="text-center py-3"
            style={{ fontSize: "23px", fontWeight: "600" }}
          >
            Our Team
          </h5>
          <span class="section_hint">Nafa cordinators</span>{" "}
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
              <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="our-team">
                    <div class="pic">
                      <img src={vj} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">Dana Robins</h3>
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
                      <img src={ldt} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">John Doe</h3>
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
                      <img src={vj} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">Markus Baas</h3>
                      <span class="post">Financial Expert</span>
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
                      <img src={vj} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">Sophia Lee</h3>
                      <span class="post">Customer Support</span>
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
                      <img src={vj} />
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
                      <img src={vj} />
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
                      <img src={vj} />
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
                      <img src={vj} />
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

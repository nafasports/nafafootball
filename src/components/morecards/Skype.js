import React from "react";

import { Col, Row } from "react-bootstrap";
import "../MoreFromClub/More.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Skype = () => {
  const settings = {
    dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div
      style={{
        width: "100%",
        background: "rgb(255, 255, 255)",
        height: "auto",
        marginTop: "40px",
      }}
    >
      <div>
        <div className="Div-h6-v" varian="h6">
          SKYPE UPDATES
        </div>
        <hr className="hr" />
      </div>
      <Carousel>
        <div className="display-div-more">
          {/* <Row sm={12} md={6} lg={4} xl={3}> */}
          <div className="card" style={{ width: "18rem" }}>
            <video autoPlay muted>
              <source
                src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/HyK36gOdmjm0pmnp3/videoblocks-beautiful-slow-motion-on-a-group-of-runners-from-marathon-close-view-on-legs-sunny-day-montpellier-asphalt-road-and-grass_bzoff8xws__69ebd5e180579092fa3c7ed59da40925__P360.mp4"
                type="video/mp4"
              />
            </video>

            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          {/* ///// */}
          <div className="card" style={{ width: "18rem" }}>
            <video autoPlay muted>
              <source
                src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/piShJKb/videoblocks-slow-motion-of-a-tennis-player-hitting-the-ball-during-a-tennis-game_s0zcjxuucg__4016a3182dec5336fa7a46b74f91dfc2__P360.mp4"
                type="video/mp4"
              />
            </video>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          {/* /// */}
          <div className="card" style={{ width: "18rem" }}>
            <video autoPlay muted>
              <source
                src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/HjH5lgeHeix7kfhup/the-swimmer-training-to-swim-butterfly-in-the-swimming-pool_sobpgbrvx__8cc0cd522ee4f5cbaac984b6f4c7af76__P360.mp4"
                type="video/mp4"
              />
            </video>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          {/* ////// */}
          <div className="card" style={{ width: "18rem" }}>
            <video autoPlay muted>
              <source
                src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/MPaEbz-/videoblocks-female-soccer-player-dribbling-a-ball-on-green-field-and-scoring-a-goal-while-playing-outdoors-on-summer-day_sfzdj_qo8__0bf08415a0a98738af5722516ddf3d10__P360.mp4"
                type="video/mp4"
              />
            </video>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          {/* //// */}
          {/* </Row> */}
        </div>
        {/* //////// second carousel div */}
        <div className="display-div-more">
          {/* <Row sm={12} md={6} lg={4} xl={3}> */}
          <div className="card" style={{ width: "18rem" }}>
            <video autoPlay muted>
              <source
                src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/piShJKb/videoblocks-slow-motion-of-a-tennis-player-hitting-the-ball-during-a-tennis-game_s0zcjxuucg__4016a3182dec5336fa7a46b74f91dfc2__P360.mp4"
                type="video/mp4"
              />
            </video>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          {/* ///// */}
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://images.forbes.com/highest-paid-athletes-2022/16x9-hero.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          {/* /// */}
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://images.forbes.com/highest-paid-athletes-2022/16x9-hero.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          {/* ////// */}
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://images.forbes.com/highest-paid-athletes-2022/16x9-hero.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          {/* //// */}
          {/* 3rd carousel */}

          {/* </Row> */}
        </div>
        {/* ////3rd */}
        <div className="display-div-more">
          {/* <Row sm={12} md={6} lg={4} xl={3}> */}
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://images.forbes.com/highest-paid-athletes-2022/16x9-hero.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          {/* ///// */}
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://images.forbes.com/highest-paid-athletes-2022/16x9-hero.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          {/* /// */}
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://images.forbes.com/highest-paid-athletes-2022/16x9-hero.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          {/* ////// */}
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://images.forbes.com/highest-paid-athletes-2022/16x9-hero.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          {/* //// */}
          {/* 3rd carousel */}

          {/* </Row> */}
        </div>
      </Carousel>
    </div>
  );
};

export default Skype;

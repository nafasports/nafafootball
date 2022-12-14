import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Modal from "../modal/Modal";
import "./Header.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "react-bootstrap";
// import Slide from "react-reveal/Slide";
import amer from "../../assets/images/amer.JPG";
import aho from "../../assets/images/aho.jpg";
import anfl from "../../assets/images/anfl.png";
import joys from "../../assets/images/joys.jpg";
import { Typewriter } from "react-simple-typewriter";
import LiveGame from "../LiveGame/LiveGame";
import GetLiveFixture from "../../pages/LiveFixture/GetLiveFixture";
const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 50,
    // slidesToShow: 1,
    // slidesToScroll: 1,
  };
  return (
    <div className="header-main-div">
      <div className="Header-mg">
        <div>
          <Card
            sx={{ maxWidth: 855 }}
            style={{ borderTopLeftRadius: "0px", borderTopRightRadius: "0px" }}
          >
            <CardActionArea className="cedy">
              <Carousel slide={false}>
                <Carousel.Item>
                  <CardMedia
                    component="img"
                    height="400"
                    image={amer}
                    alt="green iguana"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <CardMedia
                    component="img"
                    height="400"
                    image={aho}
                    alt="green iguana"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <CardMedia
                    component="img"
                    height="400"
                    image={joys}
                    alt="green iguana"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <CardMedia
                    component="img"
                    height="400"
                    image={anfl}
                    alt="green iguana"
                  />
                </Carousel.Item>
              </Carousel>
              <CardContent style={{ height: "30vh" }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ marginBottom: "15px" }}
                >
                  American Football Unites All Nation
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  AMERICAN FOOTBALL IN NIGERIA
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  The Nigerian Institute of American Football (NAFA) is the
                  governing body for international American football in Nigeria
                  under the broader International Federation of American
                  Football (NAFA) for Africa
                  {/* <Typewriter
                    words={[
                      " The Nigerian Institute of American Football (NAFA) is the governing body for international American football in Nigeria under the broader International Federation of American Football (NAFA) for Africa",
                    ]}
                    loop={3}
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  /> */}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className="card2">
          {/* <Slide left> */}
          <Card sx={{ maxWidth: 700 }}>
            <CardActionArea>
              <CardContent style={{ height: "auto" }}>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  style={{
                    marginBottom: "15px",
                    textAlign: "center",
                    fontWeight: "600",
                  }}
                >
                  Live Games
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  <GetLiveFixture />
                  {/* The Nigerian Institute of American Football (NAIF) is the
                    governing body for international American football in
                    Nigeria under the broader International Federation of
                    American Football (IFAF) for Africa. */}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          {/* </Slide> */}
          <div>{/* <Modal /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;

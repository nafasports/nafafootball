import React, { useEffect, useState } from "react";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Card, CardActionArea } from "@mui/material";
import "./Background.css";
// import Slide from "react-reveal/Slide";
import UK from "../../assets/images/UK.png";
import { Image } from "react-bootstrap";
import HomePage from "../../pages/HomePage/HomePage";

const BackgroundCover = (props) => {
  const [modal, setModal] = useState(false);

  const handleClose = () => {
    setModal(false);
  };

  // const click = () => {
  //   setModal(!modal);
  // };

  useEffect(() => {
    setModal(!modal);
  }, []);
  return (
    <div>
      <div>
        {modal ? (
          <div className="wrap-main-div">
            <div>{props.children}</div>
            <div type="button" onClick={handleClose} className="text-center">
              <strong> X </strong>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default BackgroundCover;

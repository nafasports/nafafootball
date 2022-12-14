import React from "react";
import Image from "react-bootstrap/esm/Image";
import { Col, Row } from "react-bootstrap";
import "./LiveGame.css";
import anfl from "../../assets/images/anfl.png";
const LiveGame = () => {
  return (
    <div style={{ background: " #171744", width: "100%", height: "auto" }}>
      <img className="live-img" src={anfl} alt="nd" />
    </div>
  );
};

export default LiveGame;

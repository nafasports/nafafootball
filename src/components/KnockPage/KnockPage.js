import React from "react";
import Image from "react-bootstrap/esm/Image";
import "../LiveGame/LiveGame.css";
import joys from "../../assets/images/joys.jpg";
// import joys from "../../assets/images/joy.jpg";
const KnockPage = () => {
  return (
    <div
      style={{
        background: " #171744",
        width: "100%",
        marginTop: "30px",
        display: "flex",
      }}
    >
      <img className="live-img2" src={joys} alt="nd" />
      <img className="live-img3" src={joys} alt="nd" />
    </div>
  );
};

export default KnockPage;

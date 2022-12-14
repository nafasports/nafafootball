import React from "react";
import Game from "../../../components/morecards/Game";
import Skype from "../../../components/morecards/Skype";
import GetPost from "../../../screens/GetPost";
import "./Featured.css";
// import Rotate from "react-reveal/Rotate";
const Featured = () => {
  return (
    <div
      style={{
        width: "100%",
        background: "rgb(255, 255, 255)",
        height: "auto",
        // marginTop: "40px",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="featured"
      >
        <path
          // fill="linear-gradient(170deg, #429321 0%, #228b22 100%)"
          fill="#228B22"
          // fill="#171744"
          fill-opacity="1"
          d="M0,64L180,192L360,160L540,256L720,192L900,128L1080,64L1260,96L1440,64L1440,320L1260,320L1080,320L900,320L720,320L540,320L360,320L180,320L0,320Z"
        ></path>
      </svg>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#171744"
          fill-opacity="1"
          d="M0,320L60,293.3C120,267,240,213,360,165.3C480,117,600,75,720,96C840,117,960,203,1080,250.7C1200,299,1320,309,1380,314.7L1440,320L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg> */}
      {/* <Skype /> */}
      {/* <Rotate bottom right> */}
      <GetPost />
      {/* </Rotate> */}
    </div>
  );
};

export default Featured;

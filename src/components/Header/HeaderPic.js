import React from "react";
import Image from "react-bootstrap/esm/Image";

const HeaderPic = () => {
  return (
    <div style={{ width: "100%", background: "#D9D9D9" }}>
      <Image
        style={{
          width: "95%",
          height: "40vh",
          display: "flex",
          marginRight: "auto",
          marginLeft: "auto",
          //   objectFit: "cover",
        }}
        src="https://static.www.nfl.com/league/apps/game-pass/NFL-WATCH-ON-GAME-PASS-UK.png"
        alt="nd"
      />
    </div>
  );
};

export default HeaderPic;

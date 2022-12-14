import React from "react";
import Analysis from "../../../components/MoreFromClub/Analysis";
import Latino from "../../../components/MoreFromClub/Latino";
import MoreFromClub from "../../../components/MoreFromClub/MoreFromClub";
import EmbededVideo from "../../../components/YoutubeVideo/EmbededVideo";
import GetImage from "../../../screens/GetImage";

const MoreCards = () => {
  return (
    <div
      style={{
        width: "100%",
        background: "rgb(255, 255, 255)",
        height: "auto",
        marginTop: "40px",
      }}
    >
      <GetImage />
      {/* <EmbededVideo /> */}
      {/* <MoreFromClub /> */}
    </div>
  );
};

export default MoreCards;

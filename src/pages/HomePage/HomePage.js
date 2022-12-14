import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HeaderPic from "../../components/Header/HeaderPic";
import KnockPage from "../../components/KnockPage/KnockPage";
import LiveGame from "../../components/LiveGame/LiveGame";
import MoreFromClub from "../../components/MoreFromClub/MoreFromClub";
import BasicExample from "../../components/navbar/NavBar";
import Navbar2 from "../../components/navbar/NavBar2";
import Featured from "./morecards/Featured";
import MoreCards from "./morecards/MoreCards";
// import Slide from "react-reveal/Slide";
// import Rotate from "react-reveal/Rotate";
import Partners from "../../components/Partners/Partners";

import OurTeams from "../../components/OurTeam/OurTeams";
import BackgroundCover from "../../components/modal/BackgroundCover";

const HomePage = () => {
  const userId = localStorage.getItem("userId");
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  const navigate = useNavigate();
  useEffect(() => {
    if (userId & isAdmin) {
      navigate("/");
    }
  }, [navigate, userId]);
  return (
    <div style={{ background: "rgb(255, 255, 255)" }}>
      <BasicExample />
      <Header />
      {/* <HeaderPic /> */}

      <Featured />

      <LiveGame />
      {/* <Rotate bottom right> */}
      <MoreCards />
      {/* </Rotate> */}
      <KnockPage />
      <OurTeams />
      <Partners />
      <Footer />
    </div>
  );
};

export default HomePage;

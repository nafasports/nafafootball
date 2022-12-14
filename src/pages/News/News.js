import React from "react";
import BasicExample from "../../components/navbar/NavBar";
import GetPost from "../../screens/GetPost";
import MoreCards from "../HomePage/morecards/MoreCards";
// import Slide from "react-reveal/Slide";
import Footer from "../../components/Footer/Footer";
export const News = () => {
  return (
    <div>
      <BasicExample />
      {/* <Slide> */}
      <GetPost />
      {/* </Slide> */}

      {/* <Slide left> */}
      <MoreCards />
      {/* </Slide> */}
      <Footer />
    </div>
  );
};

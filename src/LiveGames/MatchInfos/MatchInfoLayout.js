import React from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import BasicExample from "../../components/navbar/NavBar";
import "./MatchInfo.css";
const MatchInfoLayout = (props, { poster }) => {
  const { id } = useParams();
  const MatchId = localStorage.getItem("matchId");
  return (
    <div>
      <BasicExample />
      <div>
        <div className="displ-m-layout">
          <div>
            {" "}
            <Link
              className="h-hover-div"
              to={`/gameInfo/${id}`}
              style={{ textDecoration: "none", color: "initial" }}
            >
              Info
            </Link>
          </div>
          <div>
            <Link
              className="h-hover-div"
              to={`/matchdayCommentary/${id}`}
              style={{ textDecoration: "none", color: "initial" }}
            >
              Commentary
            </Link>{" "}
          </div>
          <div>
            {" "}
            <Link
              className="h-hover-div"
              to="/matchdayStats"
              style={{ textDecoration: "none", color: "initial" }}
            >
              Stats
            </Link>
          </div>
        </div>
        <div>{props.children} </div>
      </div>
      <Footer />
    </div>
  );
};

export default MatchInfoLayout;

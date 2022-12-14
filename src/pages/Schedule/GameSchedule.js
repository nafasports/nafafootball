import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import BasicExample from "../../components/navbar/NavBar";
import Standings from "../HomePage/Standings/Standings";
import League from "../League/League";
import Tournament from "../Tournament/Tournament";
import "./GameSchedule.css";
const GameSchedule = () => {
  const [act, setAct] = useState(true);
  return (
    <div className="content-container">
      <BasicExample />
      <div className="tabs">
        <div className="tab-leagues" onClick={() => setAct(true)}>
          <h4 style={{ color: act ? "blue" : null }}>Leagues</h4>
        </div>
        <div className="tab-leagues" onClick={() => setAct(false)}>
          <h4 style={{ color: !act ? "blue" : null }}>League Divisions</h4>
        </div>
      </div>
      {act ? <Tournament /> : <League />}
      <Footer />
    </div>
  );
};

export default GameSchedule;

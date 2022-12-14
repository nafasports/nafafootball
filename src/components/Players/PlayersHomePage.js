import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import BasicExample from "../navbar/NavBar";
import Partners from "../Partners/Partners";
import pool from "../../assets/images/pool.png";
import md from "../../assets/images/md.jpg";
import "./PlayersHome.css";
import { GiPoolTableCorner } from "react-icons/gi";
const PlayersHomePage = () => {
  return (
    <div>
      <BasicExample />
      <h5
        className="text-center "
        style={{ color: "blue", fontWeight: "600", marginTop: "30px" }}
      >
        Nafa players category
      </h5>
      {/* <div>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-xl-4"> */}
      <div className="jst-f-div">
        <div className="card" style={{ borderRadius: "15px" }}>
          <div className="card-body text-center">
            <div className="mt-3 mb-4">
              <img
                src={pool}
                className="rounded-circle img-fluid"
                style={{ width: "100px" }}
              />
            </div>
            <h4 className="mb-2">Nafa Pool Players</h4>
            <p className="text-muted mb-4">
              @Pool Players <span className="mx-2">|</span>{" "}
              <Link to="/PollPlayers" style={{ textDecoration: "none" }}>
                Pool Players
              </Link>
            </p>

            <button
              type="button"
              className="btn btn-primary btn-rounded po"
              style={{ backgroundColor: "gainsboro" }}
            >
              <Link
                to="/PollPlayers"
                style={{ textDecoration: "none", color: "white" }}
              >
                See Pool Players
              </Link>
            </button>
          </div>
        </div>
        <div className="card" style={{ borderRadius: "15px" }}>
          <div className="card-body text-center">
            <div className="mt-3 mb-4">
              <img
                src={pool}
                className="rounded-circle img-fluid"
                style={{ width: "100px" }}
              />
            </div>
            <h4 className="mb-2">Nafa Team Players</h4>
            <p className="text-muted mb-4">
              @Team Plyers <span className="mx-2">|</span>{" "}
              <Link to="/TeamPlayers" style={{ textDecoration: "none" }}>
                Team Players
              </Link>
            </p>

            <button type="button" className="btn btn-primary btn-rounded nu">
              <Link
                to="/TeamPlayers"
                style={{ textDecoration: "none", color: "white" }}
              >
                See Team Players
              </Link>
            </button>
          </div>
        </div>
      </div>
      <h5
        className="text-center "
        style={{ color: "blue", fontWeight: "600", marginTop: "30px" }}
      >
        <Link to="/poolPlayerApplication" style={{ textDecoration: "none" }}>
          Apply as a Pool Player
        </Link>
      </h5>
      <br />
      <hr />
      <Partners />
      <Footer />
    </div>
  );
};

export default PlayersHomePage;

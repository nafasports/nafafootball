import React from "react";
import { Nav } from "react-bootstrap";
import "./LivesGames.css";

import { Link } from "react-router-dom";
const Swith = ({ step1, step2, step3, step4, step5, step6, step7 }) => {
  return (
    <div>
      <div className="nava-diva">
        {/* <Nav.Item className="item-nava">
          {step1 ? (
            <Nav.Link>
              <Link
                to="/sat"
                style={{
                  textDecoration: "none",
                  color: "#0c132ce7",
                  fontWeight: "700",
                }}
              >
                27th
              </Link>
            </Nav.Link>
          ) : (
            <Nav.Link disabled>27th</Nav.Link>
          )}
        </Nav.Item>

        <Nav.Item className="item-nava">
          {step2 ? (
            <Nav.Link>
              {" "}
              <Link
                to="/sund"
                style={{
                  textDecoration: "none",
                  color: "#0c132ce7",
                  fontWeight: "700",
                }}
              >
                28th
              </Link>
            </Nav.Link>
          ) : (
            <Nav.Link disabled>28th</Nav.Link>
          )}
        </Nav.Item>
        <Nav.Item className="item-nava">
          {step3 ? (
            <Nav.Link
              style={{
                textDecoration: "none",
                color: "#0c132ce7",
                fontWeight: "700",
              }}
            >
              <Link
                to="/29th"
                style={{
                  textDecoration: "none",
                  color: "#0c132ce7",
                  fontWeight: "700",
                }}
              >
                29th
              </Link>
            </Nav.Link>
          ) : (
            <Nav.Link
              disabled
              style={{
                textDecoration: "none",
                color: step3 ? "yellow" : "blueviolet",
              }}
            >
              29th
            </Nav.Link>
          )}
        </Nav.Item> */}
        <Nav.Item className="item-nava">
          {step4 ? (
            <Nav.Link>
              {" "}
              <Link
                to="/livegames"
                style={{
                  textDecoration: "none",
                  color: "#0c132ce7",
                  fontWeight: "700",
                  color: step7 ? "gold" : null,
                }}
              >
                All GAMES
              </Link>
            </Nav.Link>
          ) : (
            <Nav.Link
              disabled
              style={{
                color: !step7 ? "initial" : "gold",
              }}
            >
              ALL GAMES
            </Nav.Link>
          )}
        </Nav.Item>
        {/* <Nav.Item className="item-nava">
          {step5 ? (
            <Nav.Link>
              {" "}
              <Link
                to="/31st"
                style={{
                  textDecoration: "none",
                  color: "#0c132ce7",
                  fontWeight: "700",
                }}
              >
                31st
              </Link>
            </Nav.Link>
          ) : (
            <Nav.Link disabled>31st</Nav.Link>
          )}
        </Nav.Item>
        <Nav.Item className="item-nava">
          {step6 ? (
            <Nav.Link>
              {" "}
              <Link
                to="/1st"
                style={{
                  textDecoration: "none",
                  color: "#0c132ce7",
                  fontWeight: "700",
                }}
              >
                1st
              </Link>
            </Nav.Link>
          ) : (
            <Nav.Link disabled>1st</Nav.Link>
          )}
        </Nav.Item>
        <Nav.Item className="item-nava">
          {step7 ? (
            <Nav.Link>
              {" "}
              <Link
                to="/2nd"
                style={{
                  textDecoration: "none",
                  color: "#0c132ce7",
                  fontWeight: "700",
                }}
              >
                2nd
              </Link>
            </Nav.Link>
          ) : (
            <Nav.Link disabled>2nd</Nav.Link>
          )}
        </Nav.Item> */}
      </div>
    </div>
  );
};

export default Swith;

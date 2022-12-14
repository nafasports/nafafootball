import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { Link } from "react-router-dom";
import BasicExample from "../../components/navbar/NavBar";

const CheckOutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <div>
      <BasicExample />
      <Nav className="justify-content-center mb-4">
        <Nav.Item>
          {step1 ? (
            <Nav.Link>
              <Link
                to="/theGame"
                style={{
                  textDecoration: "none",
                  color: "#0c132ce7",
                  fontWeight: "700",
                }}
              >
                THE GAME
              </Link>
            </Nav.Link>
          ) : (
            <Nav.Link disabled>THE GAME</Nav.Link>
          )}
        </Nav.Item>

        <Nav.Item>
          {step2 ? (
            <Nav.Link>
              {" "}
              <Link
                to="/positions"
                style={{
                  textDecoration: "none",
                  color: "#0c132ce7",
                  fontWeight: "700",
                }}
              >
                POSITIONS
              </Link>
            </Nav.Link>
          ) : (
            <Nav.Link disabled>POSITIONS</Nav.Link>
          )}
        </Nav.Item>
        <Nav.Item>
          {step3 ? (
            <Nav.Link
              style={{
                textDecoration: "none",
                color: "#0c132ce7",
                fontWeight: "700",
              }}
            >
              <Link
                to="/kicks"
                style={{
                  textDecoration: "none",
                  color: "#0c132ce7",
                  fontWeight: "700",
                }}
              >
                KICK OFF & PENALTIES{" "}
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
              KICK OFF & PENALTIES
            </Nav.Link>
          )}
        </Nav.Item>
        <Nav.Item>
          {step4 ? (
            <Nav.Link>
              {" "}
              <Link
                to="/field"
                style={{
                  textDecoration: "none",
                  color: "#0c132ce7",
                  fontWeight: "700",
                }}
              >
                FIELD LAYOUT{" "}
              </Link>
            </Nav.Link>
          ) : (
            <Nav.Link disabled>FIELD LAYOUT</Nav.Link>
          )}
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default CheckOutSteps;

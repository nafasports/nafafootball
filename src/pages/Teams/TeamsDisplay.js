import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import "../League/League.css";
import "./TeamD.css";

const TeamsDisplay = ({ poster }) => {
  return (
    <div
      style={{
        width: "100%",
        background: "rgb(255, 255, 255)",
        height: "auto",
      }}
    >
      <Row className="div-fl-d">
        {poster?.map((posty, index) => (
          <Col
            // className="container"
            key={index}
            sm={12}
            md={6}
            lg={4}
            xl={3}
            style={{
              marginBottom: "30px",
              marginLeft: "30px",
              marginRight: "30px",
            }}
          >
            <div class="col-md-3">
              <div class="card-sl k">
                <div
                  class="card-image"
                  style={{
                    width: "100%",
                    height: "25vh",
                    objectFit: "cover",
                  }}
                >
                  <img src={posty?.image} alt="ncjj" />
                </div>

                <a class="card-action" href="#">
                  <i class="fa fa-heart"></i>
                </a>
                <div class="card-heading">{posty?.teamName}</div>
                <div class="card-text">{posty?.teamShorthand}</div>
                <div class="card-text">{posty?.tournament}</div>
                <a href="#" class="card-button">
                  {posty?.league}
                </a>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TeamsDisplay;

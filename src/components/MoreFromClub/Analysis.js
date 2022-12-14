import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import "./More.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import Message from "../Message";
import Loader from "../Loader";
import { Link } from "react-router-dom";
const Analysis = ({ spain }) => {
  return (
    <div
      style={{
        width: "100%",
        background: "rgb(255, 255, 255)",
        height: "auto",
      }}
    >
      {/* <Carousel> */}
      <div>
        <div class="col-md-3 njt">
          <div class="card-sl k">
            <div class="card-image">
              <img
                src={spain?.image}
                alt="ncjj"
                style={{
                  width: "100%",
                  height: "25vh",
                  objectFit: "cover",
                }}
              />
            </div>
            <div
              className="card-body"
              style={{
                width: "auto",
                height: "20vh",
                // objectFit: "cover",
              }}
            >
              <a class="card-action" href="#">
                <i class="fa fa-heart"></i>
              </a>
              <div class="card-heading">{spain?.caption}</div>
              <div class="card-text">{spain?.desc} </div>
            </div>
            <button
              class="card-button"
              style={{
                textDecoration: "none",
                borderColor: "transparent",
              }}
            >
              <Link
                to={`/newsDetails/${spain?._id}`}
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontFamily: "Poppins",
                }}
              >
                Read More...
              </Link>
            </button>
          </div>
        </div>
      </div>
      {/* </Carousel> */}
    </div>
  );
};

export default Analysis;

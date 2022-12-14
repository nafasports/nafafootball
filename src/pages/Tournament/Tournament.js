import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { FiCodepen } from "react-icons/fi";
import "./Tournament.css";
const Tournament = () => {
  const [poster, setPoster] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "https://nafasports.herokuapp.com/api/tournament/"
      );
      console.log(data);
      setPoster(data);
      setLoading(false);
      setError(false);

      localStorage.setItem("PostId", JSON.stringify(data));
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <div style={{ marginTop: "30px", marginBottom: "120px" }}>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">Failed</Message>
        ) : (
          <div>
            <h6
              style={{
                display: "flex",
                marginRight: "center",
                marginLeft: "center",
                justifyContent: "center",
              }}
            >
              Tournament
            </h6>
            <hr className="hr" />
            {/* <Carousel> */}

            {poster?.tournaments?.map((posty) => (
              <div
                style={{
                  display: "flex",
                  marginRight: "center",
                  marginLeft: "center",
                  justifyContent: "center",
                }}
              >
                <div class="col-md-3" style={{ marginBottom: "50px" }}>
                  <div class="card-sl">
                    <div class="card-image">
                      <img src={posty?.logo} alt="ncjj" />
                    </div>

                    <a class="card-action" href="#">
                      <i class="fa fa-heart"></i>
                    </a>
                    <div class="card-heading">{posty?.tournament}</div>
                    <div class="card-text">Nafa leagues </div>

                    <a href="#" class="card-button">
                      {posty?.tournament}
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* </Carousel> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tournament;

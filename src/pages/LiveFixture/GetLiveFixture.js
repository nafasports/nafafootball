import axios from "axios";
import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import "./GetLive.css";
const GetLiveFixture = () => {
  const [poster, setPoster] = useState([]);
  const [spanish, setSpanish] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "https://nafasports.herokuapp.com/api/match/matchDays/1"
      );
      console.log(data);
      setPoster(data);
      setLoading(false);
      setError(false);

      localStorage.setItem("PostId", JSON.stringify(data));
    };

    fetchPosts();
  }, []);
  // const lastPostIndex = currentPage * postsPerPage;
  // const firstPostIndex = lastPostIndex - postsPerPage;
  // const currentPosts = poster?.gameFixtures?.slice(
  //   firstPostIndex,
  //   lastPostIndex
  // );
  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">Failed</Message>
      ) : (
        <div style={{ marginTop: "40px" }}>
          {poster?.gameFixtures?.map((spain) => (
            <ListGroup
              as="ul"
              style={{ borderRadius: "0px" }}
              className="get-div-live"
            >
              <ListGroup.Item
                style={{
                  background: "whiteSmoke",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <h7>
                      <strong>{spain?.league}</strong>{" "}
                    </h7>
                  </div>
                  <div>
                    {" "}
                    <h7>{spain?.date}</h7>
                  </div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <span>
                      {" "}
                      <h7>{spain?.team1} </h7>
                    </span>{" "}
                    <h7>vs</h7>
                    <span>
                      {" "}
                      <h7>{spain?.team2} </h7>
                    </span>
                  </div>
                  <div>
                    <h7>{spain?.time}</h7>
                  </div>
                </div>
              </ListGroup.Item>
            </ListGroup>
          ))}

          <div>
            <Link
              to="/livegames"
              className="more-analysis"
              style={{ textDecoration: "none" }}
            >
              {" "}
              More Fixtures
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetLiveFixture;

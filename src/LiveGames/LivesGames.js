import { Card, Typography } from "@mui/material";

import Modal from "../components/modal/Modal";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import anfl from "../assets/images/anfl.png";
import Swith from "./Swith";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "./LivesGames.css";
import { CardActionArea } from "@mui/material";
import BasicExample from "../components/navbar/NavBar";
import Footer from "../components/Footer/Footer";
import LiveGameLayout from "./LiveGameLayout";
import MatchCommentary from "./Commentary/MatchCommentary";

const LivesGames = () => {
  const [poster, setPoster] = useState([]);
  const [spanish, setSpanish] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  //   const [currentPage, setCurrentPage] = useState(1);
  //   const [postsPerPage, setPostsPerPage] = useState(4);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "https://nafasports.herokuapp.com/api/match/"
      );
      // .then((json) => {
      //   const data = json.sort((a, b) => a.league.localeCompare(b.league));
      //   setPoster(data);
      // });
      setPoster(data);
      console.log(data);
      setLoading(false);
      setError(false);

      localStorage.setItem("PostId", JSON.stringify(data));
    };

    fetchPosts();
  }, []);
  return (
    <LiveGameLayout>
      <div>
        <ListGroup className="grouplister2" style={{ borderRadius: "0px" }}>
          <ListGroup.Item className="listStep">
            <Swith step1 step2 step3 step4 step5 step6 step7 />
          </ListGroup.Item>
          {/* <ListGroup.Item> */}
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">Failed</Message>
          ) : (
            <div>
              {poster?.gameFixtures?.map((spain, index) => (
                <div className="data-list" key={index}>
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
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <Link
                          to={`/gameInfo/${spain?._id}`}
                          style={{ textDecoration: "none", color: "initial" }}
                        >
                          <span>
                            {" "}
                            <h7>{spain?.team1} </h7>
                          </span>{" "}
                          <span>
                            <h7>
                              <strong> {spain?.scoresTeam1}</strong>
                            </h7>{" "}
                          </span>
                          <h7>vs</h7>
                          <span style={{ marginLeft: "5px" }}>
                            <h7>
                              <strong>{spain?.scoresTeam2}</strong>{" "}
                            </h7>
                          </span>
                          <span>
                            <h7>{spain?.team2} </h7>
                          </span>
                        </Link>
                      </div>
                      <div>
                        <h7>{spain?.time}</h7>
                      </div>
                    </div>
                  </ListGroup.Item>
                </div>
              ))}
            </div>
          )}
          {/* </ListGroup.Item> */}
        </ListGroup>
      </div>
    </LiveGameLayout>
  );
};

export default LivesGames;
{
  /* </Card> */
}
// ?.sort((league, date) =>
//   league.id > date.id ? 1 : -1
// )

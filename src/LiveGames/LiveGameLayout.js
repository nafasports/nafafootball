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

const LiveGameLayout = (props) => {
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
    <div>
      <BasicExample />
      {/* <Modal /> */}
      <div>
        <div className="font-small-div">
          {/* <Card variant="outlined"> */}
          {/* <div>
              {" "}
              <img
                src={anfl}
                alt="vdg"
                style={{ width: "auto", height: "20vh" }}
              />
            </div> */}
          <div>
            <Card sx={{ maxWidth: 1500 }}>
              <CardActionArea>
                <CardContent style={{ height: "auto" }}>
                  {/* <div>
                      {" "}
                      <img
                        src={anfl}
                        alt="vdg"
                        style={{ width: "auto", height: "20vh" }}
                      />
                    </div> */}
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    style={{
                      marginBottom: "15px",
                      textAlign: "center",
                      fontWeight: "600",
                    }}
                    className="live-hh"
                  >
                    {/* <Link
                      to="./livegames"
                      style={{ textDecoration: "none", color: "inherit" }}
                    > */}
                    Live Games
                    {/* </Link> */}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>

                  <Typography>
                    <div className="live-div-display">
                      <div>
                        <ListGroup
                          as="ul"
                          className="lister"
                          style={{ borderRadius: "0px" }}
                        >
                          <ListGroup.Item>
                            <Link
                              to="/Nssffltournament"
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
                            >
                              {" "}
                              NSSFFL
                            </Link>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <Link
                              to="/NigeriaPremiershiptournament"
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
                            >
                              Nigerian Premiership
                            </Link>
                          </ListGroup.Item>

                          <ListGroup.Item>
                            {" "}
                            <Link
                              to="/Academicatournament"
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
                            >
                              ACADEMICA
                            </Link>
                          </ListGroup.Item>
                          <ListGroup.Item>FEMALE PROFESSIONAL</ListGroup.Item>
                          <ListGroup.Item>NSSFFL JUNIOR</ListGroup.Item>
                          <ListGroup.Item>LAGOS</ListGroup.Item>
                          <ListGroup.Item>KD LEAGUE</ListGroup.Item>
                          <ListGroup.Item>e.t.c</ListGroup.Item>
                        </ListGroup>
                      </div>
                      <div>{props.children}</div>
                    </div>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LiveGameLayout;
{
  /* </Card> */
}
// ?.sort((league, date) =>
//   league.id > date.id ? 1 : -1
// )

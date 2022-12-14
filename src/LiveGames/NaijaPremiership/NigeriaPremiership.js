import axios from "axios";
import React, { useEffect, useState } from "react";
import { ListGroup, Table } from "react-bootstrap";
import Message from "../../components/Message";
import LiveGameLayout from "../LiveGameLayout";
import Swith from "../Swith";
import Loader from "../../components/Loader";
const NigeriaPremiership = () => {
  const date = new Date();
  console.log(date);
  const [poster, setPoster] = useState([]);
  const [stand, setStand] = useState([]);
  const [filtered, setFiltered] = useState("");
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

      //   localStorage.setItem("PostId", JSON.stringify(data));
    };

    fetchPosts();
  }, []);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "https://nafasports.herokuapp.com/api/standings/"
      );
      // .then((json) => {
      //   const data = json.sort((a, b) => a.league.localeCompare(b.league));
      //   setPoster(data);
      // });
      setStand(data);
      console.log(data);
      setLoading(false);
      setError(false);

      //   localStorage.setItem("PostId", JSON.stringify(data));
    };

    fetchPosts();
  }, []);
  return (
    <LiveGameLayout>
      <div>
        <ListGroup className="grouplister2" style={{ borderRadius: "0px" }}>
          <ListGroup.Item className="listStep" style={{ color: "gold" }}>
            Nigerian Premiership Matches
            {/* <Swith step1 step2 step3 step4 step5 step6 step7 /> */}
          </ListGroup.Item>
          {/* <ListGroup.Item> */}
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">Failed</Message>
          ) : (
            <div>
              {poster?.gameFixtures
                ?.filter((value) => {
                  if (filtered === "Team Player") {
                    return value;
                  } else if (value.league === "Nigerian Premiership") {
                    return value;
                  }
                })

                .map((spain) => (
                  <div className="data-list">
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
                        </div>
                        <div>
                          <h7>{spain?.time}</h7>
                        </div>
                      </div>
                    </ListGroup.Item>
                    <div>
                      <Table
                        striped
                        bordered
                        hover
                        responsive
                        class="table align-middle mb-0 bg-white"
                      >
                        <thead class="bg-light">
                          <tr>
                            <th></th>
                            <th>TEAM</th>
                            <th>P</th>
                            <th>W</th>
                            <th>D</th>
                            <th>L</th>
                            <th>GF</th>
                            <th>GA</th>
                            <th>GD</th>
                            <th>PTS</th>
                          </tr>
                        </thead>
                        <tbody>
                          {stand
                            ?.filter((value) => {
                              if (filtered === "Nigerian Premiership") {
                                return value;
                              } else if (
                                value.leagueDivision ===
                                  "Nigerian Premiership" &&
                                value.group === "Group K"
                              ) {
                                return value;
                              }
                            })
                            .map((usery) => (
                              <tr key={usery._id}>
                                <td>
                                  <div class="d-flex align-items-center">
                                    <div class="ms-3">
                                      <p class="fw-bold mb-1">{usery.no}</p>
                                    </div>
                                  </div>
                                </td>
                                <td>{usery.team}</td>
                                <td>{usery.playedMatches}</td>

                                <td>{usery.win}</td>
                                <td>{usery.draw}</td>
                                <td>{usery.lose}</td>
                                <td>{usery.goalFor}</td>
                                <td>{usery.goalAgainst}</td>
                                <td>{usery.goalDiference}</td>
                                <td>{usery.position}</td>
                              </tr>
                            ))}
                        </tbody>
                      </Table>
                    </div>
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

export default NigeriaPremiership;

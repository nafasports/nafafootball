import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import BasicExample from "../navbar/NavBar";
import Pagination from "../Pagination";
import Partners from "../Partners/Partners";
import TeamPlayerDisplay from "./TeamPlayerDisplay";

const TeamPlayers = () => {
  // const { data } = players;
  const [players, setPlayers] = useState([]);
  const [filtered, setFiltered] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);
  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get(
        "https://nafasports.herokuapp.com/api/players"
      );
      console.log(data);
      setPlayers(data);
    };
    fetchUsers();
  }, []);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = players?.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      <BasicExample />
      {/* <button value="Team Player" onClick={handleItem}>
        CLick
      </button> */}

      {players
        ?.filter((value) => {
          if (filtered === "Team Player") {
            return value;
          } else if (value.playerCategory === "Team Player") {
            return value;
          }
        })
        .map((usy, index) => (
          <Col key={index} sm={12} md={6} lg={4} xl={3}>
            <div className="dsp-ply">
              {/* <Image src={usy.passport} fluid thumbnail className="img-dsp" /> */}
              {/* <h6>
                {" "}
                <Link
                  to={`/playerProfile/${usy._id}`}
                  style={{
                    textDecoration: "none",
                    marginLeft: "10px",
                    color: "black",
                  }}
                >
                  {usy.playerId} {usy.playerCategory}
                  {usy.playerDraftTeams}
                </Link>
              </h6> */}
            </div>
          </Col>
        ))}
      <TeamPlayerDisplay players={currentPosts} />

      <Pagination
        totalPosts={players?.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <hr />
      <Partners />
      <Footer />
    </div>
  );
};

export default TeamPlayers;

import React, { useEffect, useState } from "react";
import BasicExample from "../../components/navbar/NavBar";
import Pagination from "../../components/Pagination";

import Loader from "../../components/Loader";
import Message from "../../components/Message";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import TournDisplay from "./TournDisplay";
const TournamentTeams = () => {
  const [poster, setPoster] = useState([]);
  //   const [spanish, setSpanish] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(30);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "https://nafasports.herokuapp.com/api/tournamntTeams"
      );
      console.log(data);
      setPoster(data);
      setLoading(false);
      setError(false);

      localStorage.setItem("PostId", JSON.stringify(data));
    };

    fetchPosts();
  }, []);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = poster?.slice(firstPostIndex, lastPostIndex);
  return (
    <div>
      <BasicExample />

      <div style={{ marginTop: "30px" }}>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">Failed</Message>
        ) : (
          <div>
            <h6 className="Div-h6-v">TournamentTeams</h6>
            <hr className="hr" />
            {/* <Carousel> */}
            <div style={{ marginBottom: "30px" }}>
              <TournDisplay poster={currentPosts} />

              <Pagination
                totalPosts={poster?.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            </div>

            {/* </Carousel> */}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default TournamentTeams;

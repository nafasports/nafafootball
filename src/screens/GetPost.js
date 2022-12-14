import axios from "axios";
import React, { useEffect, useState } from "react";

import { Col, Container, Image } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Game from "../components/morecards/Game";
import Analysis from "../components/MoreFromClub/Analysis";
import Pagination from "../components/Pagination";
import "./GetPost.css";

const GetPost = () => {
  // let postDetail = JSON.parse(localStorage.getItem("All-Post"));
  const [poster, setPoster] = useState([]);
  const [spanish, setSpanish] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "https://nafasports.herokuapp.com/api/posts/categories/LATEST NEWS"
      );
      console.log(data);
      setPoster(data);
      setLoading(false);
      setError(false);

      localStorage.setItem("PostId", JSON.stringify(data));
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "https://nafasports.herokuapp.com/api/posts/categories/GOSSIP"
      );
      console.log(data);
      setSpanish(data);
      //   setLoading(false);
      //   setError(false);

      localStorage.setItem("PostId", JSON.stringify(data));
    };

    fetchPosts();
  }, []);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = poster?.posts?.slice(firstPostIndex, lastPostIndex);

  return (
    <div style={{ marginTop: "30px" }}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">Failed</Message>
      ) : (
        <div>
          <h6 className="Div-h6-v">LATEST NEWS</h6>
          <hr className="hr" />
          {/* <Carousel> */}
          <div>
            <Game poster={currentPosts} />
            {/* <Analysis spain={currentPosts} /> */}
            <Pagination
              totalPosts={poster?.posts?.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
          {/* <Row
            className="row-mp"
            style={{ width: "100%", marginLeft: "auto", marginRight: "auto" }}
          >
            {poster?.posts?.map((posty) => (
              <Col key={posty._id} sm={12} md={6} lg={4} xl={3}>
                <Game posty={posty} poster={currentPosts} />
                <Pagination
                  totalPosts={poster?.posts?.length}
                  postsPerPage={postsPerPage}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                />
              </Col>
            ))}
          </Row> */}
          {/* </Carousel> */}
        </div>
      )}
      <div style={{ marginTop: "40px" }}>
        <h6 className="Div-h6-v">GOSSIP</h6>
        <hr className="hr" />
        <Row
          className="row-mp"
          style={{ width: "100%", marginLeft: "auto", marginRight: "auto" }}
        >
          {spanish?.posts?.map((spain) => (
            <Col key={spain._id} sm={12} md={6} lg={4} xl={3}>
              <Analysis spain={spain} />
            </Col>
          ))}
        </Row>
        <div className="more-analysis">MORE ANALYSIS</div>
      </div>
    </div>
  );
};

export default GetPost;

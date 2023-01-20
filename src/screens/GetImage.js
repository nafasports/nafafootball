import axios from "axios";
import React, { useEffect, useState } from "react";

import { Col, Container, Image } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Game from "../components/morecards/Game";
import TransferWindows from "../components/morecards/TransferWindows";
import Analysis from "../components/MoreFromClub/Analysis";
import Latino from "../components/MoreFromClub/Latino";
import Pagination from "../components/Pagination";
import "./GetPost.css";

const GetImage = () => {
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
        "https://nafasports.herokuapp.com/api/imagegallery"
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
        "https://nafasports.herokuapp.com/api/posts/categories/TRANSFER WINDOWS"
      );
      console.log(data);
      setSpanish(data);
      setLoading(false);
      setError(false);

      localStorage.setItem("PostId", JSON.stringify(data));
    };

    fetchPosts();
  }, []);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = poster?.images?.slice(firstPostIndex, lastPostIndex);
  const currentPoster = spanish?.posts?.slice(firstPostIndex, lastPostIndex);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">Failed</Message>
      ) : (
        <div style={{ marginBottom: "40px" }}>
          <h6 className="Div-h6-v">TRANSFER WINDOWS</h6>
          <hr className="hr" />
          {/* <Carousel> */}
          <div>
            <TransferWindows spanish={currentPoster} />

            <Pagination
              totalPosts={spanish?.posts?.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
        </div>
      )}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">Failed</Message>
      ) : (
        <div>
          <h6 className="Div-h6-v">PHOTO GALLERY</h6>
          <hr className="hr" />
          {/* <Carousel> */}
          <div>
            <Latino poster={currentPosts} />

            <Pagination
              totalPosts={poster?.images?.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
          {/* <Row className="row-mp">
            {poster?.images?.map((posty) => (
              <Col key={posty._id} sm={12} md={6} lg={4} xl={3}>
                <Latino posty={posty} poster={currentPosts} />
                <Pagination
                  totalPosts={poster?.images?.length}
                  postsPerPage={postsPerPage}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                />

              
              </Col>
            ))}
          </Row> */}
          {/* </Carousel> */}
          <div className="more-analysis">MORE ANALYSIS</div>
        </div>
      )}
    </div>
  );
};

export default GetImage;

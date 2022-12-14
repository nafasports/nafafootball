import { Input } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { ImGift } from "react-icons/im";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import Partners from "../Partners/Partners";
import Footer from "../Footer/Footer";
import BasicExample from "../navbar/NavBar";
import "./Players.css";
import PlayersDisplay from "./PlayersDisplay";
import Pagination from "../Pagination";

const Players = () => {
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);
  const [error, setError] = useState(true);
  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get(
        "https://nafasports.herokuapp.com/api/players"
      );

      setUsers(data);
      setLoading(false);
      setError(false);
      //   localStorage.setItem("All-Users", JSON.stringify(data));
    };
    fetchUsers();
  }, []);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = users?.slice(firstPostIndex, lastPostIndex);
  return (
    <div className="div-plys">
      <BasicExample />
      <div
        style={{
          marginLeft: "30px",
          marginRight: "30px",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <div className="chioma">{loading ? <Loader /> : <div></div>}</div>
      </div>
      <div>
        <PlayersDisplay users={currentPosts} />

        <Pagination
          totalPosts={users?.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
      <hr />
      <Partners />
      <Footer />
    </div>
  );
};

export default Players;

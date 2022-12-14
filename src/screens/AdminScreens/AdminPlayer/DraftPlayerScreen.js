import { Input } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Image, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loader from "../../../components/Loader";
import AdminLayout from "../AdminLayout";
import BasicExample from "../../../components/navbar/NavBar";
import { FaEdit, FaTrash } from "react-icons/fa";
import Message from "../../../components/Message";
import AdminPlayerDrafting from "./AdminPlayerDrafting";
import Pagination from "../../../components/Pagination";
import AdminTeamPlayers from "./AdminTeamPlayers";

const DraftPlayerScreen = () => {
  const [users, setUsers] = useState([]);
  const [draft, setDraft] = useState();
  const [searchTitle, setSearchTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);
  const [error, setError] = useState(true);
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const { data } = await axios.get("http://localhost:5000/api/players");

  //     setDraft(data);
  //     setLoading(false);
  //     setError(false);
  //     //   localStorage.setItem("All-Users", JSON.stringify(data));
  //   };
  //   fetchUsers();
  // }, []);
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
  const currentyPosts = users?.slice(firstPostIndex, lastPostIndex);
  return (
    <AdminLayout>
      <div className="div-plys">
        <div
          style={{
            marginLeft: "30px",
            marginRight: "30px",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          <div className="chioma">{loading ? <Loader /> : <div></div>}</div>
          <br />
          <h4 className="mb-4">Players List</h4>
          <div>
            <AdminPlayerDrafting users={currentPosts} />

            <Pagination
              totalPosts={users?.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
          <div>
            <AdminTeamPlayers users={currentyPosts} />

            <Pagination
              totalPosts={users?.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default DraftPlayerScreen;

import React, { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";

import { FaCheck, FaEdit, FaTimes, FaTrash } from "react-icons/fa";
import axios from "axios";

import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { Link, useParams } from "react-router-dom";
import BasicExample from "../../components/navbar/NavBar";
import Footer from "../../components/Footer/Footer";

const GetTounamentTeams = () => {
  const [user, setUser] = useState({});
  const [filtered, setFiltered] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        `https://nafasports.herokuapp.com/api/tournamntTeams/${id}`
      );
      console.log(data);
      setUser(data);
      setLoading(false);
      setError(false);
      //   localStorage.setItem("AdminUserDetails", JSON.stringify(data._id));
      //   localStorage.setItem("AdimUserId", data.user?._id);
    };

    fetchPosts();
  }, [id]);

  return (
    <div>
      <BasicExample />
      <h1 style={{ fontSize: "25px" }}>Tournament Teams</h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>TOURNAMENT</th>
              <th>LEAGUE NAME</th>
              <th>LEAGUE CATEGORY</th>
              <th>STATE</th>
              <th>SEASON</th>
              <th>START UP DATE</th>
              <th>END DATE</th>
              <th>TEAMS</th>
            </tr>
          </thead>
          <tbody>
            <tr key={user._id}>
              <td>{user.tournament}</td>
              <td>{user.league}</td>

              <td>{user.leagueCat}</td>
              <td>{user.state}</td>
              <td>{user.season}</td>
              <td>{user.startMonth}</td>
              <td>{user.endMonth}</td>
              <td>{user.teams}</td>
            </tr>
          </tbody>
        </Table>
      )}
      <Footer />
    </div>
  );
};

export default GetTounamentTeams;

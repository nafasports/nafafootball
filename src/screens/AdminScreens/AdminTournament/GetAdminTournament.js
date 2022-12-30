import React, { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Container } from "react-bootstrap";

import { FaCheck, FaEdit, FaTimes, FaTrash } from "react-icons/fa";
import axios from "axios";
import Message from "../../../components/Message";
import Loader from "../../../components/Loader";
import { Link } from "react-router-dom";
import AdminLayout from "../AdminLayout";
import BasicExample from "../../../components/navbar/NavBar";

const GetAdminTournament = () => {
  const [user, setUser] = useState([]);
  const [news, setNews] = useState([]);
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "https://nafasports.herokuapp.com/api/tournament"
      );
      console.log(data);
      setUser(data);
      setLoading(false);
      setError(false);
      //   localStorage.setItem("AdminUserDetails", JSON.stringify(data._id));
      localStorage.setItem("AdimUserId", data.user?._id);
    };

    fetchPosts();
  }, []);

  return (
    <AdminLayout>
      <Container>
        <h1 style={{ fontSize: "25px" }}>Tournament </h1>

        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>TOURNAMENT LOGO</th>
                <th>TOURNAMENT NAME</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {user?.tournaments?.map((usery) => (
                <tr key={usery._id}>
                  <td style={{ color: "green" }}>
                    {" "}
                    <img
                      src={usery.logo}
                      alt="jj"
                      style={{ width: "100px", height: "8vh" }}
                    />
                  </td>
                  <td style={{ color: "green" }}>{usery.tournament}</td>

                  <td>
                    {/* <Link to={`/admin/tournament/${usery._id}/edit`}> */}
                    <Button variant="light" className="btn-sm">
                      <FaEdit />
                    </Button>
                    {/* </Link> */}
                    <Button variant="danger" className="btn-sm">
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
      {/* <br /> */}
    </AdminLayout>
  );
};

export default GetAdminTournament;

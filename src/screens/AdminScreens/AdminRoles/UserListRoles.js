import React, { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Container } from "react-bootstrap";

import { FaCheck, FaEdit, FaTimes, FaTrash } from "react-icons/fa";
import axios from "axios";
import Message from "../../../components/Message";
import Loader from "../../../components/Loader";
import { Link } from "react-router-dom";
import BasicExample from "../../../components/navbar/NavBar";
import "./UserList2Screen.css";
import AdminLayout from "../AdminLayout";
const UserLIstRoles = () => {
  const [filtered, setFiltered] = useState("");
  const [user, setUser] = useState([]);
  const [news, setNews] = useState([]);
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "https://nafasports.herokuapp.com/api/users/"
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
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "https://nafasports.herokuapp.com/api/users/roles/NewsCaster"
      );
      console.log(data);
      setNews(data);
      //   setLoading(false);
      //   setError(false);

      localStorage.setItem("AdimUserId", data.news.users._id);
    };
    fetchPosts();
  }, []);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "https://nafasports.herokuapp.com/api/users/roles/GameAdmin"
      );
      console.log(data);
      setGames(data);
      //   setLoading(false);
      //   setError(false);

      localStorage.setItem("AdimUserId", data.news.users._id);
    };
    fetchPosts();
  }, []);
  return (
    <AdminLayout>
      <Container>
        <h1
          style={{
            fontSize: "25px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          SubAdmins
        </h1>

        <div style={{ marginTop: "20px" }}>
          <h2 style={{ fontSize: "25px" }}>List Of Assigned User Roles</h2>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <Table striped bordered hover responsive className="table-sm">
              <thead>
                <tr>
                  <th>USERNAME</th>
                  <th>EMAIL</th>
                  <th>Roles</th>
                  <th>ADMIN</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {user
                  ?.sort(function (a, b) {
                    if (a.roles < b.roles) {
                      return -1;
                    }
                    if (a.roles > b.roles) {
                      return 1;
                    }
                    return 0;
                  })

                  .map((newsly) => (
                    <tr key={newsly._id}>
                      {newsly.roles === "Client" ? null : (
                        <>
                          <td>{newsly.username}</td>
                          <td>{newsly.email}</td>
                          <td>{newsly.roles}</td>

                          <td>
                            {newsly.isAdmin ? (
                              <FaCheck style={{ color: "green" }} />
                            ) : (
                              <>
                                <FaTimes style={{ color: "red" }} />
                                <small>
                                  <Link
                                    style={{ textDecoration: "none" }}
                                    to={`/admin/user/${newsly._id}/adminedit`}
                                  >
                                    Make user an Admin?
                                  </Link>
                                </small>
                              </>
                            )}
                          </td>
                          <td>
                            <Link to={`/admin/user/${newsly._id}/edit`}>
                              <Button variant="light" className="btn-sm">
                                <FaEdit />
                              </Button>
                            </Link>
                            <Button variant="danger" className="btn-sm">
                              <FaTrash />
                            </Button>
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
              </tbody>
            </Table>
          )}
        </div>
        {/* <div style={{ marginTop: "20px" }}>
          <h2 style={{ fontSize: "25px" }}>GAMES ADMIN</h2>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <Table striped bordered hover responsive className="table-sm">
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>Roles</th>
                  <th>ADMIN</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {games?.users?.map((game) => (
                  <tr key={game._id}>
                    <td>{game.username}</td>
                    <td>{game.email}</td>
                    <td>{game.roles}</td>
                    <td>
                      {games.isAdmin ? (
                        <FaCheck style={{ color: "green" }} />
                      ) : (
                        <>
                          <FaTimes style={{ color: "red" }} />
                          <small>
                            <Link
                              style={{ textDecoration: "none" }}
                              to={`/admin/user/${game._id}/adminedit`}
                            >
                              Make user an Admin?
                            </Link>
                          </small>
                        </>
                      )}
                    </td>
                    <td>
                      <Link to={`/admin/user/${game._id}/edit`}>
                        <Button variant="light" className="btn-sm">
                          <FaEdit />
                        </Button>
                      </Link>
                      <Button variant="danger" className="btn-sm">
                        <FaTrash />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </div> */}
      </Container>
    </AdminLayout>
  );
};

export default UserLIstRoles;

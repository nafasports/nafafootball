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
const UserLIst2Screen = () => {
  const [user, setUser] = useState([]);
  const [news, setNews] = useState([]);
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "https://nafasports.herokuapp.com/api/users/roles/Client"
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
        "https://nafasports.herokuapp.com/api/users/roles/GAMES ADMIN"
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
    <div className="userlist2-div">
      <h1
        style={{
          fontSize: "25px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Users{" "}
      </h1>
      <h2 style={{ fontSize: "25px" }}>Client Roles</h2>
      <Container>
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
              {user?.users
                ?.sort(function (a, b) {
                  if (a.username < b.username) {
                    return -1;
                  }
                  if (a.username > b.username) {
                    return 1;
                  }
                  return 0;
                })
                .map((usery) => (
                  <tr key={usery._id}>
                    <td>{usery.username}</td>
                    <td>{usery.email}</td>
                    <td>{usery.roles}</td>
                    <td>
                      {usery.isAdmin ? (
                        <FaCheck style={{ color: "green" }} />
                      ) : (
                        <>
                          <FaTimes style={{ color: "red" }} />
                          <small>
                            <Link
                              style={{ textDecoration: "none" }}
                              to={`/admin/user/${usery._id}/adminedit`}
                            >
                              Make user an Admin?
                            </Link>
                          </small>
                        </>
                      )}
                    </td>
                    <td>
                      <Link to={`/admin/user/${usery._id}/edit`}>
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
      </Container>
    </div>
  );
};

export default UserLIst2Screen;

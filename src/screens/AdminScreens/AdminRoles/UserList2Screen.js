import React, { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";

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
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>Roles</th>
              <th>ADMIN</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {user?.users?.map((usery) => (
              <tr key={usery._id}>
                <td>{usery._id}</td>
                <td>{usery.username}</td>
                <td>
                  <Link to={`mailto:${usery.email}`}>{usery.email}</Link>
                </td>
                <td>
                  <Link to={`mailto:${usery.roles}`}>{usery.roles}</Link>
                </td>
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

      <div style={{ marginTop: "20px" }}>
        <h2 style={{ fontSize: "25px" }}>NewsCaster</h2>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>Roles</th>
                <th>ADMIN</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {news?.users?.map((newsly) => (
                <tr key={newsly._id}>
                  <td>{newsly._id}</td>
                  <td>{newsly.username}</td>
                  <td>
                    <Link to={`mailto:${newsly.email}`}>{newsly.email}</Link>
                  </td>
                  <td>
                    <Link to={`mailto:${newsly.roles}`}>{newsly.roles}</Link>
                  </td>
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
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
      <div style={{ marginTop: "20px" }}>
        <h2 style={{ fontSize: "25px" }}>GAMES ADMIN</h2>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
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
                  <td>{game._id}</td>
                  <td>{game.username}</td>
                  <td>
                    <Link to={`mailto:${game.email}`}>{game.email}</Link>
                  </td>
                  <td>
                    <Link to={`mailto:${game.roles}`}>{game.roles}</Link>
                  </td>
                  <td>
                    {game.isAdmin ? (
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
      </div>
    </div>
  );
};

export default UserLIst2Screen;

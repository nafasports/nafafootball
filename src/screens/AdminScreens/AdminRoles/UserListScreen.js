import React, { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Container } from "react-bootstrap";

import { FaCheck, FaEdit, FaTimes, FaTrash } from "react-icons/fa";
import axios from "axios";
import Message from "../../../components/Message";
import Loader from "../../../components/Loader";
import { Link } from "react-router-dom";
import BasicExample from "../../../components/navbar/NavBar";
import AdminLayout from "../AdminLayout";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
const UserLIstScreen = () => {
  const [user, setUser] = useState([]);
  const [news, setNews] = useState([]);
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
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
        "http://localhost:5000/api/users/roles/NewsCaster"
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
        "http://localhost:5000/api/users/roles/GAMES ADMIN"
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
        <h1 style={{ fontSize: "25px" }}>Users/Client Roles </h1>

        <div className="container">
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
                        <Button
                          variant="danger"
                          className="btn-sm"
                          onClick={handleOpen}
                        >
                          <FaTrash />
                        </Button>
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={style}>
                            <Typography
                              id="modal-modal-title"
                              variant="h6"
                              component="h2"
                            >
                              Text in a modal
                            </Typography>
                            <Typography
                              id="modal-modal-description"
                              sx={{ mt: 2 }}
                            >
                              Duis mollis, est non commodo luctus, nisi erat
                              porttitor ligula.
                            </Typography>
                          </Box>
                        </Modal>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          )}
          <br />
        </div>
      </Container>
    </AdminLayout>
  );
};

export default UserLIstScreen;

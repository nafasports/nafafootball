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
const AdminGetDivision = () => {
  const [user, setUser] = useState([]);
  const [news, setNews] = useState([]);
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "https://nafasports.herokuapp.com/api/divisions"
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
        <h1 style={{ fontSize: "25px" }}>League Diviisions </h1>

        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>LEAGUE NAME</th>
                <th>Division Name</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {user?.map((usery) => (
                <tr key={usery._id}>
                  <td>{usery.leagueName}</td>
                  <td>{usery.DivisionName}</td>

                  <td>
                    {/* <Link to={`/admin/user/${usery._id}/edit`}> */}
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
        <br />
      </Container>
    </AdminLayout>
  );
};

export default AdminGetDivision;

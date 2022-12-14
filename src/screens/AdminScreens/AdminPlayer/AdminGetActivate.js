import { Input } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Image, Row, Table } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import AdminLayout from "../AdminLayout";

const AdminGetActivate = () => {
  const [users, setUsers] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [loading, setLoading] = useState(true);
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
  return (
    <AdminLayout>
      <h1 style={{ fontSize: "25px" }}>Newly Registered Players </h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>

              <th> Player Surname</th>
              <th>Player First Name</th>
              <th>Player Lincense</th>
              <th>Team</th>
              <th>Activate Player</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((usery) => (
              <tr key={usery._id}>
                <td>{usery._id}</td>

                <td style={{ color: "green" }}>
                  {" "}
                  <Link
                    to={`/AdminplayerProfile/${usery._id}`}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    {usery?.surName}
                  </Link>
                </td>
                <td style={{ color: "green" }}>
                  {" "}
                  <Link
                    to={`/AdminplayerProfile/${usery._id}`}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    {usery?.firstName}
                  </Link>
                </td>
                <td style={{ color: "green" }}>{usery?.playerLincense}</td>
                <td style={{ color: "green" }}>{usery?.playersTeam}</td>

                <td>
                  {usery.activatePlayer ? (
                    <FaCheck style={{ color: "green" }} />
                  ) : (
                    <>
                      <Link
                        to={`/admin/ActivateUser/${usery._id}/edit`}
                        style={{ textDecoration: "none" }}
                      >
                        Activate Player
                      </Link>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </AdminLayout>
  );
};

export default AdminGetActivate;

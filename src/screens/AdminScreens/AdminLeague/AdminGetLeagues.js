import React, { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";

import { FaCheck, FaEdit, FaTimes, FaTrash } from "react-icons/fa";
import axios from "axios";
import Message from "../../../components/Message";
import Loader from "../../../components/Loader";
import { Link } from "react-router-dom";
import BasicExample from "../../../components/navbar/NavBar";
import AdminLayout from "../AdminLayout";
const AdminGetLeagues = () => {
  const [user, setUser] = useState([]);
  const [news, setNews] = useState([]);
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "https://nafasports.herokuapp.com/api/league"
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
      <h1 style={{ fontSize: "25px" }}>Leagues </h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>LEAGUE LOGO</th>
              <th>TOURNAMENT</th>
              <th>LEAGUE NAME</th>
              <th>LEAGUE ABBREVATION</th>
            </tr>
          </thead>
          <tbody>
            {user?.leagues?.map((usery) => (
              <tr key={usery._id}>
                <td>{usery._id}</td>
                <td>
                  <img
                    src={usery.image}
                    alt="jj"
                    style={{ width: "auto", height: "8vh" }}
                  />
                </td>
                <td>
                  <Link to={`mailto:${usery.email}`}>{usery.tournament}</Link>
                </td>
                <td>
                  <Link to={`mailto:${usery.roles}`}>{usery.leagueName}</Link>
                </td>
                <td>{usery.abrv}</td>

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
      <br />
    </AdminLayout>
  );
};

export default AdminGetLeagues;

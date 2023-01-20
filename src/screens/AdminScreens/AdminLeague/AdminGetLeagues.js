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
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Container>
          <h1 style={{ fontSize: "25px" }}>Leagues </h1>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>LEAGUE LOGO</th>
                <th>TOURNAMENT</th>
                <th>LEAGUE NAME</th>
                <th>STATE</th>
                <th>SEASON</th>
                <th>START DATE</th>
                <th>END DATE</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {user?.leagues?.map((usery) => (
                <tr key={usery._id}>
                  <td>
                    <img
                      src={usery.image}
                      alt="jj"
                      style={{ width: "80px", height: "8vh" }}
                    />
                  </td>
                  <td>{usery.tournament}</td>
                  <td>{usery.leagueName}</td>
                  <td>{usery.state}</td>
                  <td>{usery.season}</td>
                  <td>{usery.startDate}</td>
                  <td>{usery.endDate}</td>
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
        </Container>
      )}
      <br />
    </AdminLayout>
  );
};

export default AdminGetLeagues;

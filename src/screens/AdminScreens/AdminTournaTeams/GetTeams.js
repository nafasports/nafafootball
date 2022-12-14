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
const GetTeams = () => {
  const [user, setUser] = useState([]);
  const [filtered, setFiltered] = useState("");
  const [news, setNews] = useState([]);
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "https://nafasports.herokuapp.com/api/tournamntTeams"
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
      <h1 style={{ fontSize: "25px" }}>Tournament Teams</h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>

              <th>TOURNAMENT</th>
              <th>LEAGUE NAME</th>
              <th>LEAGUE CATEGORY</th>
              <th>STATE</th>
              <th>SEASON</th>
              <th>START UP DATE</th>
              <th>END DATE</th>
              <th>TEAMS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {user
              ?.filter((value) => {
                if (filtered === "NSSFFL") {
                  return value;
                } else if (value.league === "NSSFFL") {
                  return value;
                }
              })
              .map((usery) => (
                <tr key={usery._id}>
                  <td>{usery._id}</td>
                  <td>{usery.tournament}</td>
                  <td>{usery.league}</td>

                  <td>{usery.leagueCat}</td>
                  <td>{usery.state}</td>
                  <td>{usery.season}</td>
                  <td>{usery.startMonth}</td>
                  <td>{usery.endMonth}</td>
                  <td>{usery.teams}</td>
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
      <h4>League Academica</h4>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>

              <th>TOURNAMENT</th>
              <th>LEAGUE NAME</th>
              <th>LEAGUE CATEGORY</th>
              <th>STATE</th>
              <th>SEASON</th>
              <th>START UP DATE</th>
              <th>END DATE</th>
              <th>TEAMS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {user
              ?.filter((value) => {
                if (filtered === "Academica") {
                  return value;
                } else if (value.league === "Academica") {
                  return value;
                }
              })
              .map((usery) => (
                <tr key={usery._id}>
                  <td>{usery._id}</td>
                  <td>{usery.tournament}</td>
                  <td>{usery.league}</td>

                  <td>{usery.leagueCat}</td>
                  <td>{usery.state}</td>
                  <td>{usery.season}</td>
                  <td>{usery.startMonth}</td>
                  <td>{usery.endMonth}</td>
                  <td>{usery.teams}</td>
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
      <h4>Nigeria Premiership</h4>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>

              <th>TOURNAMENT</th>
              <th>LEAGUE NAME</th>
              <th>LEAGUE CATEGORY</th>
              <th>STATE</th>
              <th>SEASON</th>
              <th>START UP DATE</th>
              <th>END DATE</th>
              <th>TEAMS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {user
              ?.filter((value) => {
                if (filtered === "Nigeria Premiership") {
                  return value;
                } else if (value.league === "Nigeria Premiership") {
                  return value;
                }
              })
              .map((usery) => (
                <tr key={usery._id}>
                  <td>{usery._id}</td>
                  <td>{usery.tournament}</td>
                  <td>{usery.league}</td>

                  <td>{usery.leagueCat}</td>
                  <td>{usery.state}</td>
                  <td>{usery.season}</td>
                  <td>{usery.startMonth}</td>
                  <td>{usery.endMonth}</td>
                  <td>{usery.teams}</td>
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
    </AdminLayout>
  );
};

export default GetTeams;

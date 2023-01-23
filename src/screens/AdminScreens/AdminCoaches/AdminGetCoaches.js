import { Input } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Image, Row, Table } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loader from "../../../components/Loader";
import AdminLayout from "../AdminLayout";

const AdminGetCoaches = () => {
  const [users, setUsers] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get(
        "http://ec2-54-224-226-216.compute-1.amazonaws.com:8080/api/coaches/getallcoaches"
      );

      setUsers(data);
      console.log(data);
      setLoading(false);
      setError(false);
      //   localStorage.setItem("All-Users", JSON.stringify(data));
    };
    fetchUsers();
  }, []);
  return (
    <AdminLayout>
      <div>
        <div
          style={{
            marginLeft: "30px",
            marginRight: "30px",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          <input
            className="dsp-input"
            type="text"
            placeholder="Search Coach By Name"
            onChange={(e) => setSearchTitle(e.target.value)}
          />
          <div>
            {loading ? (
              <Loader />
            ) : (
              users?.data
                ?.filter((value) => {
                  if (searchTitle === "") {
                    return value;
                  } else if (
                    value.firstName
                      .toLowerCase()
                      .includes(searchTitle.toLowerCase())
                  ) {
                    return value;
                  }
                })
                .map((usy) => (
                  <div>
                    {searchTitle ? (
                      <div className="ch-ply">
                        <div key={usy._id}>
                          <div className="dsp-ply">
                            <Image
                              src={usy.photos}
                              fluid
                              thumbnail
                              className="img-dsp"
                            />
                            <h6>
                              {" "}
                              {/* <Link
                                to={`/AdminCoachProfile/${usy.coachId}`}
                                style={{
                                  textDecoration: "none",
                                  marginLeft: "10px",
                                  color: "black",
                                }}
                              > */}
                              {usy.firstName} {usy.lastName}
                              {/* </Link> */}
                            </h6>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                ))
            )}

            <h3 className="text-center mt-4 mb-4">List of Coaches</h3>
            <Table striped bordered hover responsive className="table-sm">
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>coach Team</th>
                  <th>coach State</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {users?.data?.map((usy, index) => (
                  <>
                    <tr key={usy.coachId}>
                      <td>
                        {" "}
                        <Image
                          src={usy.photos}
                          fluid
                          thumbnail
                          className="img-dsp"
                        />
                      </td>
                      <td>
                        {/* <Link to={`/AdminCoachProfile/${usy.coachId}`}> */}
                        {usy?.firstName}
                        {/* </Link>{" "} */}
                      </td>

                      <td>
                        {/* <Link to={`/AdminCoachProfile/${usy.coachId}`}> */}
                        {usy?.lastName}
                        {/* </Link> */}
                      </td>
                      <td>{usy?.email}</td>
                      <td>{usy?.coachTeam}</td>
                      <td>{usy?.teamState}</td>
                      <td>
                        <Button variant="danger" className="btn-sm">
                          <FaTrash />
                        </Button>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminGetCoaches;

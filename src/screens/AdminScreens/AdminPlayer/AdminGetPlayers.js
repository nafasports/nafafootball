import { Input } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loader from "../../../components/Loader";
import AdminLayout from "../AdminLayout";
import BasicExample from "../../../components/navbar/NavBar";

const AdminGetPlayers = () => {
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
      <div className="div-plys">
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
            placeholder="Search Player By Name"
            onChange={(e) => setSearchTitle(e.target.value)}
          />
          <div className="chioma">
            {loading ? (
              <Loader />
            ) : (
              users
                ?.filter((value) => {
                  if (searchTitle === "") {
                    return value;
                  } else if (
                    value.surName
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
                              src={usy.passport}
                              fluid
                              thumbnail
                              className="img-dsp"
                            />
                            <h6>
                              {" "}
                              <Link
                                to={`/AdminplayerProfile/${usy._id}`}
                                style={{
                                  textDecoration: "none",
                                  marginLeft: "10px",
                                  color: "black",
                                }}
                              >
                                {usy.surName} {usy.firstName}
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                ))
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminGetPlayers;

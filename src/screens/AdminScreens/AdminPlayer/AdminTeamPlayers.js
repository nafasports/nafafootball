import React, { useState } from "react";
import { Button, Col, Image, Row, Table } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminTeamPlayers = ({ users }) => {
  const [filtered, setFiltered] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  return (
    <div>
      <h4 className="text-left mb-4">Team Players</h4>
      <input
        className="dsp-input"
        type="text"
        placeholder="Search Player By Name"
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      {users
        ?.filter((value) => {
          if (searchTitle === "") {
            return value;
          } else if (
            value.surName.toLowerCase().includes(searchTitle.toLowerCase())
          ) {
            return value;
          }
        })
        .filter((value) => {
          if (filtered === "Team Player") {
            return value;
          } else if (value.playerCategory === "Team Player") {
            return value;
          }
        })

        .map((usy, index) => (
          <div>
            {searchTitle ? (
              <div className="ch-ply">
                <div key={usy._id}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div>
                      <Image
                        src={usy?.passport}
                        fluid
                        thumbnail
                        style={{
                          width: "60px",
                          height: "60px",
                          maxHeight: "60px",
                          objectFit: "cover",
                          marginBottom: "20px",
                        }}
                      />
                    </div>
                    <div>
                      <div>
                        {" "}
                        <h6>
                          {" "}
                          <Link
                            to={`/adminPlayerProfile/${usy?._id}`}
                            style={{
                              textDecoration: "none",
                              marginLeft: "10px",
                              color: "black",
                            }}
                          >
                            {usy?.surName} {usy?.firstName}
                          </Link>
                        </h6>
                      </div>
                      <div>
                        <h6
                          style={{
                            textDecoration: "none",
                            marginLeft: "10px",
                            color: "black",
                          }}
                        >
                          {usy?.playerDraftTeams}{" "}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        ))}

      <Table striped bordered hover responsive className="table-sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Surname</th>
            <th>Firts Name</th>
            <th>Players Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users
            ?.filter((value) => {
              if (searchTitle === "") {
                return value;
              } else if (
                value.surName.toLowerCase().includes(searchTitle.toLowerCase())
              ) {
                return value;
              }
            })
            .filter((value) => {
              if (filtered === "Team Player") {
                return value;
              } else if (value.playerCategory === "Team Player") {
                return value;
              }
            })

            .map((usy, index) => (
              <>
                <tr key={usy._id}>
                  <td>{usy._id}</td>
                  <td>
                    <Link to={`/adminPlayerProfile/${usy._id}`}>
                      {usy?.surName}
                    </Link>{" "}
                  </td>

                  <td>
                    <Link to={`/adminPlayerProfile/${usy._id}`}>
                      {usy?.firstName}
                    </Link>
                  </td>
                  <td>{usy?.playerCategory}</td>

                  <td>
                    <Link to={`/playerDrafting/${usy._id}`}>
                      <Button
                        variant="light"
                        className="btn-sm"
                        style={{ color: "green" }}
                      >
                        Draft Player
                      </Button>
                    </Link>
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
  );
};

export default AdminTeamPlayers;

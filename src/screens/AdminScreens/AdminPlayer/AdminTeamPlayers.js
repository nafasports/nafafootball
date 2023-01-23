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
            value.firstName.toLowerCase().includes(searchTitle.toLowerCase())
          ) {
            return value;
          }
        })
        .filter((value) => {
          if (filtered === "Team Player") {
            return value;
          } else if (value.teamName === "") {
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
                        src={usy?.photos}
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
                            to={`/adminPlayerProfile/${usy?.playerId}`}
                            style={{
                              textDecoration: "none",
                              marginLeft: "10px",
                              color: "black",
                            }}
                          >
                            {usy?.firstName} {usy?.lastName}
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
            <th>First Name</th>
            <th>Last Name</th>
            <th>Players Team Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users
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
            // .filter((value) => {
            //   if (filtered === "Team Player") {
            //     return value;
            //   } else if (value.playerCategory === "Team Player") {
            //     return value;
            //   }
            // })

            .map((usy, index) => (
              <>
                <tr key={usy._id}>
                  <td>
                    <Link to={`/adminPlayerProfile/${usy.playerId}`}>
                      {usy?.firstName}
                    </Link>{" "}
                  </td>

                  <td>
                    <Link to={`/adminPlayerProfile/${usy.playerId}`}>
                      {usy?.lastName}
                    </Link>
                  </td>
                  <td>{usy?.teamName}</td>

                  <td>
                    <Link to={`/playerDrafting/${usy.playerId}`}>
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

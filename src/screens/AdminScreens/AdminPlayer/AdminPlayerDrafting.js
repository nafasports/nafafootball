import React, { useState } from "react";
import { Button, Image, Table } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminPlayerDrafting = ({ users }) => {
  const [filtered, setFiltered] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  return (
    <div>
      <input
        className="dsp-input"
        type="text"
        placeholder="Search Player By Name"
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      {users
        ?.filter((value) => {
          if (filtered === "Poll Player") {
            return value;
          } else if (value.playerCategory === "Poll Player") {
            return value;
          }
        })
        ?.filter((value) => {
          if (searchTitle === "") {
            return value;
          } else if (
            value.surName.toLowerCase().includes(searchTitle.toLowerCase())
          ) {
            return value;
          }
        })
        .map((usery) => (
          <div>
            {searchTitle ? (
              <div className="ch-ply">
                <div key={usery._id}>
                  <div className="dsp-ply">
                    <Image
                      src={usery.passport}
                      fluid
                      thumbnail
                      className="img-dsp"
                    />

                    <h6>
                      {" "}
                      <Link
                        to={`/playerDrafting/${usery._id}`}
                        style={{
                          textDecoration: "none",
                          marginLeft: "10px",
                          color: "black",
                        }}
                      >
                        {usery.surName} {usery.firstName}
                      </Link>
                    </h6>
                  </div>
                  <button>
                    {" "}
                    <Link
                      to={`/playerDrafting/${usery._id}`}
                      style={{
                        textDecoration: "none",
                        marginLeft: "10px",
                        color: "black",
                      }}
                    >
                      Draft Player
                    </Link>
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        ))}
      <h4 className="mb-4">Poll Players</h4>
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
              if (filtered === "Poll Player") {
                return value;
              } else if (value.playerCategory === "Poll Player") {
                return value;
              }
            })

            .map((usery) => (
              <>
                <tr key={usery._id}>
                  <td>{usery._id}</td>
                  <td>
                    <Link to={`/playerProfile/${usery._id}`}>
                      {usery.surName}
                    </Link>{" "}
                  </td>

                  <td>
                    <Link to={`/adminplayerProfile/${usery._id}`}>
                      {usery.firstName}
                    </Link>
                  </td>
                  <td>{usery.playerCategory}</td>

                  <td>
                    <Link to={`/playerDrafting/${usery._id}`}>
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

export default AdminPlayerDrafting;

import React, { useState } from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import nafass from "../../assets/images/nafass.png";

const TournDisplay = ({ poster }) => {
  const [filtered, setFiltered] = useState("");
  return (
    <div>
      <Container>
        <h6 className=" text-center Div-h6-v">NSSFFL tournament teams</h6>

        <Table
          striped
          bordered
          hover
          responsive
          class="table align-middle mb-0 bg-white"
        >
          <thead class="bg-light">
            <tr>
              <th>LEAGUE</th>
              <th>LEAGUE DIVISION</th>
              <th>LEAGUE CATEGORY</th>
              <th>STATE</th>
              <th>SEASON</th>
              <th>START UP DATE</th>
              <th>END DATE</th>
              <th>TEAMS</th>
            </tr>
          </thead>
          <tbody>
            {poster
              ?.filter((value) => {
                if (filtered === "NSSFFL") {
                  return value;
                } else if (
                  value.league === "NSSFFL" &&
                  value.leagueCat === "Championship"
                ) {
                  return value;
                }
              })
              .map((usery) => (
                <tr key={usery._id}>
                  <td>
                    <div class="d-flex align-items-center">
                      <img
                        src={nafass}
                        alt="uu"
                        style={{ width: "45px", height: "45px" }}
                        class="rounded-circle"
                      />
                      <div class="ms-3">
                        <p class="fw-bold mb-1">{usery.tournament}</p>
                      </div>
                    </div>
                  </td>
                  <td>{usery.league}</td>

                  <td>{usery.leagueCat}</td>
                  <td>{usery.state}</td>
                  <td>{usery.season}</td>
                  <td>{usery.startMonth}</td>
                  <td>{usery.endMonth}</td>
                  <td>{usery.teams}</td>
                </tr>
              ))}
          </tbody>
        </Table>
        <br />
        <Table
          striped
          bordered
          hover
          responsive
          class="table align-middle mb-0 bg-white"
        >
          <thead class="bg-light">
            <tr>
              <th>LEAGUE</th>
              <th>LEAGUE DIVISION</th>
              <th>LEAGUE CATEGORY</th>
              <th>STATE</th>
              <th>SEASON</th>
              <th>START UP DATE</th>
              <th>END DATE</th>
              <th>TEAMS</th>
            </tr>
          </thead>
          <tbody>
            {poster
              ?.filter((value) => {
                if (filtered === "NSSFFL") {
                  return value;
                } else if (value.league === "Academica") {
                  return value;
                }
              })
              .map((usery) => (
                <tr key={usery._id}>
                  <td>
                    <div class="d-flex align-items-center">
                      <img
                        src={nafass}
                        alt="yudtu"
                        style={{ width: "45px", height: "45px" }}
                        class="rounded-circle"
                      />
                      <div class="ms-3">
                        <p class="fw-bold mb-1">{usery.tournament}</p>
                      </div>
                    </div>
                  </td>
                  <td>{usery.league}</td>

                  <td>{usery.leagueCat}</td>
                  <td>{usery.state}</td>
                  <td>{usery.season}</td>
                  <td>{usery.startMonth}</td>
                  <td>{usery.endMonth}</td>
                  <td>{usery.teams}</td>
                </tr>
              ))}
          </tbody>
        </Table>
        {/* <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>TOURNAMENT</th>
              <th>LEAGUE NAME</th>
              <th>LEAGUE CATEGORY</th>
              <th>STATE</th>
              <th>SEASON</th>
              <th>START UP DATE</th>
              <th>END DATE</th>
              <th>TEAMS</th>
            </tr>
          </thead>
          <tbody>
            {poster
              ?.filter((value) => {
                if (filtered === "NSSFFL") {
                  return value;
                } else if (
                  value.league === "NSSFFL" &&
                  value.leagueCat === "Championship"
                ) {
                  return value;
                }
              })
              .map((usery) => (
                <tr key={usery._id}>
                  <td>{usery.tournament}</td>
                  <td>{usery.league}</td>

                  <td>{usery.leagueCat}</td>
                  <td>{usery.state}</td>
                  <td>{usery.season}</td>
                  <td>{usery.startMonth}</td>
                  <td>{usery.endMonth}</td>
                  <td>{usery.teams}</td>
                </tr>
              ))}
          </tbody>
        </Table>
        <br />
        <h6 className=" text-center Div-h6-v">Academica tournament teams</h6>
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>TOURNAMENT</th>
              <th>LEAGUE NAME</th>
              <th>LEAGUE CATEGORY</th>
              <th>STATE</th>
              <th>SEASON</th>
              <th>START UP DATE</th>
              <th>END DATE</th>
              <th>TEAMS</th>
            </tr>
          </thead>
          <tbody>
            {poster
              ?.filter((value) => {
                if (filtered === "Academica") {
                  return value;
                } else if (value.league === "Academica") {
                  return value;
                }
              })
              .map((usery) => (
                <tr key={usery._id}>
                  <td>{usery.tournament}</td>
                  <td>{usery.league}</td>

                  <td>{usery.leagueCat}</td>
                  <td>{usery.state}</td>
                  <td>{usery.season}</td>
                  <td>{usery.startMonth}</td>
                  <td>{usery.endMonth}</td>
                  <td>{usery.teams}</td>
                </tr>
              ))}
          </tbody>
        </Table> */}
      </Container>
    </div>
  );
};

export default TournDisplay;

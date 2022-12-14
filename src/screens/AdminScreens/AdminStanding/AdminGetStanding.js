import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import AdminLayout from "../AdminLayout";
const AdminGetStanding = () => {
  const [stand, setStand] = useState([]);
  const [filtered, setFiltered] = useState("");
  const [spanish, setSpanish] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "https://nafasports.herokuapp.com/api/standings/"
      );
      // .then((json) => {
      //   const data = json.sort((a, b) => a.league.localeCompare(b.league));
      //   setPoster(data);
      // });
      setStand(data);
      console.log(data);
      setLoading(false);
      setError(false);

      //   localStorage.setItem("PostId", JSON.stringify(data));
    };

    fetchPosts();
  }, []);
  return (
    <AdminLayout>
      <Container>
        <div>
          <h5>NSSFFL</h5>
          <Table
            striped
            bordered
            hover
            responsive
            class="table align-middle mb-0 bg-white"
          >
            <thead class="bg-light">
              <tr>
                <th></th>
                <th>TEAM</th>
                <th>P</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>GF</th>
                <th>GA</th>
                <th>GD</th>
                <th>PTS</th>
              </tr>
            </thead>
            <tbody>
              {stand
                ?.filter((value) => {
                  if (filtered === "NSSFFL") {
                    return value;
                  } else if (
                    value.leagueDivision === "NSSFFL" &&
                    value.group === "Group Q"
                    //  &&
                    // value.leagueCat === "Championship"
                  ) {
                    return value;
                  }
                })
                .map((usery) => (
                  <tr key={usery._id}>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="ms-3">
                          <p class="fw-bold mb-1">{usery.no}</p>
                        </div>
                      </div>
                    </td>
                    <td>{usery.team}</td>
                    <td>{usery.playedMatches}</td>

                    <td>{usery.win}</td>
                    <td>{usery.draw}</td>
                    <td>{usery.lose}</td>
                    <td>{usery.goalFor}</td>
                    <td>{usery.goalAgainst}</td>
                    <td>{usery.goalDiference}</td>
                    <td>{usery.position}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
        <br />
        <h5>Academica</h5>
        <div>
          <Table
            striped
            bordered
            hover
            responsive
            class="table align-middle mb-0 bg-white"
          >
            <thead class="bg-light">
              <tr>
                <th></th>
                <th>TEAM</th>
                <th>P</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>GF</th>
                <th>GA</th>
                <th>GD</th>
                <th>PTS</th>
              </tr>
            </thead>
            <tbody>
              {stand
                ?.filter((value) => {
                  if (filtered === "NSSFFL") {
                    return value;
                  } else if (
                    value.leagueDivision === "Academica" &&
                    value.group === "Group C"
                    //  &&
                    // value.leagueCat === "Championship"
                  ) {
                    return value;
                  }
                })
                .map((usery) => (
                  <tr key={usery._id}>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="ms-3">
                          <p class="fw-bold mb-1">{usery.no}</p>
                        </div>
                      </div>
                    </td>
                    <td>{usery.team}</td>
                    <td>{usery.playedMatches}</td>

                    <td>{usery.win}</td>
                    <td>{usery.draw}</td>
                    <td>{usery.lose}</td>
                    <td>{usery.goalFor}</td>
                    <td>{usery.goalAgainst}</td>
                    <td>{usery.goalDiference}</td>
                    <td>{usery.points}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
        <br />
        <h5>Nigeria Premiership</h5>
        <div>
          <Table
            striped
            bordered
            hover
            responsive
            class="table align-middle mb-0 bg-white"
          >
            <thead class="bg-light">
              <tr>
                <th></th>
                <th>TEAM</th>
                <th>P</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>GF</th>
                <th>GA</th>
                <th>GD</th>
                <th>PTS</th>
              </tr>
            </thead>
            <tbody>
              {stand
                ?.filter((value) => {
                  if (filtered === "Nigerian Premiership") {
                    return value;
                  } else if (
                    value.leagueDivision === "Nigerian Premiership" &&
                    value.group === "Group K"
                  ) {
                    return value;
                  }
                })
                .map((usery) => (
                  <tr key={usery._id}>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="ms-3">
                          <p class="fw-bold mb-1">{usery.no}</p>
                        </div>
                      </div>
                    </td>
                    <td>{usery.team}</td>
                    <td>{usery.playedMatches}</td>

                    <td>{usery.win}</td>
                    <td>{usery.draw}</td>
                    <td>{usery.lose}</td>
                    <td>{usery.goalFor}</td>
                    <td>{usery.goalAgainst}</td>
                    <td>{usery.goalDiference}</td>
                    <td>{usery.position}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </AdminLayout>
  );
};

export default AdminGetStanding;

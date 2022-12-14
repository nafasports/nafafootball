import joy from "../../../assets/images/joy.jpg";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FileBase64 from "react-file-base64";
import { BsArrow90DegLeft } from "react-icons/bs";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CircularIndeterminate from "../../../components/Progress";
import axios from "axios";
import { Link } from "react-router-dom";
import BasicExample from "../../../components/navbar/NavBar";
import AdminLayout from "../AdminLayout";
import anfl from "../../../assets/images/anfl.png";
import { positions } from "@mui/system";
const AdminStandingPost = () => {
  const navigate = useNavigate();
  const [team, setTeam] = useState("");
  const [leagueDivision, setLeagueDivision] = useState("");
  const [season, setSeason] = useState("");
  const [no, setNo] = useState("");
  const [group, setGroup] = useState("");
  const [league, setLeague] = useState("");
  const [playedMatches, setPlayedMatches] = useState("");
  const [points, setPoints] = useState("");
  const [win, setWin] = useState("");
  const [draw, setDraw] = useState("");
  const [lose, setLose] = useState("");
  const [goalFor, setGoalFor] = useState("");
  const [goalAgainst, setGoalAgainst] = useState("");
  const [goalDiference, setGoalDiference] = useState("");

  const [loading, setLoading] = useState(false);

  //   const userId = localStorage.getItem("userId");

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      team: team,
      leagueDivision: leagueDivision,
      points: points,
      group: group,
      no: no,
      goalDiference: goalDiference,
      season: season,
      playedMatches: playedMatches,
      win: win,
      draw: draw,
      lose: lose,
      goalFor: goalFor,
      no: no,

      goalAgainst: goalAgainst,
    };

    setLoading(true);

    const headers = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .post("https://nafasports.herokuapp.com/api/standings", data, headers)

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setLeagueDivision("");
          setWin("");
          setPoints("");

          setDraw("");
          setLose("");
          setPlayedMatches("");
          setGroup("");
          setGoalFor("");
          setSeason("");
          setTeam("");
          setNo("");
          setGoalAgainst("");
          setGoalDiference("");

          //   const items = data;
          //   localStorage.setItem("User-Info", JSON.stringify(items));

          localStorage.setItem("token", res.data.token);

          localStorage.setItem("name", res.data.name);

          localStorage.setItem("Following", res.data.following);

          console.log(res.data);
          toast.success("Post is sucessful");
          navigate("/getStandings");
        } else {
          toast.error(res.data.error);
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Invalid email & Password");
      });
  };
  return (
    // <!-- Section: Design Block -->

    <AdminLayout>
      <section>
        {/* <!-- Background image --> */}
        <div
          className="p-5 bg-image"
          style={{
            backgroundImage: `url(${anfl})`,
            height: "300px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        {/* <!-- Background image --> */}

        <div
          className="card mx-4 mx-md-5 shadow-5-strong"
          style={{
            marginTop: "-100px",
            background: "hsla(0, 0%, 100%, 0.8)",
            backdropFilter: "blur(30px)",
          }}
        >
          <div className="card-body py-5 px-md-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h2 className="fw-bold mb-5">Create Standing</h2>
                {loading && <CircularIndeterminate />}
                <form onSubmit={submitHandler}>
                  {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example1">
                          league
                        </label>
                        <h5>{league} </h5>
                        <select
                          className="form-outline mb-4"
                          value={league}
                          onChange={(e) => setLeague(e.target.value)}
                        >
                          <option></option>
                          <option>NAFL</option>
                          <option>NFFL</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example1">
                          LeagueDivison
                        </label>
                        <h5>{leagueDivision} </h5>
                        <select
                          className="form-outline mb-4"
                          value={leagueDivision}
                          onChange={(e) => setLeagueDivision(e.target.value)}
                        >
                          <option></option>
                          <option>NSSFFL</option>
                          <option>Academica</option>
                          <option>Nigerian Premiership</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example1">
                          Position Serial Number
                        </label>
                        <h5>{no} </h5>
                        <select
                          className="form-outline mb-4"
                          value={no}
                          onChange={(e) => setNo(e.target.value)}
                        >
                          <option></option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example1">
                          Matches Played
                        </label>
                        <h5>{playedMatches} </h5>
                        <select
                          className="form-outline mb-4"
                          value={playedMatches}
                          onChange={(e) => setPlayedMatches(e.target.value)}
                        >
                          <option></option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <label className="form-label" for="form3Example1">
                        season
                      </label>
                      <h5>{season} </h5>
                      <select
                        className="form-outline mb-4"
                        value={season}
                        onChange={(e) => setSeason(e.target.value)}
                      >
                        <option></option>
                        <option>2022/2023</option>
                        <option>2023/2024</option>
                        <option>2025/2026</option>
                      </select>
                    </div>
                  </div>
                  {/* <!-- Email input --> */}
                  <div className="form-outline mb-4">
                    <label class="form-label" for="form3Example3">
                      Team Name
                    </label>
                    <input
                      type="text"
                      id="form3Example3"
                      className="form-control"
                      placeholder="Team Name"
                      value={team}
                      onChange={(e) => setTeam(e.target.value)}
                    />
                  </div>

                  {/* <!-- Password input --> */}
                  <div className="form-outline mb-4">
                    <label className="form-label" for="form3Example4">
                      Group
                    </label>
                    <input
                      type="text"
                      id="form3Example4"
                      className="form-control"
                      placeholder="Group Name"
                      value={group}
                      onChange={(e) => setGroup(e.target.value)}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label class="form-label" for="form3Example3">
                      Win
                    </label>
                    <input
                      type="text"
                      id="form3Example3"
                      className="form-control"
                      placeholder="Number of Wins"
                      value={win}
                      onChange={(e) => setWin(e.target.value)}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <label class="form-label" for="form3Example3">
                      Draw
                    </label>
                    <input
                      type="text"
                      id="form3Example3"
                      className="form-control"
                      placeholder="Number of Draw"
                      value={draw}
                      onChange={(e) => setDraw(e.target.value)}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <label class="form-label" for="form3Example3">
                      Loss
                    </label>
                    <input
                      type="text"
                      id="form3Example3"
                      className="form-control"
                      placeholder="Number of Draws"
                      value={lose}
                      onChange={(e) => setLose(e.target.value)}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <label class="form-label" for="form3Example3">
                      Goal For
                    </label>
                    <input
                      type="text"
                      id="form3Example3"
                      className="form-control"
                      placeholder="Number of Goal for"
                      value={goalFor}
                      onChange={(e) => setGoalFor(e.target.value)}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label class="form-label" for="form3Example3">
                      Goal Against
                    </label>
                    <input
                      type="text"
                      id="form3Example3"
                      className="form-control"
                      placeholder="Number of Goal Against"
                      value={goalAgainst}
                      onChange={(e) => setGoalAgainst(e.target.value)}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <label class="form-label" for="form3Example3">
                      Goal Difference
                    </label>
                    <input
                      type="text"
                      id="form3Example3"
                      className="form-control"
                      placeholder="Number Of Goal Difference"
                      value={goalDiference}
                      onChange={(e) => setGoalDiference(e.target.value)}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <label class="form-label" for="form3Example3">
                      Points
                    </label>
                    <input
                      type="text"
                      id="form3Example3"
                      className="form-control"
                      placeholder="League Point"
                      value={points}
                      onChange={(e) => setPoints(e.target.value)}
                    />
                  </div>

                  {/* <!-- Submit button --> */}
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                  >
                    Create a Standing
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AdminLayout>
    // <!-- Section: Design Block -->
  );
};

export default AdminStandingPost;

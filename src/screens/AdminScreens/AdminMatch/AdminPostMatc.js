import joy from "../../../assets/images/joy.jpg";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FileBase64 from "react-file-base64";
import { BsArrow90DegLeft } from "react-icons/bs";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CircularIndeterminate from "../../../components/Progress";
import axios from "axios";
import { Link } from "react-router-dom";

import anfl from "../../../assets/images/anfl.png";
import CheckOutSteps from "./CheckOutGame";
import AdminLayout from "../AdminLayout";
const AdminPostMatch = () => {
  const navigate = useNavigate();
  const [tournament, setTournament] = useState("");
  const [league, setLeague] = useState("");
  const [season, setSeason] = useState("");
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [matchDay, setMatchDay] = useState("");
  const [time, setTime] = useState("");
  const [scoresTeam1, setScoresTeam1] = useState("");
  const [scoresTeam2, setScoresTeam2] = useState("");
  const [coachTeam1, setCoachTeam1] = useState("");
  const [coachTeam2, setCoachTeam2] = useState("");
  const [referee, setReferee] = useState("");
  const [halfs, setHalfs] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const [state, setState] = useState("");
  const [division, setDivision] = useState("");
  const [loading, setLoading] = useState(false);

  //   const userId = localStorage.getItem("userId");

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      tournament: tournament,
      league: league,
      season: season,
      matchDay: matchDay,
      halfs: halfs,
      status: status,
      date: date,
      division: division,
      referee: referee,
      team1: team1,
      team2: team2,
      time: time,
      state: state,
      scoresTeam1: scoresTeam1,
      scoresTeam2: scoresTeam2,
      coachTeam1,
    };

    setLoading(true);

    const headers = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .post("https://nafasports.herokuapp.com/api/match", data, headers)

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setTournament("");
          setLeague("");

          setMatchDay("");
          setTeam1("");
          setTeam2("");
          setDivision("");
          setScoresTeam1("");
          setScoresTeam2("");
          setTime("");
          setDate("");
          setSeason("");
          setStatus("");
          setDate("");
          setState("");
          setCoachTeam1("");
          setCoachTeam2("");

          setHalfs("");
          setReferee("");

          //   const items = data;
          //   localStorage.setItem("User-Info", JSON.stringify(items));

          localStorage.setItem("matchId", res.data._id);

          console.log(res.data);
          toast.success("Post is sucessful");
          navigate("/getGameFixtures");
        } else {
          toast.error(res.data.error);
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Failed to create");
      });
  };
  return (
    // <!-- Section: Design Block -->

    <div>
      {/* <div>
        <CheckOutSteps step1 step2 step3 />
      </div> */}
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
                <h2 className="fw-bold mb-5">Create Fixtures</h2>
                {loading && <CircularIndeterminate />}
                <form onSubmit={submitHandler}>
                  {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example1">
                          Tournament
                        </label>
                        <h5>{tournament} </h5>
                        <select
                          className="form-outline mb-4"
                          value={tournament}
                          onChange={(e) => setTournament(e.target.value)}
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
                          League
                        </label>
                        <h5>{league} </h5>
                        <select
                          className="form-outline mb-4"
                          value={league}
                          onChange={(e) => setLeague(e.target.value)}
                        >
                          <option></option>
                          <option>NSSFFL</option>
                          <option>Academica</option>
                          <option>Nigeria Premiership</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example1">
                          Game Match Day
                        </label>
                        <h5>{matchDay} </h5>
                        <select
                          className="form-outline mb-4"
                          value={matchDay}
                          onChange={(e) => setMatchDay(e.target.value)}
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
                          <option>10</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example2">
                          Season
                        </label>
                        <h5>{season}</h5>
                        <select
                          className="form-control"
                          value={season}
                          onChange={(e) => setSeason(e.target.value)}
                        >
                          <option>2022/2023</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example1">
                          State
                        </label>
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                          placeholder="Select State"
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example1">
                          Divison
                        </label>
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                          placeholder="Select Tournament Division"
                          value={division}
                          onChange={(e) => setDivision(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example1">
                          Home Team
                        </label>
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                          placeholder="Select Home Team"
                          value={team1}
                          onChange={(e) => setTeam1(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example2">
                          Away Team
                        </label>
                        <input
                          type="text"
                          id="form3Example2"
                          className="form-control"
                          value={team2}
                          onChange={(e) => setTeam2(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* <!-- Email input --> */}

                  {/* <!-- Password input --> */}

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example1">
                          Home Team Coach
                        </label>
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                          placeholder="Select Home Team"
                          value={coachTeam1}
                          onChange={(e) => setCoachTeam1(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example2">
                          Away Team Coach
                        </label>
                        <input
                          type="text"
                          id="form3Example2"
                          className="form-control"
                          value={coachTeam2}
                          onChange={(e) => setCoachTeam2(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example1">
                          Kick Off Time
                        </label>
                        <input
                          type="time"
                          id="form3Example1"
                          className="form-control"
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example2">
                          Kick Off Date
                        </label>
                        <input
                          type="date"
                          id="form3Example2"
                          className="form-control"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example1">
                          Referee
                        </label>
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                          placeholder="Select Home Team"
                          value={referee}
                          onChange={(e) => setReferee(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example2">
                          Halfs
                        </label>
                        <input
                          type="text"
                          id="form3Example2"
                          className="form-control"
                          value={halfs}
                          onChange={(e) => setHalfs(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-outline mb-4">
                    <label class="form-label" for="form3Example3">
                      Game Status
                    </label>
                    <input
                      type="text"
                      id="form3Example3"
                      className="form-control"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    />
                  </div>
                  {/* <!-- Submit button --> */}
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                  >
                    Post a Match Fixture
                  </button>
                  <ToastContainer />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    // <!-- Section: Design Block -->
  );
};

export default AdminPostMatch;

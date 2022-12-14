import joy from "../../../assets/images/joy.jpg";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FileBase64 from "react-file-base64";
import { BsArrow90DegLeft } from "react-icons/bs";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CircularIndeterminate from "../../../components/Progress";
import axios from "axios";
import AdminLayout from "../AdminLayout";
import { Link } from "react-router-dom";

import anfl from "../../../assets/images/anfl.png";
import CheckOutSteps from "./CheckOutGame";
const AdminUpdateMatch = () => {
  const navigate = useNavigate();
  const { id } = useParams();
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
      referee: referee,
      team1: team1,
      team2: team2,
      time: time,
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
      .put(
        `https://nafasports.herokuapp.com/api/match/update/${id}`,
        data,
        headers
      )

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setTournament("");
          setLeague("");

          setMatchDay("");
          setTeam1("");
          setTeam2("");
          setScoresTeam1("");
          setScoresTeam2("");
          setTime("");
          setDate("");
          setSeason("");
          setStatus("");
          setDate("");
          setCoachTeam1("");
          setCoachTeam2("");

          setHalfs("");
          setReferee("");

          //   const items = data;
          //   localStorage.setItem("User-Info", JSON.stringify(items));

          localStorage.setItem("token", res.data.token);

          localStorage.setItem("name", res.data.name);

          localStorage.setItem("Following", res.data.following);

          console.log(res.data);
          toast.success("Post is sucessful");
          navigate("/getGameFixtures");
        } else {
          toast.error(res.data.error);
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Cannot Update results");
      });
  };
  return (
    // <!-- Section: Design Block -->

    <AdminLayout>
      {/* <div>
        <CheckOutSteps step1 step2 step3 />
      </div> */}
      <section class="text-center">
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
                <h2 className="fw-bold mb-5">Create a Team</h2>
                {loading && <CircularIndeterminate />}
                <form onSubmit={submitHandler}>
                  {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <h5>{tournament} </h5>
                        <select
                          className="form-outline mb-4"
                          value={tournament}
                          onChange={(e) => setTournament(e.target.value)}
                        >
                          <option></option>
                          <option>Tackle Tournament</option>
                          <option>Flag Tournament</option>
                        </select>
                        {/* <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                          placeholder="Select Tournament"
                          value={tournament}
                          onChange={(e) => setTournament(e.target.value)}
                        /> */}
                        <label className="form-label" for="form3Example1">
                          Tournament
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example2"
                          className="form-control"
                          value={league}
                          onChange={(e) => setLeague(e.target.value)}
                        />
                        <label className="form-label" for="form3Example2">
                          League Name
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                          placeholder="Select Home Team"
                          value={matchDay}
                          onChange={(e) => setMatchDay(e.target.value)}
                        />
                        <label className="form-label" for="form3Example1">
                          Game Match Day
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example2"
                          className="form-control"
                          value={season}
                          onChange={(e) => setSeason(e.target.value)}
                        />
                        <label className="form-label" for="form3Example2">
                          Season
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                          placeholder="Select Home Team"
                          value={team1}
                          onChange={(e) => setTeam1(e.target.value)}
                        />
                        <label className="form-label" for="form3Example1">
                          Home Team
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example2"
                          className="form-control"
                          value={team2}
                          onChange={(e) => setTeam2(e.target.value)}
                        />
                        <label className="form-label" for="form3Example2">
                          Away Team
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                          placeholder="Select Home Team"
                          value={scoresTeam1}
                          onChange={(e) => setScoresTeam1(e.target.value)}
                        />
                        <label className="form-label" for="form3Example1">
                          Home Team Score
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example2"
                          className="form-control"
                          value={scoresTeam2}
                          onChange={(e) => setScoresTeam2(e.target.value)}
                        />
                        <label className="form-label" for="form3Example2">
                          Away Team Score
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Email input --> */}

                  {/* <!-- Password input --> */}

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                          placeholder="Select Home Team"
                          value={coachTeam1}
                          onChange={(e) => setCoachTeam1(e.target.value)}
                        />
                        <label className="form-label" for="form3Example1">
                          Home Team Coach
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example2"
                          className="form-control"
                          value={coachTeam2}
                          onChange={(e) => setCoachTeam2(e.target.value)}
                        />
                        <label className="form-label" for="form3Example2">
                          Away Team Coach
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="time"
                          id="form3Example1"
                          className="form-control"
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                        />
                        <label className="form-label" for="form3Example1">
                          Kick Off Time
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="date"
                          id="form3Example2"
                          className="form-control"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                        />
                        <label className="form-label" for="form3Example2">
                          Kick Off Date
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                          placeholder="Select Home Team"
                          value={referee}
                          onChange={(e) => setReferee(e.target.value)}
                        />
                        <label className="form-label" for="form3Example1">
                          Referee
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example2"
                          className="form-control"
                          value={halfs}
                          onChange={(e) => setHalfs(e.target.value)}
                        />
                        <label className="form-label" for="form3Example2">
                          Halfs
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example3"
                      className="form-control"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    />
                    <label class="form-label" for="form3Example3">
                      Game Status
                    </label>
                  </div>
                  {/* <!-- Submit button --> */}
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                  >
                    Update Match Result
                  </button>
                  <ToastContainer />
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

export default AdminUpdateMatch;

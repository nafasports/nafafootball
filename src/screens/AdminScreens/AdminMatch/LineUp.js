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

import anfl from "../../../assets/images/anfl.png";

const LineUp = () => {
  const navigate = useNavigate();
  const [goalKeeper, setGoalKeeper] = useState("");
  const [goalKeeper2, setGoalKeeper2] = useState("");
  const [player2, setPlayer2] = useState("");
  const [player3, setPlayer3] = useState("");
  const [player4, setPlayer4] = useState("");
  const [player5, setPlayer5] = useState("");
  const [player6, setPlayer6] = useState("");
  const [player7, setPlayer7] = useState("");
  const [player8, setPlayer8] = useState("");
  const [player9, setPlayer9] = useState("");
  const [player10, setPlayer10] = useState("");
  const [player11, setPlayer11] = useState("");
  const [players2, setPlayers2] = useState("");
  const [players3, setPlayers3] = useState("");
  const [players4, setPlayers4] = useState("");

  const [loading, setLoading] = useState(false);

  //   const userId = localStorage.getItem("userId");

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      goalKeeper: goalKeeper,
      goalKeeper2: goalKeeper2,
      player2: player2,
      player3: player3,
      player4: player4,
      player5: player5,
      player6: player6,
      player7: player7,
      player8: player8,
      player9: player9,
      player10: player10,
      player11: player11,
      players2: players2,
      players3: players3,
      players4: players4,
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
          setGoalKeeper("");
          setGoalKeeper2("");

          setPlayer2("");
          setPlayer3("");
          setPlayer4("");
          setPlayer5("");
          setPlayer6("");
          setPlayer7("");
          setPlayer8("");
          setPlayer9("");
          setPlayer10("");
          setPlayer11("");
          setPlayers2("");
          setPlayers3("");
          setPlayers3("");

          //   const items = data;
          //   localStorage.setItem("User-Info", JSON.stringify(items));

          localStorage.setItem("token", res.data.token);

          localStorage.setItem("name", res.data.name);

          localStorage.setItem("Following", res.data.following);

          console.log(res.data);
          toast.success("Post is sucessful");
          navigate("/getAdminGames");
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

    <div>
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
                  {/* <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                       
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                          placeholder="Select Tournament"
                          value={goalKeeper}
                          onChange={(e) => setGoalKeeper(e.target.value)}
                        />
                        <label className="form-label" for="form3Example1">
                          Home Team Goal keeper
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example2"
                          className="form-control"
                          value={goalKeeper2}
                          onChange={(e) => setGoalKeeper2(e.target.value)}
                        />
                        <label className="form-label" for="form3Example2">
                        Away Team Goal Keeper
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
                  </div> */}

                  {/* <div className="form-outline mb-4">
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
                  </div> */}
                  {/* <!-- Submit button --> */}
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                  >
                    Proceed
                  </button>
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

export default LineUp;

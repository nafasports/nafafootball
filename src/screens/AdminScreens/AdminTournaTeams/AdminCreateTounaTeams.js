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
import anfl from "../../../assets/images/anfl.png";
import AdminLayout from "../AdminLayout";
const AdminCreateTounaTeams = () => {
  const navigate = useNavigate();
  const [tournament, setTournament] = useState("");
  const [league, setLeague] = useState("");
  const [leagueCat, setLeagueCat] = useState("");
  const [season, setSeason] = useState("");
  const [teams, setTeams] = useState("");
  const [state, setState] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [loading, setLoading] = useState(false);

  //   const userId = localStorage.getItem("userId");

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      tournament: tournament,
      league: league,
      season: season,
      teams: teams,
      state: state,
      leagueCat: leagueCat,

      endMonth: endMonth,
      startMonth: startMonth,
    };

    setLoading(true);

    const headers = {
      //   "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .post(
        "https://nafasports.herokuapp.com/api/tournamntTeams",
        data,
        headers
      )

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setTournament("");
          setLeague("");

          setState("");

          setTeams("");
          setLeagueCat("");

          setStartMonth("");
          setEndMonth("");
          setSeason("");

          //   const items = data;
          //   localStorage.setItem("User-Info", JSON.stringify(items));

          localStorage.setItem("token", res.data.token);

          localStorage.setItem("name", res.data.name);

          localStorage.setItem("Following", res.data.following);

          console.log(res.data);
          toast.success("Post is sucessful");
          navigate("/getTournament");
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
                <h2 className="fw-bold mb-5">Create a Tournament Team</h2>
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
                          <option>Tackle Tournament</option>
                          <option>Flag Tournament</option>
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

                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example1">
                          Season
                        </label>
                        <h5>{season} </h5>
                        <select
                          className="form-outline mb-4"
                          value={season}
                          onChange={(e) => setSeason(e.target.value)}
                        >
                          <option></option>
                          <option>2020/2021</option>
                          <option>2021/2022</option>
                          <option>2022/2023</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Email input --> */}
                  <div className="form-outline mb-4">
                    <label class="form-label" for="form3Example3">
                      League Category
                    </label>
                    <input
                      type="text"
                      id="form3Example3"
                      className="form-control"
                      value={leagueCat}
                      onChange={(e) => setLeagueCat(e.target.value)}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <label class="form-label" for="form3Example3">
                      Teams
                    </label>
                    <input
                      type="text"
                      id="form3Example3"
                      className="form-control"
                      value={teams}
                      onChange={(e) => setTeams(e.target.value)}
                    />
                  </div>

                  {/* <!-- Password input --> */}

                  <div className="form-outline mb-4">
                    <label class="form-label" for="form3Example3">
                      State
                    </label>
                    <input
                      type="text"
                      id="form3Example3"
                      className="form-control"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <label class="form-label" for="form3Example3">
                      Start Up Date
                    </label>
                    <input
                      type="date"
                      id="form3Example3"
                      className="form-control"
                      value={startMonth}
                      onChange={(e) => setStartMonth(e.target.value)}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <label class="form-label" for="form3Example3">
                      End Date
                    </label>
                    <input
                      type="date"
                      id="form3Example3"
                      className="form-control"
                      value={endMonth}
                      onChange={(e) => setEndMonth(e.target.value)}
                    />
                  </div>
                  {/* <!-- Submit button --> */}
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                  >
                    Create a Tournament Team
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

export default AdminCreateTounaTeams;

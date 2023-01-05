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
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
const AdminPostMatch = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  const [neds, setNeds] = useState([]);
  const [nedts, setNedts] = useState([]);
  const [newer, setNewer] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "https://nafasports.herokuapp.com/api/league"
      );
      console.log(data);
      setNews(data);
      // setLoading(false);

      //   localStorage.setItem("AdminUserDetails", JSON.stringify(data._id));
      localStorage.setItem("AdimUserId", data.user?._id);
    };

    fetchPosts();
  }, []);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "https://nafasports.herokuapp.com/api/divisions"
      );
      console.log(data);
      setNewer(data);
      // setLoading(false);

      //   localStorage.setItem("AdminUserDetails", JSON.stringify(data._id));
      localStorage.setItem("AdimUserId", data.user?._id);
    };

    fetchPosts();
  }, []);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "https://nafasports.herokuapp.com/api/coaches"
      );
      console.log(data);
      setNedts(data);
      // setLoading(false);

      //   localStorage.setItem("AdminUserDetails", JSON.stringify(data._id));
      localStorage.setItem("AdimUserId", data.user?._id);
    };

    fetchPosts();
  }, []);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "https://nafasports.herokuapp.com/api/teams"
      );
      console.log(data);
      setNeds(data);
      // setLoading(false);

      //   localStorage.setItem("AdminUserDetails", JSON.stringify(data._id));
      localStorage.setItem("AdimUserId", data.user?._id);
    };

    fetchPosts();
  }, []);
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
                <h2 className="fw-bold mb-5">Create a Match Fixture</h2>

                <form onSubmit={submitHandler}>
                  {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <Box
                        // component="form"
                        sx={{
                          "& .MuiTextField-root": { m: 1, width: "24ch " },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          id="outlined-select-currency-native"
                          select
                          label="Select League"
                          // defaultValue="EUR"
                          value={league}
                          onChange={(e) => setLeague(e.target.value)}
                          SelectProps={{
                            native: true,
                          }}
                          // helperText="Please select your currency"
                        >
                          <option></option>
                          {news?.leagues?.map((usery) => (
                            <>
                              <option>{usery.leagueName}</option>
                            </>
                          ))}
                        </TextField>
                      </Box>
                    </div>

                    <div className="col-md-6 mb-4">
                      <Box
                        // component="form"
                        sx={{
                          "& .MuiTextField-root": { m: 1, width: "24ch " },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          id="outlined-select-currency-native"
                          select
                          label="Select Division"
                          // defaultValue="EUR"
                          value={division}
                          onChange={(e) => setDivision(e.target.value)}
                          SelectProps={{
                            native: true,
                          }}
                          // helperText="Please select your currency"
                        >
                          <option></option>
                          {newer?.map((usery) => (
                            <>
                              <option></option>
                              <option>{usery.DivisionName}</option>
                            </>
                          ))}
                        </TextField>
                      </Box>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <Box
                        // component="form"
                        sx={{
                          "& .MuiTextField-root": { m: 1, width: "24ch " },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          required
                          id="outlined-required"
                          label="Match Day"
                          value={matchDay}
                          onChange={(e) => setMatchDay(e.target.value)}
                          defaultValue="Match Day"
                        />
                      </Box>
                    </div>

                    <div className="col-md-6 mb-4">
                      <Box
                        // component="form"
                        sx={{
                          "& .MuiTextField-root": { m: 1, width: "24ch " },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          id="outlined-select-currency-native"
                          select
                          label="Select Season"
                          // defaultValue="EUR"
                          value={season}
                          onChange={(e) => setSeason(e.target.value)}
                          SelectProps={{
                            native: true,
                          }}
                          // helperText="Please select your currency"
                        >
                          <option></option>
                          {news?.leagues?.map((usery) => (
                            <>
                              <option></option>
                              <option>{usery.season}</option>
                            </>
                          ))}
                        </TextField>
                      </Box>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <Box
                        // component="form"
                        sx={{
                          "& .MuiTextField-root": { m: 1, width: "24ch " },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          id="outlined-select-currency-native"
                          select
                          label="Select State"
                          // defaultValue="EUR"
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                          SelectProps={{
                            native: true,
                          }}
                          // helperText="Please select your currency"
                        >
                          <option></option>
                          {news?.leagues?.map((usery) => (
                            <>
                              <option></option>
                              <option>{usery.state}</option>
                            </>
                          ))}
                        </TextField>
                      </Box>
                    </div>
                    <div className="col-md-6 mb-4">
                      <Box
                        // component="form"
                        sx={{
                          "& .MuiTextField-root": { m: 1, width: "24ch " },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          required
                          id="outlined-required"
                          label="Game Status"
                          value={status}
                          onChange={(e) => setStatus(e.target.value)}
                          defaultValue="Game Status"
                        />
                      </Box>
                    </div>
                    <div className="col-md-6 mb-4">
                      <Box
                        // component="form"
                        sx={{
                          "& .MuiTextField-root": { m: 1, width: "24ch " },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          id="outlined-select-currency-native"
                          select
                          label="Home Team"
                          // defaultValue="EUR"
                          value={team1}
                          onChange={(e) => setTeam1(e.target.value)}
                          SelectProps={{
                            native: true,
                          }}
                          // helperText="Please select your currency"
                        >
                          <option></option>
                          {neds?.teams?.map((usery) => (
                            <>
                              <option></option>
                              <option>{usery.teamName}</option>
                            </>
                          ))}
                        </TextField>
                      </Box>
                    </div>
                    <div className="col-md-6 mb-4">
                      <Box
                        // component="form"
                        sx={{
                          "& .MuiTextField-root": { m: 1, width: "24ch " },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          id="outlined-select-currency-native"
                          select
                          label="Away Team"
                          // defaultValue="EUR"
                          value={team2}
                          onChange={(e) => setTeam2(e.target.value)}
                          SelectProps={{
                            native: true,
                          }}
                          // helperText="Please select your currency"
                        >
                          <option></option>
                          {neds?.teams?.map((usery) => (
                            <>
                              <option></option>
                              <option>{usery.teamName}</option>
                            </>
                          ))}
                        </TextField>
                      </Box>
                    </div>
                  </div>

                  {/* <!-- Email input --> */}

                  {/* <!-- Password input --> */}

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <Box
                        // component="form"
                        sx={{
                          "& .MuiTextField-root": { m: 1, width: "24ch " },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          id="outlined-select-currency-native"
                          select
                          label="Home Team Coach"
                          // defaultValue="EUR"
                          value={coachTeam1}
                          onChange={(e) => setCoachTeam1(e.target.value)}
                          SelectProps={{
                            native: true,
                          }}
                          // helperText="Please select your currency"
                        >
                          <option></option>
                          {nedts?.map((usery) => (
                            <>
                              <option></option>
                              <option>{usery.name}</option>
                            </>
                          ))}
                        </TextField>
                      </Box>
                    </div>
                    <div className="col-md-6 mb-4">
                      <Box
                        // component="form"
                        sx={{
                          "& .MuiTextField-root": { m: 1, width: "24ch " },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          id="outlined-select-currency-native"
                          select
                          label="Away Team Coach"
                          // defaultValue="EUR"
                          value={coachTeam2}
                          onChange={(e) => setCoachTeam2(e.target.value)}
                          SelectProps={{
                            native: true,
                          }}
                          // helperText="Please select your currency"
                        >
                          <option></option>
                          {nedts?.map((usery) => (
                            <>
                              <option></option>
                              <option>{usery.name}</option>
                            </>
                          ))}
                        </TextField>
                      </Box>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <Box
                        // component="form"
                        sx={{
                          "& .MuiTextField-root": { m: 1, width: "24ch " },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          required
                          id="outlined-required"
                          label="Kick Off Time"
                          type="time"
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                          defaultValue="Kick Off Time"
                        />
                      </Box>
                    </div>
                    <div className="col-md-6 mb-4">
                      <Box
                        // component="form"
                        sx={{
                          "& .MuiTextField-root": { m: 1, width: "24ch " },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          required
                          id="outlined-required"
                          // label="Match Date"
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          defaultValue="Match Date"
                        />
                      </Box>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <Box
                        // component="form"
                        sx={{
                          "& .MuiTextField-root": { m: 1, width: "24ch " },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          required
                          id="outlined-required"
                          label="Referee"
                          value={referee}
                          onChange={(e) => setReferee(e.target.value)}
                          defaultValue="Referee"
                        />
                      </Box>
                    </div>
                    <div className="col-md-6 mb-4">
                      <Box
                        // component="form"
                        sx={{
                          "& .MuiTextField-root": { m: 1, width: "24ch " },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          required
                          id="outlined-required"
                          label="Halfs"
                          value={halfs}
                          onChange={(e) => setHalfs(e.target.value)}
                          defaultValue="Halfs"
                        />
                      </Box>
                    </div>
                  </div>

                  {/* <!-- Submit button --> */}
                  {loading && <CircularIndeterminate />}
                  <button
                    type="submit"
                    style={{ background: "green" }}
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

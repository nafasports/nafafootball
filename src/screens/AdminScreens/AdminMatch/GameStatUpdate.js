import joy from "../../../assets/images/joy.jpg";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FileBase64 from "react-file-base64";
import { BsArrow90DegLeft } from "react-icons/bs";
import AdminLayout from "../AdminLayout";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import CircularIndeterminate from "../../../components/Progress";
import axios from "axios";
import { Link } from "react-router-dom";

import anfl from "../../../assets/images/anfl.png";
import CircularIndeterminate from "../../../components/Progress";
import { TextField } from "@mui/material";
// import CheckOutSteps from "./CheckOutGame";
const GameStatUpdate = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [shotsHome, setShotsHome] = useState("");
  const [shotsAway, setShotsAway] = useState("");
  const [passesHome, setPassesHome] = useState("");
  const [passesAway, setPassesAway] = useState("");
  const [yellowCardHome, setYellowCardHome] = useState("");
  const [yellowCardAway, setYellowCardAway] = useState("");
  const [RedCardHome, setRedCardHome] = useState("");
  const [RedCardAway, setRedCardAway] = useState("");
  const [CornerKicksHome, setCornerKicksHome] = useState("");
  const [CornerKicksAway, setCornerKicksAway] = useState("");
  const [TacklesHome, setTacklesHome] = useState("");
  const [DribblesHome, setDribblesHome] = useState("");
  const [TacklesAway, setTacklesAway] = useState("");
  const [DribblesAway, setDribblesAway] = useState("");
  const [loading, setLoading] = useState(false);

  //   const userId = localStorage.getItem("userId");

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      shotsHome: shotsHome,
      shotsAway: shotsAway,
      passesHome: passesHome,
      passesAway: passesAway,
      yellowCardHome: yellowCardHome,
      yellowCardAway: yellowCardAway,
      RedCardHome: RedCardHome,
      RedCardAway: RedCardAway,
      CornerKicksHome: CornerKicksHome,
      CornerKicksAway: CornerKicksAway,
      TacklesHome: TacklesHome,
      TacklesAway: TacklesAway,
      DribblesHome: DribblesHome,
      DribblesAway: DribblesAway,
    };

    setLoading(true);

    const headers = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .put(`http://localhost:5000/api/match/gameStats/${id}`, data, headers)

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setShotsHome("");
          setShotsAway("");

          setPassesHome("");
          setPassesAway("");
          setYellowCardHome("");
          setYellowCardAway("");
          setRedCardHome("");
          setRedCardAway("");
          setCornerKicksHome("");
          setCornerKicksAway("");
          setTacklesHome("");
          setTacklesAway("");
          setDribblesHome("");
          setDribblesAway("");

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
    <AdminLayout>
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
                <h2 className="fw-bold mb-5">Update Game Stats</h2>
                {loading && <CircularIndeterminate />}
                <form onSubmit={submitHandler}>
                  {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example2">
                          Total Home Shots
                        </label>
                        <input
                          type="text"
                          id="form3Example2"
                          className="form-control"
                          value={shotsHome}
                          onChange={(e) => setShotsHome(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example2">
                          Total Away Shots
                        </label>
                        <input
                          type="text"
                          id="form3Example2"
                          className="form-control"
                          value={shotsAway}
                          onChange={(e) => setShotsAway(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example1">
                          Total Home Passes
                        </label>
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                          value={passesHome}
                          onChange={(e) => setPassesHome(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example2">
                          Total Away Passes
                        </label>
                        <input
                          type="text"
                          id="form3Example2"
                          className="form-control"
                          value={passesAway}
                          onChange={(e) => setPassesAway(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example1">
                          Total Home Yellow Cards
                        </label>
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                          value={yellowCardHome}
                          onChange={(e) => setYellowCardHome(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example2">
                          Total Away Yellow Cards
                        </label>
                        <input
                          type="text"
                          id="form3Example2"
                          className="form-control"
                          value={yellowCardAway}
                          onChange={(e) => setYellowCardAway(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example1">
                          Total Home Red Cards
                        </label>
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                          value={RedCardHome}
                          onChange={(e) => setRedCardHome(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example2">
                          Total Away Red Cards
                        </label>
                        <input
                          type="text"
                          id="form3Example2"
                          className="form-control"
                          value={RedCardAway}
                          onChange={(e) => setRedCardAway(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example1">
                          Total Home ConnerKicks
                        </label>
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                          value={CornerKicksHome}
                          onChange={(e) => setCornerKicksHome(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example2">
                          Total Away ConnerKicks
                        </label>
                        <input
                          type="text"
                          id="form3Example2"
                          className="form-control"
                          value={CornerKicksAway}
                          onChange={(e) => setCornerKicksAway(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example1">
                          Total Home Tackles
                        </label>
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                          value={TacklesHome}
                          onChange={(e) => setTacklesHome(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example2">
                          Total Away Tackles
                        </label>
                        <input
                          type="text"
                          id="form3Example2"
                          className="form-control"
                          value={TacklesAway}
                          onChange={(e) => setTacklesAway(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example1">
                          Total Home Dribbles
                        </label>
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                          value={DribblesHome}
                          onChange={(e) => setDribblesHome(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example2">
                          Total Away Dribbles
                        </label>
                        <input
                          type="text"
                          id="form3Example2"
                          className="form-control"
                          value={DribblesAway}
                          onChange={(e) => setDribblesAway(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  {/* <!-- Submit button --> */}
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                  >
                    Update Match GameInfo
                  </button>
                  <ToastContainer />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
};

export default GameStatUpdate;

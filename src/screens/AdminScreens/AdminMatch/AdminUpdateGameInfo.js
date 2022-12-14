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
const AdminUpdateGameInfo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [possesionHome, setPossesionHome] = useState("");
  const [possesionAway, setPossesionAway] = useState("");
  const [firstGoalScorerHome, setFirstGoalScorerHome] = useState("");
  const [firstGoalScorerAway, setFirstGoalScorerAway] = useState("");
  const [secondGoalScorerHome, setSecondGoalScorerHome] = useState("");
  const [ThirdGoalScorerHome, setThirdGoalScorerHome] = useState("");
  const [secondGoalScorerAway, setSecondGoalScorerAway] = useState("");
  const [ThirdGoalScorerAway, setThirdGoalScorerAway] = useState("");
  const [firstQuarter, setFirstQuarter] = useState("");
  const [secondQuarter, setSecondQuarter] = useState("");
  const [thirdQuarter, setThirdQuarter] = useState("");
  const [fourthQuarter, setFourthQuarter] = useState("");
  const [loading, setLoading] = useState(false);

  //   const userId = localStorage.getItem("userId");

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      possesionHome: possesionHome,
      possesionAway: possesionAway,
      firstGoalScorerHome: firstGoalScorerHome,
      firstGoalScorerAway: firstGoalScorerAway,
      secondGoalScorerHome: secondGoalScorerHome,
      ThirdGoalScorerHome: ThirdGoalScorerHome,
      secondGoalScorerHome: secondGoalScorerHome,
      secondGoalScorerAway: secondGoalScorerAway,
      ThirdGoalScorerAway: ThirdGoalScorerAway,
      firstQuarter: firstQuarter,
      secondQuarter: secondQuarter,
      thirdQuarter: thirdQuarter,
      fourthQuarter: fourthQuarter,
    };

    setLoading(true);

    const headers = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .put(`http://localhost:5000/api/match/gameInfo/${id}`, data, headers)

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setPossesionHome("");
          setPossesionAway("");

          setFirstGoalScorerHome("");
          setFirstGoalScorerAway("");
          setSecondGoalScorerHome("");
          setSecondGoalScorerAway("");
          setThirdGoalScorerHome("");
          setFirstQuarter("");
          setSecondQuarter("");
          setThirdQuarter("");
          setFourthQuarter("");

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
                <h2 className="fw-bold mb-5">Update Match Info</h2>
                {loading && <CircularIndeterminate />}
                <form onSubmit={submitHandler}>
                  {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example2">
                          1st Home Team Goal & Scored By
                        </label>
                        <input
                          type="text"
                          id="form3Example2"
                          className="form-control"
                          value={firstGoalScorerHome}
                          onChange={(e) =>
                            setFirstGoalScorerHome(e.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example2">
                          1st Away Team Goal & Scored By
                        </label>
                        <input
                          type="text"
                          id="form3Example2"
                          className="form-control"
                          value={firstGoalScorerAway}
                          onChange={(e) =>
                            setFirstGoalScorerAway(e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example1">
                          2nd Home Goal & Scored By
                        </label>
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                          value={secondGoalScorerHome}
                          onChange={(e) =>
                            setSecondGoalScorerHome(e.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example2">
                          2nd Away Goal & Scored By
                        </label>
                        <input
                          type="text"
                          id="form3Example2"
                          className="form-control"
                          value={secondGoalScorerAway}
                          onChange={(e) =>
                            setSecondGoalScorerAway(e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example1">
                          3rd Home Goal & Scored By
                        </label>
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                          value={ThirdGoalScorerHome}
                          onChange={(e) =>
                            setThirdGoalScorerHome(e.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example2">
                          3rd Away Goal & Scored By
                        </label>
                        <input
                          type="text"
                          id="form3Example2"
                          className="form-control"
                          value={ThirdGoalScorerAway}
                          onChange={(e) =>
                            setThirdGoalScorerAway(e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example1">
                          Home Ball Possession
                        </label>
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                          value={possesionHome}
                          onChange={(e) => setPossesionHome(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example2">
                          Away Ball Possesion
                        </label>
                        <input
                          type="text"
                          id="form3Example2"
                          className="form-control"
                          value={possesionAway}
                          onChange={(e) => setPossesionAway(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example1">
                          1st Quarter
                        </label>
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                          value={firstQuarter}
                          onChange={(e) => setFirstQuarter(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example2">
                          2nd Quarter
                        </label>
                        <input
                          type="text"
                          id="form3Example2"
                          className="form-control"
                          value={secondQuarter}
                          onChange={(e) => setSecondQuarter(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example1">
                          3rd Quarter
                        </label>
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                          value={thirdQuarter}
                          onChange={(e) => setThirdQuarter(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example2">
                          4th Quarter
                        </label>
                        <input
                          type="text"
                          id="form3Example2"
                          className="form-control"
                          value={fourthQuarter}
                          onChange={(e) => setFourthQuarter(e.target.value)}
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

export default AdminUpdateGameInfo;

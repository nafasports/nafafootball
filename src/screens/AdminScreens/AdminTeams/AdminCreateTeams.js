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
const AdminCreateTeams = () => {
  const navigate = useNavigate();
  const [tournament, setTournament] = useState("");
  const [league, setLeague] = useState("");
  const [teamName, setTeamName] = useState("");

  const [teamShorthand, setTeamShorthand] = useState("");

  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);

  //   const userId = localStorage.getItem("userId");

  const uploadimage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convert2base64(file);
    setImage(base64);
    // setImage({ ...image, image: base64 });
    console.log(base64);
    // const reader = new FileReader();
  };
  const convert2base64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      tournament: tournament,
      league: league,
      image: image,

      teamName: teamName,
      teamShorthand: teamShorthand,
    };

    setLoading(true);

    const headers = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .post("https://nafasports.herokuapp.com/api/teams", data, headers)

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setTournament("");
          setLeague("");

          setTeamName("");
          setTeamShorthand("");
          setImage("");

          //   const items = data;
          //   localStorage.setItem("User-Info", JSON.stringify(items));

          localStorage.setItem("token", res.data.token);

          localStorage.setItem("name", res.data.name);

          localStorage.setItem("Following", res.data.following);

          console.log(res.data);
          toast.success("Post is sucessful");
          navigate("/getTeam");
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
                <h2 className="fw-bold mb-5">Create a Team</h2>
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
                        <h5>{tournament} </h5>
                        <select
                          className="form-outline mb-4"
                          value={league}
                          onChange={(e) => setLeague(e.target.value)}
                        >
                          <option></option>
                          <option>NSSFFL</option>
                          <option>Academical</option>
                          <option>Professional</option>
                        </select>
                      </div>
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
                      value={teamName}
                      onChange={(e) => setTeamName(e.target.value)}
                    />
                  </div>

                  {/* <!-- Password input --> */}
                  <div className="form-outline mb-4">
                    <label className="form-label" for="form3Example4">
                      Team Abbrevation
                    </label>
                    <input
                      type="text"
                      id="form3Example4"
                      className="form-control"
                      value={teamShorthand}
                      onChange={(e) => setTeamShorthand(e.target.value)}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" for="form2Example22">
                      Choose a file
                    </label>
                    <input
                      id="form2Example22"
                      className="form-control"
                      type="file"
                      multiple
                      accept=".jpeg, .png, .jpg, "
                      onChange={(e) => uploadimage(e)}
                    />
                  </div>

                  {/* <!-- Submit button --> */}
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                  >
                    Create a Team
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

export default AdminCreateTeams;

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
const AdminCreateLeague = () => {
  const navigate = useNavigate();
  const [tournament, setTournament] = useState("");
  const [leagueName, setLeagueName] = useState("");
  const [abrv, setAbrv] = useState("");

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
      leagueName: leagueName,
      image: image,

      abrv: abrv,
    };

    setLoading(true);

    const headers = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .post("https://nafasports.herokuapp.com/api/league", data, headers)

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setTournament("");
          setLeagueName("");

          setAbrv("");

          setImage("");

          //   const items = data;
          //   localStorage.setItem("User-Info", JSON.stringify(items));

          localStorage.setItem("token", res.data.token);

          localStorage.setItem("name", res.data.name);

          localStorage.setItem("Following", res.data.following);

          console.log(res.data);
          toast.success("Post is sucessful");
          navigate("/getLeague");
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
                <h2 className="fw-bold mb-5">Create a League</h2>
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
                        <label className="form-label" for="form3Example2">
                          League Name
                        </label>
                        <input
                          type="text"
                          id="form3Example2"
                          className="form-control"
                          value={leagueName}
                          onChange={(e) => setLeagueName(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* <!-- Email input --> */}
                  <div className="form-outline mb-4">
                    <label class="form-label" for="form3Example3">
                      Team Abbrevation
                    </label>
                    <input
                      type="text"
                      id="form3Example3"
                      className="form-control"
                      value={abrv}
                      onChange={(e) => setAbrv(e.target.value)}
                    />
                  </div>

                  {/* <!-- Password input --> */}

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
                    Create a League
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

export default AdminCreateLeague;

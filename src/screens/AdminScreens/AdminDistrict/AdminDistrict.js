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
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
const AdminDistrict = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "https://nafasports.herokuapp.com/api/tournament"
      );
      console.log(data);
      setNews(data);
      // setLoading(false);

      //   localStorage.setItem("AdminUserDetails", JSON.stringify(data._id));
      localStorage.setItem("AdimUserId", data.user?._id);
    };

    fetchPosts();
  }, []);
  const [DistrictId, setDistrictId] = useState("");
  const [DistrictLetter, setDistrictLetter] = useState("");

  const [loading, setLoading] = useState(false);

  //   const userId = localStorage.getItem("userId");

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      DistrictId: DistrictId,
      DistrictLetter: DistrictLetter,
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
          setDistrictId("");
          setDistrictLetter("");

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
                <h2 className="fw-bold mb-5">Create a District</h2>

                <form onSubmit={submitHandler}>
                  {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}

                  <div className="col-md-6 mb-4">
                    <TextField
                      className="input-dic-div"
                      required
                      id="outlined-required"
                      label="District Id"
                      value={DistrictId}
                      onChange={(e) => setDistrictId(e.target.value)}
                      //   defaultValue="League Name"
                    />
                  </div>

                  <div className="col-md-6 mb-4">
                    <TextField
                      className="input-dic-div"
                      required
                      id="outlined-required"
                      label="District Letter"
                      value={DistrictLetter}
                      onChange={(e) => setDistrictLetter(e.target.value)}
                      //   defaultValue="League Name"
                    />
                  </div>

                  {loading && <CircularIndeterminate />}
                  {/* <!-- Submit button --> */}
                  <div class="d-flex justify-content-center">
                    <button
                      type="submit"
                      style={{ background: "green" }}
                      className="btn btn-primary btn-block mb-4"
                    >
                      Create a District
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
};

export default AdminDistrict;

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
const UpdateCommentary = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [comment, setComment] = useState("");
  const [commentMatchTime, setCommentMatchTime] = useState("");
  const [commentator, setCommentator] = useState("");

  const [loading, setLoading] = useState(false);

  //   const userId = localStorage.getItem("userId");

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      comment: comment,
      commentMatchTime: commentMatchTime,
      commentator: commentator,
    };

    setLoading(true);

    const headers = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .put(`http://localhost:5000/api/match/commentary/${id}`, data, headers)

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setComment("");
          setCommentMatchTime("");

          setCommentator("");

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
                <h2 className="fw-bold mb-5">Create a Team</h2>
                {loading && <CircularIndeterminate />}
                <form onSubmit={submitHandler}>
                  {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example2">
                          Comment
                        </label>
                        <TextField
                          type="text"
                          rows={8}
                          id="form3Example2"
                          className="form-control"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></TextField>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example1">
                          Time
                        </label>
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                          value={commentMatchTime}
                          onChange={(e) => setCommentMatchTime(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example2">
                          Commentator
                        </label>
                        <input
                          type="text"
                          id="form3Example2"
                          className="form-control"
                          value={commentator}
                          onChange={(e) => setCommentator(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* <!-- Submit button --> */}
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                  >
                    Update Match Commentary
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

export default UpdateCommentary;

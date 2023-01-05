import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import nafas from "../assets/images/nafas.png";
import CircularIndeterminate from "../components/Progress";
import BasicExample from "../components/navbar/NavBar";
import Footer from "../components/Footer/Footer";
// toast.configure();
const SignUp = () => {
  const navigate = useNavigate();
  // const redirect = location.search ? location.search.split("=")[1] : "/";

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [mode, setMode] = useState("password");
  const [loading, setLoading] = useState(false);

  const userId = localStorage.getItem("userId");
  //   useEffect(() => {
  //     if (userId) {
  //       navigate("/dashboard");
  //     } else {
  //       navigate("/");
  //     }
  //   }, [navigate, userId]);

  const handleClick = () => {
    if (mode === "password") {
      setMode("text");
    } else {
      setMode("password");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      email: email,
      username: username,
      password: password,
      confirmPassword: confirmPassword,
    };

    const headers = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .post("https://nafasports.herokuapp.com/api/auth/register", data, headers)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setEmail("");
          setUsername("");
          setPassword("");
          setConfirmPassword("");
          //   const items = data;
          //   localStorage.setItem("User-Info", JSON.stringify(items));

          localStorage.setItem("token", res.data.token);

          localStorage.setItem("name", res.data.name);
          localStorage.setItem("userId", res.data._id);
          localStorage.setItem("isAdmin", res.data.isAdmin);
          localStorage.setItem("email", res.data.email);
          localStorage.setItem("roles", res.data.roles);
          localStorage.setItem("username", res.data.username);

          console.log(res.data);
          toast.success("Sign Up successful");
          navigate("/login");
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
    <div style={{ width: "100%", height: "auto" }}>
      <BasicExample />
      <section
        className="h-100 gradient-form"
        style={{ backgroundColor: "#eee" }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img src={nafas} alt="gh" className="img-footer-img" />
                        <h4 className="mt-1 mb-5 pb-1">We are NAFA Football</h4>
                      </div>
                      {loading && <CircularIndeterminate />}
                      <form onSubmit={submitHandler}>
                        <p>Please Sign Up to your account</p>

                        <div className="form-outline mb-4">
                          <label className="form-label" for="form2Example11">
                            Email
                          </label>
                          <input
                            type="email"
                            id="form2Example11"
                            className="form-control"
                            placeholder=" email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" for="form2Example11">
                            Username
                          </label>
                          <input
                            type="text"
                            id="form2Example15"
                            className="form-control"
                            placeholder="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" for="form2Example22">
                            Password
                          </label>
                          <input
                            type="password"
                            id="form2Example227"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" for="form2Example22">
                            Confirmpassword
                          </label>
                          <input
                            type="Password"
                            id="form2Example22"
                            className="form-control"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                            type="submit"
                          >
                            Sign Up
                          </button>
                          <ToastContainer />
                          {/* <a className="text-muted" href="#!">
                            Forgot password?
                          </a> */}
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Have an Account Login?</p>
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                          >
                            <Link
                              style={{ textDecoration: "none" }}
                              to="/login"
                            >
                              {" "}
                              Login
                            </Link>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">We are NAFA Football</h4>
                      <p className="small mb-0">
                        NAFA was established in 2019 by American Football
                        enthusiasts in Our vision is to create increased
                        opportunities for Nigerians through American football.
                        Opportunities range from educational scholarships
                        through sport, provision of livelihood, and exposure to
                        diverse culture and tourism from NAFA tours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SignUp;

import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "../../screens/AdminScreens/AdminPlayer/AdminPostPlayer.css";
import "./CoachReg.css";
import FileBase64 from "react-file-base64";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { BsArrow90DegLeft } from "react-icons/bs";

import piccy from "../../assets/images/piccy.jpg";
import CircularIndeterminate from "../../components/Progress";
import BasicExample from "../../components/navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import { TextField } from "@mui/material";
const CoachRegistration = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [coachResidence, setCoachResidence] = useState("");
  const [coachTeam, setCoachTeam] = useState("");
  const [photos, setPhotos] = useState("");
  const [coachLiceneId, setCoachLiceneId] = useState("");
  const [email, setEmail] = useState("");
  const [teamState, setTeamState] = useState("");
  const [coachUserName, setCoachUserName] = useState("");

  const [lastName, setLastName] = useState([]);
  const [loading, setLoading] = useState(false);

  //   const userId = localStorage.getItem("userId");

  const uploadimage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convert2base64(file);
    setPhotos(base64);
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
      firstName: firstName,
      lastName: lastName,

      phoneNumber: phoneNumber,
      coachResidence: coachResidence,
      coachLiceneId: coachLiceneId,
      coachUserName: coachUserName,
      email: email,

      teamState: teamState,
      // photos: photos,
      coachTeam: coachTeam,
    };

    setLoading(true);

    const headers = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      //   body: JSON.stringify(data),
    };

    axios
      .post(
        "http://ec2-54-224-226-216.compute-1.amazonaws.com:8080/api/coaches/createcoach",
        data,
        headers
      )

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setFirstName("");
          setLastName("");
          setPhoneNumber("");
          setCoachLiceneId("");
          setCoachUserName("");

          setCoachResidence("");
          setEmail("");

          setTeamState("");
          // setPhotos("");
          setCoachTeam("");

          //   const items = data;
          //   localStorage.setItem("User-Info", JSON.stringify(items));

          localStorage.setItem("CoachId", res.data._id);

          localStorage.setItem("CoachName", res.data.name);

          localStorage.setItem("Following", res.data.following);

          console.log(res.data);
          toast.success("Post is sucessful");
          navigate("/coachDashboard");
        } else {
          toast.error(res.data.error);
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Failed to create profile");
      });
  };
  return (
    <div>
      <BasicExample />
      <div class="container rounded bg-white mt-5 mb-5">
        <form onSubmit={submitHandler}>
          <div class="row">
            <div class="col-md-3 border-right">
              <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                <div
                  className="form-outline mb-4"
                  style={{
                    width: "300px",
                    height: "40vh",
                    border: "1px solid grey",
                  }}
                >
                  <input
                    required
                    id="form2Example22"
                    className="form-control"
                    type="file"
                    // multiple
                    accept=".jpeg, .png, .jpg, "
                    onChange={(e) => uploadimage(e)}
                  />
                  <img class="rounded-circle mt-5" width="150px" src={piccy} />
                </div>
                {/* <span class="font-weight-bold">Edogaru</span>
                <span class="text-black-50">edogaru@mail.com.my</span> */}
                <span> </span>
              </div>
            </div>
            <div class="col-md-5 border-right">
              <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h4 class="text-right">Profile Settings</h4>
                </div>
                {/* <div class="row mt-2"> */}
                <div class="col-md-12 mb-4">
                  <label class="labels">FIRST NAME</label>

                  <input
                    required
                    type="text"
                    class="form-control"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div class="col-md-12 mb-4 ">
                  <label class="labels">LAST NAME</label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    value={lastName}
                    placeholder="Other Names"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div class="col-md-12 mb-4 ">
                  <label class="labels">PHONE NUMBER</label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    value={phoneNumber}
                    placeholder="your phone number"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                {/* </div> */}
                <div class="row ">
                  <div class="col-md-12 mb-4">
                    <label class="labels">USER NAME</label>
                    <input
                      required
                      type="text"
                      class="form-control"
                      placeholder="create a user name"
                      value={coachUserName}
                      onChange={(e) => setCoachUserName(e.target.value)}
                    />
                  </div>
                  <div class="col-md-12 mb-4">
                    <label class="labels">EMAIL ADRESS</label>
                    <input
                      required
                      type="email"
                      class="form-control"
                      placeholder="enter your email adress"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div class="col-md-12 mb-4">
                    <label class="labels">RESIDENTIAL ADRESS</label>
                    <input
                      required
                      type="text"
                      class="form-control"
                      placeholder="your contact address"
                      value={coachResidence}
                      onChange={(e) => setCoachResidence(e.target.value)}
                    />
                  </div>
                  <div class="col-md-12 mb-4">
                    <label class="labels">COACHING LINCENCE </label>
                    <input
                      required
                      type="text"
                      class="form-control"
                      placeholder="your coaching lincence number"
                      value={coachLiceneId}
                      onChange={(e) => setCoachLiceneId(e.target.value)}
                    />
                  </div>
                  <div class="col-md-12 mb-4">
                    <label class="labels">TEAM NAME</label>
                    <input
                      required
                      type="text"
                      class="form-control"
                      placeholder="name of team  "
                      value={coachTeam}
                      onChange={(e) => setCoachTeam(e.target.value)}
                    />
                  </div>

                  <div class="col-md-12 mb-4">
                    <label class="labels">TEAM STATE</label>
                    <input
                      required
                      type="text"
                      class="form-control"
                      placeholder="state where the team is"
                      value={teamState}
                      onChange={(e) => setTeamState(e.target.value)}
                    />
                  </div>
                </div>
                {loading && <CircularIndeterminate />}
                <div class="mt-5 text-center">
                  <button class="btn btn-primary greent " type="submit">
                    Create Profile
                  </button>
                  <ToastContainer />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CoachRegistration;

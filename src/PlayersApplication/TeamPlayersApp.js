import axios from "axios";
import React, { useState, useRef } from "react";

import ReactToPrint, { useReactToPrint } from "react-to-print";

import { useNavigate } from "react-router-dom";
import "../screens/AdminScreens/AdminPlayer/AdminPostPlayer.css";
// import "./AdminPostPlayer.css";
import FileBase64 from "react-file-base64";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { BsArrow90DegLeft } from "react-icons/bs";
import piccy from "../assets/images/piccy.jpg";
import CircularIndeterminate from "../components/Progress";
import BasicExample from "../components/navbar/NavBar";
import Footer from "../components/Footer/Footer";
// import { ComponentToPrint } from "./ComponentToPrint";
const TeamPlayersApp = () => {
  const componentRef = useRef();
  //   const handlePrint = () => {
  //     useReactToPrint({
  //       content: () => componentRef.current,
  //     });
  //   };
  const navigate = useNavigate();
  const [playerID, setPlayerID] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");

  const [benchPressWeight, setBenchPressWeight] = useState(0);
  const [email, setEmail] = useState("");

  const [firstName, setFirstName] = useState("");
  const [height, setHeight] = useState(0);
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [playerAddress, setPlayerAddress] = useState("");

  const [playerId, setPlayerId] = useState(0);

  const [playerName, setPlayerName] = useState("");
  const [playerPosition, setPlayerPosition] = useState("");
  const [playerUserName, setPlayerUserName] = useState("");
  const [referreeName, setReferreeName] = useState("");
  const [referreeNumber, setReferreeNumber] = useState("");
  const [squotWeight, setSquotWeight] = useState(0);
  const [stateOfOrigin, setStateOfOrigin] = useState("");

  const [stateResidence, setStateResidence] = useState("");
  const [teamId, setTeamId] = useState(0);
  const [teamName, setTeamName] = useState("");
  const [weight, setWeight] = useState(0);
  const [image, setImage] = useState("");
  const [teamState, setTeamState] = useState("");

  // const [image, setImage] = useState([]);
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
      age: age,
      benchPressWeight: benchPressWeight,
      email: email,
      firstName: firstName,
      gender: gender,
      height: height,
      lastName: lastName,
      phoneNumber: phoneNumber,
      playerAddress: playerAddress,
      playerId: playerId,
      playerName: playerName,
      playerPosition: playerPosition,
      playerUserName: playerUserName,
      referreeName: referreeName,
      referreeNumber: referreeNumber,
      squotWeight: squotWeight,
      stateOfOrigin: stateOfOrigin,
      stateResidence: stateResidence,
      teamId: teamId,
      teamName: teamName,
      teamState: teamState,
      weight: weight,
    };

    setLoading(true);

    const headers = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .post(
        "http://ec2-54-224-226-216.compute-1.amazonaws.com:8080/api/player/registerplayer",
        data,
        headers
      )

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setAge("");
          setBenchPressWeight("");
          setEmail("");
          setFirstName("");
          setGender("");
          setLastName("");
          setPhoneNumber("");
          setPlayerAddress("");
          setPlayerId("");
          setPlayerName("");
          setPlayerPosition("");
          setPlayerUserName("");
          setPlayerUserName("");
          setReferreeName("");
          setReferreeNumber("");
          setSquotWeight("");
          setStateOfOrigin("");
          setStateResidence("");
          setTeamId("");
          setTeamState("");
          setTeamName("");
          setWeight("");
          //   const items = data;
          //   localStorage.setItem("User-Info", JSON.stringify(items));

          localStorage.setItem("token", res.data.token);

          localStorage.setItem("name", res.data.name);

          localStorage.setItem("Following", res.data.following);

          console.log(res.data);
          toast.success("Post is sucessful");
          navigate("/");
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
    <div>
      <BasicExample />
      <div class="container rounded bg-white mt-5 mb-5">
        <form onSubmit={submitHandler}>
          <div class="row" ref={componentRef}>
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
                    id="form2Example22"
                    className="form-control"
                    type="file"
                    multiple
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

                <div class="col-md-12 mb-4">
                  <label class="labels">SURNAME</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Surname "
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div class="col-md-12 mb-4">
                  <label class="labels">OTHER NAMES</label>
                  <input
                    type="text"
                    class="form-control"
                    value={lastName}
                    placeholder="Other Names"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>

                <div class="row mt-3">
                  <div class="col-md-12 mb-4">
                    <label class="labels">Age</label>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Your Age"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>
                  <div class="col-md-12 mb-4">
                    <label class="labels">STATE OF ORIGIN</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="State of Origin"
                      value={stateOfOrigin}
                      onChange={(e) => setStateOfOrigin(e.target.value)}
                    />
                  </div>
                  <div class="col-md-12 mb-4">
                    <label class="labels">CONTACT ADRESS</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="contact adress"
                      value={playerAddress}
                      onChange={(e) => setPlayerAddress(e.target.value)}
                    />
                  </div>

                  <div class="col-md-12 mb-4">
                    <label class="labels">STATE OF RESIDENCE</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="state of residence "
                      value={stateResidence}
                      onChange={(e) => setStateResidence(e.target.value)}
                    />
                  </div>
                  <div class="col-md-12 mb-4">
                    <label class="labels">PHONE NUMBER</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="enter phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <div class="col-md-12 mb-4">
                    <div class="form-group">
                      <label class="labels" for="form_need">
                        Please specify your gender *
                      </label>
                      <select
                        id="form_need"
                        name="need"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        class="form-control"
                        required="required"
                        data-error="Please specify your need."
                      >
                        <option value="" selected disabled>
                          --Select Your Gender--
                        </option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                  </div>

                  <div class="col-md-12 mb-4">
                    <label class="labels"> TEAM NAME</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your Team Name"
                      value={teamName}
                      onChange={(e) => setTeamName(e.target.value)}
                    />
                  </div>
                  <div class="col-md-12 mb-4">
                    <label class="labels"> TEAM STATE</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your Team State"
                      value={teamState}
                      onChange={(e) => setTeamState(e.target.value)}
                    />
                  </div>
                  <div class="col-md-12 mb-4">
                    <label class="labels">EMAIL ADRESS</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="enter email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div class="col-md-12 mb-4">
                    <label class="labels">USERNAME</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="User Name"
                      value={playerUserName}
                      onChange={(e) => setPlayerUserName(e.target.value)}
                    />
                  </div>
                  <div class="col-md-12 mb-4">
                    <div class="form-group">
                      <label class="labels" for="form_need">
                        Please specify your playing position *
                      </label>
                      <select
                        id="form_need"
                        name="need"
                        value={playerPosition}
                        onChange={(e) => setPlayerPosition(e.target.value)}
                        class="form-control"
                        required="required"
                        data-error="Please specify your need."
                      >
                        <option value="" selected disabled>
                          --Select --
                        </option>
                        <option>Center</option>
                        <option>Guard</option>
                        <option>Wide Receiver</option>
                        <option>Running Back</option>
                        <option>Quater Back</option>
                        <option>Conner Back</option>
                        <option>MainGuard</option>
                        <option>Guard</option>
                        <option>Linebacker</option>
                        <option>Safety</option>
                        <option>Rusher</option>
                        <option>Hibrid(Ofense & Defense)</option>
                      </select>
                    </div>
                  </div>

                  <div class="col-md-12 mb-4">
                    <label class="labels">HEIGHT</label>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Height"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                    />
                  </div>
                </div>

                <div class="col-md-12 mb-4">
                  <label class="labels">WEIGHT</label>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Enter your Weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </div>
                <div class="col-md-12 mb-4">
                  <label class="labels">SQUOTWEIGHT</label>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Enter your squot Weight"
                    value={squotWeight}
                    onChange={(e) => setSquotWeight(e.target.value)}
                  />
                </div>
                <div class="col-md-12 mb-4">
                  <label class="labels">BENCHPRESSWEIGHT</label>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Enter your bench press Weight"
                    value={benchPressWeight}
                    onChange={(e) => setBenchPressWeight(e.target.value)}
                  />
                </div>
                {/* <div class="mt-5 text-center">
                <button class="btn btn-primary profile-button" type="button">
                  Save Profile
                </button>
              </div> */}
              </div>
            </div>
            <div class="col-md-4 ">
              <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center experience">
                  <span>Player Referee Section</span>
                  <span class="border px-3 p-1 add-experience">
                    <i class="fa fa-plus"></i>&nbsp;Player Referee Section
                  </span>
                </div>
                <br />
                <div class="col-md-12 mb-4">
                  <label class="labels">PLAYER REFEREE NAME</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Name of shortee"
                    value={referreeName}
                    onChange={(e) => setReferreeName(e.target.value)}
                  />
                </div>{" "}
                <div class="col-md-12 mb-4">
                  <label class="labels">PLAYER REFEREE PHONENUMBER</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="additional details"
                    value={referreeNumber}
                    onChange={(e) => setReferreeNumber(e.target.value)}
                  />
                </div>
                <div class="mt-5 text-center">
                  {loading && <CircularIndeterminate />}
                  <button class="btn btn-primary greent " type="submit">
                    Save Profile
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

export default TeamPlayersApp;

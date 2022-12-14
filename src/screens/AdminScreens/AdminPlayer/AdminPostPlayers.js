import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BasicExample from "../../../components/navbar/NavBar";
import "./AdminPostPlayer.css";
import FileBase64 from "react-file-base64";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { BsArrow90DegLeft } from "react-icons/bs";
import AdminLayout from "../AdminLayout";
import CircularIndeterminate from "../../../components/Progress";
import piccy from "../../../assets/images/piccy.jpg";
const AdminPostPlayers = () => {
  const navigate = useNavigate();
  const [playerID, setPlayerID] = useState("");
  const [playerLincense, setPlayerLincense] = useState("");
  const [surName, setSurName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [playerCategory, setPlayerCategory] = useState("Team Player");
  const [otherNames, setOtherNames] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [stateOfOrigin, setStateOfOrigin] = useState("");
  const [residence, setResidence] = useState("");
  const [school, setSchool] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [playerPosition, setPlayerPosition] = useState("");
  const [benchPressWeight, setBenchPressWeight] = useState("");
  const [squotWeight, setSquotWeight] = useState("");
  const [fouthyYardDash, setFouthyYardDash] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [passport, setPassport] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [refereeName, setRefereeName] = useState("");
  const [refereePhoneNumber, setRefereePhoneNumber] = useState("");
  const [refereeContact, setRefereeContact] = useState("");

  // const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);

  //   const userId = localStorage.getItem("userId");

  const uploadimage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convert2base64(file);
    setPassport(base64);
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
      playerID: playerID,
      passport: passport,
      //   image: image,
      playerLincense: playerLincense,
      surName: surName,
      firstName: firstName,
      otherNames: otherNames,
      playerCategory: playerCategory,
      status: status,
      dateOfBirth: dateOfBirth,
      stateOfOrigin: stateOfOrigin,
      residence: residence,
      email: email,
      school: school,
      height: height,
      weight: weight,
      playerPosition: playerPosition,
      phoneNumber: phoneNumber,
      refereeContact: refereeContact,
      refereeName: refereeName,
      refereePhoneNumber: refereePhoneNumber,
      squotWeight: squotWeight,
      fouthyYardDash: fouthyYardDash,
      benchPressWeight: benchPressWeight,
    };

    setLoading(true);

    const headers = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .post("https://nafasports.herokuapp.com/api/players", data, headers)

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setPhoneNumber("");
          setSchool("");
          setPlayerLincense("");
          setSquotWeight("");
          setStateOfOrigin("");
          setPassport("");
          setSurName("");
          setResidence("");
          setFirstName("");
          setRefereeContact("");
          setRefereeName("");
          setRefereePhoneNumber("");
          setStatus("");
          setEmail("");
          setHeight("");
          setWeight("");
          setPlayerCategory("");
          setFouthyYardDash("");
          setPlayerID("");
          setOtherNames("");
          setDateOfBirth("");

          setBenchPressWeight("");

          setPlayerPosition("");

          //   const items = data;
          //   localStorage.setItem("User-Info", JSON.stringify(items));

          localStorage.setItem("token", res.data.token);

          localStorage.setItem("name", res.data.name);

          localStorage.setItem("Following", res.data.following);

          console.log(res.data);
          toast.success("Post is sucessful");
          navigate("/draftPlayer");
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
    <AdminLayout>
      <div class="container rounded bg-white mt-5 mb-5">
        {loading && <CircularIndeterminate />}
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
                <div class="row mt-2">
                  <div class="col-md-6">
                    <label class="labels">Surname</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Surname "
                      value={surName}
                      onChange={(e) => setSurName(e.target.value)}
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="labels">First Name</label>
                    <input
                      type="text"
                      class="form-control"
                      value={firstName}
                      placeholder="First Name"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-12">
                    <label class="labels">Other Names</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="enter other name"
                      value={otherNames}
                      onChange={(e) => setOtherNames(e.target.value)}
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels">State of Origin</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="State of Origin"
                      value={stateOfOrigin}
                      onChange={(e) => setStateOfOrigin(e.target.value)}
                    />
                  </div>

                  <div class="col-md-12">
                    <label class="labels">Residential Address</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="enter residential address "
                      value={residence}
                      onChange={(e) => setResidence(e.target.value)}
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels">phone Number</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="enter phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels">School</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="enter NAFA School Level"
                      value={school}
                      onChange={(e) => setSchool(e.target.value)}
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels">Email Address</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="enter email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels">Player ID</label>
                    <input
                      type="text"
                      class="form-control"
                      value={playerID}
                      onChange={(e) => setPlayerID(e.target.value)}
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels">Player's Lincense</label>
                    <input
                      type="text"
                      class="form-control"
                      value={playerLincense}
                      onChange={(e) => setPlayerLincense(e.target.value)}
                    />
                  </div>

                  <div class="col-md-12">
                    <label class="labels">Date of Birth</label>
                    <input
                      type="date"
                      class="form-control"
                      value={dateOfBirth}
                      onChange={(e) => setDateOfBirth(e.target.value)}
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels">FouthyYardDash</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="fouthyYardDash"
                      value={fouthyYardDash}
                      onChange={(e) => setFouthyYardDash(e.target.value)}
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels">Player Position</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Player Position"
                      value={playerPosition}
                      onChange={(e) => setPlayerPosition(e.target.value)}
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels">Height</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Height"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                    />
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-6">
                    <label class="labels">weight</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your Weight"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="labels">Status</label>
                    <input
                      type="text"
                      class="form-control"
                      value={status}
                      placeholder="eg. Retired or Active"
                      onChange={(e) => setStatus(e.target.value)}
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="labels">Squote Weight</label>
                    <input
                      type="text"
                      class="form-control"
                      value={squotWeight}
                      placeholder="squote weight"
                      onChange={(e) => setSquotWeight(e.target.value)}
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="labels">Bench Press Weight </label>
                    <input
                      type="text"
                      class="form-control"
                      value={benchPressWeight}
                      placeholder="squote weight"
                      onChange={(e) => setBenchPressWeight(e.target.value)}
                    />
                  </div>
                </div>
                {/* <div class="mt-5 text-center">
                <button class="btn btn-primary profile-button" type="button">
                  Save Profile
                </button>
              </div> */}
              </div>
            </div>
            <div class="col-md-4">
              <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center experience">
                  <span>Player Referee Section</span>
                  <span class="border px-3 p-1 add-experience">
                    <i class="fa fa-plus"></i>&nbsp;Player Referee Section
                  </span>
                </div>
                <br />
                <div class="col-md-12">
                  <label class="labels">Player Referee Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Name of shortee"
                    value={refereeName}
                    onChange={(e) => setRefereeName(e.target.value)}
                  />
                </div>{" "}
                <br />
                <div class="col-md-12">
                  <label class="labels">Player Referee PhoneNumber</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="additional details"
                    value={refereePhoneNumber}
                    onChange={(e) => setRefereePhoneNumber(e.target.value)}
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Player Referee Address</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="additional details"
                    value={refereeContact}
                    onChange={(e) => setRefereeContact(e.target.value)}
                  />
                </div>
                <div class="mt-5 text-center">
                  <button class="btn btn-primary " type="submit">
                    Save Profile
                  </button>
                  <ToastContainer />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AdminPostPlayers;

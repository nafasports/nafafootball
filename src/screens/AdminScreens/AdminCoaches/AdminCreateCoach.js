import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BasicExample from "../../../components/navbar/NavBar";
import "../AdminPlayer/AdminPostPlayer.css";
import FileBase64 from "react-file-base64";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { BsArrow90DegLeft } from "react-icons/bs";
import AdminLayout from "../AdminLayout";
import CircularIndeterminate from "../../../components/Progress";
import piccy from "../../../assets/images/piccy.jpg";
const AdminCreateCoach = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [team, setTeam] = useState("");
  const [license, setLicense] = useState("");
  const [contactAdress, setContactAdress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [passport, setPassport] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");

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
      passport: passport,
      //   image: image,

      status: status,
      date: date,

      email: email,

      phoneNumber: phoneNumber,
      name: name,
      team: team,
      license: license,
      contactAdress: contactAdress,
    };

    setLoading(true);

    const headers = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .post("https://nafasports.herokuapp.com/api/coaches", data, headers)

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setPhoneNumber("");

          setPassport("");

          setStatus("");
          setEmail("");

          setLicense("");
          setTeam("");
          setContactAdress("");

          setDate("");

          setName("");

          //   const items = data;
          //   localStorage.setItem("User-Info", JSON.stringify(items));

          localStorage.setItem("token", res.data.token);

          localStorage.setItem("name", res.data.name);

          localStorage.setItem("Following", res.data.following);

          console.log(res.data);
          toast.success("Post is sucessful");
          navigate("/getCoaches");
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
                <div class="row mt-2">
                  <div class="col-md-6">
                    <label class="labels">Full Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Full Name "
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="labels">Team</label>
                    <input
                      type="text"
                      class="form-control"
                      value={team}
                      placeholder="Team"
                      onChange={(e) => setTeam(e.target.value)}
                    />
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-12">
                    <label class="labels">Phone Number</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="enter your phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels">Contact Address</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="your contact address"
                      value={contactAdress}
                      onChange={(e) => setContactAdress(e.target.value)}
                    />
                  </div>

                  <div class="col-md-12">
                    <label class="labels">License</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="lincense id "
                      value={license}
                      onChange={(e) => setLicense(e.target.value)}
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
                    <label class="labels">Status </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="eg. Retired or Active"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    />
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-6">
                    <label class="labels">Submission Date</label>
                    <input
                      type="date"
                      class="form-control"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
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

export default AdminCreateCoach;

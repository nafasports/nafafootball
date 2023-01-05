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
const CreateLeagueDivision = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "https://nafasports.herokuapp.com/api/league"
      );
      console.log(data);
      setNews(data);
      // setLoading(false);

      //   localStorage.setItem("AdminUserDetails", JSON.stringify(data._id));
      localStorage.setItem("AdimUserId", data.user?._id);
    };

    fetchPosts();
  }, []);
  const [leagueName, setLeagueName] = useState("");
  const [DivisionName, setDivisionName] = useState("");

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
      DivisionName: DivisionName,
      leagueName: leagueName,
      image: image,
    };

    setLoading(true);

    const headers = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .post("https://nafasports.herokuapp.com/api/divisions", data, headers)

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setDivisionName("");
          setLeagueName("");

          setImage("");

          //   const items = data;
          //   localStorage.setItem("User-Info", JSON.stringify(items));

          localStorage.setItem("token", res.data.token);

          localStorage.setItem("name", res.data.name);

          localStorage.setItem("Following", res.data.following);

          console.log(res.data);
          toast.success("Post is sucessful");
          navigate("/getDivision");
        } else {
          toast.error(res.data.error);
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Incorrect Inputs, Fill in the appopraite data");
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
                <h2 className="fw-bold mb-5">Create a League Division</h2>

                <form onSubmit={submitHandler}>
                  {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                  <div className="row">
                    <Box
                      // component="form"
                      sx={{
                        "& .MuiTextField-root": { m: 1, width: "25ch " },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <div className="col-md-6 mb-4">
                        <TextField
                          id="outlined-select-currency-native"
                          select
                          label="Select League"
                          // defaultValue="EUR"
                          value={leagueName}
                          onChange={(e) => setLeagueName(e.target.value)}
                          SelectProps={{
                            native: true,
                          }}
                          // helperText="Please select your currency"
                        >
                          <option></option>
                          {news?.leagues?.map((usery) => (
                            <>
                              <option></option>
                              <option>{usery.leagueName}</option>
                            </>
                          ))}
                        </TextField>
                      </div>

                      <div className="col-md-6 mb-4">
                        <div className="form-outline mb-4">
                          <TextField
                            required
                            id="outlined-required"
                            label="League Division Name"
                            value={DivisionName}
                            onChange={(e) => setDivisionName(e.target.value)}
                            defaultValue="League Division Name"
                          />
                        </div>
                      </div>
                    </Box>
                  </div>

                  {/* <Box
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "36ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    
                  </Box> */}
                  {loading && <CircularIndeterminate />}
                  {/* <!-- Submit button --> */}
                  <button
                    type="submit"
                    style={{ background: "green" }}
                    className="btn btn-primary btn-block mb-4"
                  >
                    Create a League Diviosn
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

export default CreateLeagueDivision;

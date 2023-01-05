import { Link } from "react-router-dom";
import "../Login.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FileBase64 from "react-file-base64";
import { BsArrow90DegLeft } from "react-icons/bs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import nafas from "../../assets/images/nafas.png";
import CircularIndeterminate from "../../components/Progress";
import AdminLayout from "./AdminLayout";
import BasicExample from "../../components/navbar/NavBar";
import { MenuItem, TextField } from "@mui/material";
import { Box } from "@mui/system";

// toast.configure();
const AdminCreatePost = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "https://nafasports.herokuapp.com/api/posts/categories"
      );
      console.log(data);
      setNews(data);
      // setLoading(false);

      //   localStorage.setItem("AdminUserDetails", JSON.stringify(data._id));
      localStorage.setItem("AdimUserId", data.user?._id);
    };

    fetchPosts();
  }, []);
  // const redirect = location.search ? location.search.split("=")[1] : "/";

  //   localStorage.getItem("userId");
  const [desc, setDesc] = useState("");
  const [user, setUser] = useState(localStorage.getItem("userId"));
  const [caption, setCaption] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

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
      desc: desc,
      user: user,
      image: image,
      content: content,
      caption: caption,
      category: category,
    };

    setLoading(true);

    const headers = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .post("https://nafasports.herokuapp.com/api/posts", data, headers)

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setCaption("");
          setCategory("");
          setContent("");
          setDesc("");
          setUser("");
          setImage("");

          //   const items = data;
          //   localStorage.setItem("User-Info", JSON.stringify(items));

          // localStorage.setItem("token", res.data.token);

          // localStorage.setItem("name", res.data.name);

          console.log(res.data);
          toast.success("Post is sucessful");
          navigate("/newspost");
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
    <AdminLayout>
      <div style={{ width: "100%", height: "auto" }}>
        <section
          className="h-100 gradient-form"
          // style={{ backgroundColor: "#eee" }}
        >
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-xl-10">
                <div className="card rounded-3 text-black">
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <div className="card-body p-md-5 mx-md-4">
                        <div className="text-center">
                          {/* <img
                          src="https://cdn.cdnlogo.com/logos/s/80/sky-sports-news.svg"
                          style={{ width: "185px" }}
                          alt="logo"
                        /> */}
                          <div>
                            <img
                              src={nafas}
                              alt="gh"
                              className="img-footer-img"
                            />{" "}
                          </div>
                          <h4 className="mt-1 mb-5 pb-1">
                            We are NAFA Football
                          </h4>
                        </div>
                        {loading && <CircularIndeterminate />}
                        <form onSubmit={submitHandler}>
                          <p>Create your news post here</p>
                          <Box
                            // component="form"
                            sx={{
                              "& .MuiTextField-root": { m: 1, width: "36ch" },
                            }}
                            className="input-index-input"
                            noValidate
                            autoComplete="off"
                          >
                            <div className="form-outline mb-4">
                              <TextField
                                required
                                id="outlined-required"
                                label="News Caption"
                                value={caption}
                                onChange={(e) => setCaption(e.target.value)}
                                defaultValue="Your News must have a caption"
                              />
                            </div>

                            <div className="form-outline mb-4">
                              <TextField
                                id="outlined-select-currency-native"
                                select
                                label="News Category"
                                // defaultValue="EUR"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                SelectProps={{
                                  native: true,
                                }}
                                // helperText="Please select your currency"
                              >
                                {news?.categories?.map((usery) => (
                                  <>
                                    <option></option>
                                    <option>{usery.category}</option>
                                  </>
                                ))}
                              </TextField>
                            </div>

                            <div className="form-outline mb-4">
                              <TextField
                                required
                                id="outlined-required"
                                label="News Description"
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                                defaultValue="News Description"
                              />
                            </div>
                            <div className="form-outline mb-4">
                              <TextField
                                required
                                id="outlined-multiline-static"
                                label="News Content"
                                multiline
                                rows={4}
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                defaultValue=" News Content"
                              />
                            </div>
                            <div className="form-outline mb-4">
                              <label
                                className="form-label"
                                for="form2Example22"
                              >
                                Choose an Image file
                              </label>
                              <TextField
                                required
                                id="outlined-multiline-static"
                                type="file"
                                // multiple
                                accept=".jpeg, .png, .jpg, "
                                onChange={(e) => uploadimage(e)}
                              />
                            </div>
                            <div className="text-center pt-1 mb-5 pb-1">
                              {loading && <CircularIndeterminate />}
                              <button
                                className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                                type="submit"
                              >
                                Create a Post
                              </button>
                            </div>
                          </Box>
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
                          through sport, provision of livelihood, and exposure
                          to diverse culture and tourism from NAFA tours.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AdminLayout>
  );
};

export default AdminCreatePost;

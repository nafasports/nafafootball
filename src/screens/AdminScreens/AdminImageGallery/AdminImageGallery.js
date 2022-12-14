import { Link } from "react-router-dom";
import "../../Login.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FileBase64 from "react-file-base64";
import { BsArrow90DegLeft } from "react-icons/bs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminLayout from "../AdminLayout";
import CircularIndeterminate from "../../../components/Progress";
import BasicExample from "../../../components/navbar/NavBar";
import nafas from "../../../assets/images/nafas.png";
// toast.configure();
const AdminImageGallery = () => {
  const navigate = useNavigate();
  // const redirect = location.search ? location.search.split("=")[1] : "/";

  //   localStorage.getItem("userId");
  const [desc, setDesc] = useState("");
  const [user, setUser] = useState(localStorage.getItem("userId"));
  const [caption, setCaption] = useState("");

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

      caption: caption,
    };

    setLoading(true);

    const headers = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .post("https://nafasports.herokuapp.com/api/imagegallery", data, headers)

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setCaption("");

          setDesc("");
          setUser("");
          setImage("");

          //   const items = data;
          //   localStorage.setItem("User-Info", JSON.stringify(items));

          localStorage.setItem("token", res.data.token);

          localStorage.setItem("name", res.data.name);
          localStorage.setItem("userId", res.data._id);
          localStorage.setItem("isAdmin", res.data.isAdmin);
          localStorage.setItem("email", res.data.email);

          console.log(res.data);
          toast.success("Post is sucessful");
          navigate("/");
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
                          <div>
                            <img
                              src={nafas}
                              alt="gh"
                              className="img-footer-img"
                            />{" "}
                          </div>
                          <h4 className="mt-1 mb-5 pb-1">We are NAFA</h4>
                        </div>
                        {loading && <CircularIndeterminate />}
                        <form onSubmit={submitHandler}>
                          <p>Please login to your account</p>

                          <div className="form-outline mb-4">
                            <input
                              type="text"
                              id="form2Example11"
                              className="form-control"
                              placeholder="Your News must have a caption"
                              value={caption}
                              onChange={(e) => setCaption(e.target.value)}
                            />
                            <label className="form-label" for="form2Example11">
                              News Caption
                            </label>
                          </div>

                          <div className="form-outline mb-4">
                            <input
                              type="text"
                              id="form2Example22"
                              className="form-control"
                              value={desc}
                              onChange={(e) => setDesc(e.target.value)}
                            />
                            <label className="form-label" for="form2Example22">
                              News Content
                            </label>
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              id="form2Example22"
                              className="form-control"
                              type="file"
                              multiple
                              accept=".jpeg, .png, .jpg, "
                              onChange={(e) => uploadimage(e)}
                            />
                            <label className="form-label" for="form2Example22">
                              Choose a file
                            </label>
                          </div>
                          <div className="text-center pt-1 mb-5 pb-1">
                            <button
                              className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                              type="submit"
                            >
                              Create an Image pOST
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                      <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                        <h4 className="mb-4">We are SkySports News</h4>
                        <p className="small mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
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

export default AdminImageGallery;

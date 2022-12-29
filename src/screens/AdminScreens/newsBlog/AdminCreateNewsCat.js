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
import nafas from "../../../assets/images/nafas.png";
import CircularIndeterminate from "../../../components/Progress";
// toast.configure();
const AdminCreateNewsCat = () => {
  const navigate = useNavigate();
  // const redirect = location.search ? location.search.split("=")[1] : "/";

  //   localStorage.getItem("userId");
  const [category, setCategory] = useState("");

  const [loading, setLoading] = useState(false);

  //   const userId = localStorage.getItem("userId");

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
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
      .post(
        "https://nafasports.herokuapp.com/api/posts/categories",
        data,
        headers
      )

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setCategory("");

          //   const items = data;
          //   localStorage.setItem("User-Info", JSON.stringify(items));

          localStorage.setItem("category", res.data.category);

          console.log(res.data);
          toast.success("News Category created sucessfully");
          navigate("/createPost");
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
        <section className="h-100 gradient-form">
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
                          <p>Please create a news category here</p>

                          <div className="form-outline mb-4">
                            <label className="form-label" for="form2Example11">
                              News Category
                            </label>
                            <input
                              type="text"
                              id="form2Example11"
                              className="form-control"
                              placeholder="Category of your News Post"
                              value={category}
                              onChange={(e) => setCategory(e.target.value)}
                            />
                          </div>

                          <div className="text-center pt-1 mb-5 pb-1">
                            <button
                              className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                              type="submit"
                            >
                              Create a pOST
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

export default AdminCreateNewsCat;

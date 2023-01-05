import { Link, useParams } from "react-router-dom";
import "../../Login.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FileBase64 from "react-file-base64";
import { BsArrow90DegLeft } from "react-icons/bs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import nafas from "../../../assets/images/nafas.png";
import AdminLayout from "../../AdminScreens/AdminLayout";
import CircularIndeterminate from "../../../components/Progress";
// toast.configure();
const AssignRoles = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "https://nafasports.herokuapp.com/api/users/roles"
      );
      console.log(data);
      setNews(data);
      // setLoading(false);

      //   localStorage.setItem("AdminUserDetails", JSON.stringify(data._id));
      localStorage.setItem("AdimUserId", data.user?._id);
    };

    fetchPosts();
  }, []);
  const navigate = useNavigate();
  const { id } = useParams();
  // const redirect = location.search ? location.search.split("=")[1] : "/";

  //   localStorage.getItem("userId");
  const [user, setUser] = useState({ id });
  const [roles, setRoles] = useState("");

  const [loading, setLoading] = useState(false);

  //   const userId = localStorage.getItem("userId");

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      roles: roles,
      user: user,
    };

    setLoading(true);

    const headers = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .put(
        `https://nafasports.herokuapp.com/api/users/admin/${id}`,
        data,
        headers
      )

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setRoles("");
          setUser("");

          //   const items = data;
          //   localStorage.setItem("User-Info", JSON.stringify(items));

          localStorage.setItem("NewUserRole", res.data.roles);

          console.log(res.data);
          toast.success("Roles Category created sucessfully");
          navigate("/userRole");
        } else {
          toast.error(res.data.error);
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Failed to create roles");
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
            <div
              style={{
                broder: "1px solid grey",
                borderRadius: "8px",
                color: "#171744",
                backgroundColor: "whitesmoke",
                width: "50px",
                height: "50px",
                display: "flex",
                textDecoration: "none",
                textAlign: "center",
                alignItems: "center",
                borderColor: "grey",
                justifyContent: "flex-start",
                marginBottom: "30px",
              }}
            >
              <Link
                to={`/admin/${localStorage.getItem("isAdmin")}`}
                style={{
                  display: "flex",
                  alignItem: "center",
                  fontSize: "20px",
                  justifyContent: "center",
                  texAlign: "center",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <BsArrow90DegLeft />
              </Link>{" "}
            </div>
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
                          <div class="col-md-6 mb-4">
                            <div class="form-group">
                              <label for="form_need">
                                Please create a user role here*
                              </label>
                              <select
                                id="form_need"
                                name="need"
                                class="form-control"
                                required="required"
                                value={roles}
                                onChange={(e) => setRoles(e.target.value)}
                                data-error="Please specify your need."
                              >
                                <option value="" selected disabled>
                                  --Select Your Roles--
                                </option>
                                {news?.roles?.map((usery) => (
                                  <>
                                    <option>{usery.roles} </option>
                                  </>
                                ))}
                              </select>
                            </div>
                          </div>
                          {/* <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="form2Example11"
                            className="form-control"
                            placeholder="Set Roles of a user"
                            value={roles}
                            onChange={(e) => setRoles(e.target.value)}
                          />
                          <label className="form-label" for="form2Example11">
                            User Roles
                          </label>
                        </div> */}

                          <div className="text-center pt-1 mb-5 pb-1">
                            <button
                              className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                              type="submit"
                            >
                              Create Roles
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

export default AssignRoles;

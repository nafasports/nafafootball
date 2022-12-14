import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../AdminLayout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import anfl from "../../../assets/images/anfl.png";
import CircularIndeterminate from "../../../components/Progress";
import { Checkbox } from "@mui/material";
import nafas from "../../../assets/images/nafas.png";
const PlayersActivate = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // const [playerId, setPlayerId] = useState(id);
  const [activatePlayer, setActivatePlayer] = useState("");

  const [loading, setLoading] = useState(false);

  //   const userId = localStorage.getItem("userId");

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      // playerId: playerId,
      activatePlayer: activatePlayer,
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
        `https://nafasports.herokuapp.com/api/players/activate/${id}`,
        data,
        headers
      )

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setActivatePlayer("");

          // setPlayerId("");
          //   const items = data;
          //   localStorage.setItem("User-Info", JSON.stringify(items));

          localStorage.setItem("token", res.data.token);

          localStorage.setItem("name", res.data.name);

          localStorage.setItem("Following", res.data.following);

          console.log(res.data);
          toast.success("Post is sucessful");
          navigate("/activatePlayer");
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
                        <h4 className="mt-1 mb-5 pb-1">We are NAFA</h4>
                      </div>
                      {loading && <CircularIndeterminate />}
                      <form onSubmit={submitHandler}>
                        <p>Player Registeration Activation</p>

                        <div className="form-outline mb-4">
                          <label className="form-label" for="form2Example11">
                            Activate Player
                          </label>
                          <Checkbox
                            type="checkbox"
                            label="Activate Player"
                            checked={activatePlayer}
                            onChange={(e) =>
                              setActivatePlayer(e.target.checked)
                            }
                          ></Checkbox>
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                            type="submit"
                          >
                            Activate Player
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">We are NAFA News</h4>
                      <p className="small mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
};

export default PlayersActivate;

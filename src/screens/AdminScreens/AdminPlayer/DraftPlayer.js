import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../AdminLayout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import anfl from "../../../assets/images/anfl.png";
import CircularIndeterminate from "../../../components/Progress";
const DraftPlayer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // const [playerId, setPlayerId] = useState(id);
  const [playerDraftTeams, setPlayerDraftTeams] = useState("");
  const [playerCategory, setPlayerCategory] = useState("");

  const [loading, setLoading] = useState(false);

  //   const userId = localStorage.getItem("userId");

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      // playerId: playerId,
      playerDraftTeams: playerDraftTeams,
      playerCategory: playerCategory,
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
        `https://nafasports.herokuapp.com/api/players/draft/${id}`,
        data,
        headers
      )

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setPlayerCategory("");
          setPlayerDraftTeams("");
          // setPlayerId("");
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
        toast.error("Invalid email & Password");
      });
  };

  return (
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
                <h2 className="fw-bold mb-5">Create a Team</h2>
                {loading && <CircularIndeterminate />}
                <form onSubmit={submitHandler}>
                  {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="form3Example1">
                          Player Category
                        </label>
                        <h5>{playerCategory} </h5>
                        <select
                          className="form-outline mb-4"
                          value={playerCategory}
                          onChange={(e) => setPlayerCategory(e.target.value)}
                        >
                          <option></option>
                          <option>Poll Player</option>
                          <option>Team Player</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline mb-4">
                        <label class="form-label" for="form3Example3">
                          Team Name
                        </label>
                        <input
                          type="text"
                          id="form3Example3"
                          className="form-control"
                          value={playerDraftTeams}
                          onChange={(e) => setPlayerDraftTeams(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* <!-- Email input --> */}

                  {/* <!-- Submit button --> */}
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                  >
                    Draft Player
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
};

export default DraftPlayer;

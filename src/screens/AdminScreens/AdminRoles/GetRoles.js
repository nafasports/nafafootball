import axios from "axios";
import React, { useEffect, useState } from "react";
import Message from "../../../components/Message";
import AdminLayout from "../AdminLayout";
import Loader from "../../../components/Loader";
const GetRoles = () => {
  const [filtered, setFiltered] = useState("");
  const [user, setUser] = useState([]);
  const [news, setNews] = useState([]);
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "https://nafasports.herokuapp.com/api/users/"
      );
      console.log(data);
      setUser(data);
      setLoading(false);
      setError(false);
      //   localStorage.setItem("AdminUserDetails", JSON.stringify(data._id));
      localStorage.setItem("AdimUserId", data.user?._id);
    };

    fetchPosts();
  }, []);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "https://nafasports.herokuapp.com/api/users/roles"
      );
      console.log(data);
      setNews(data);
      setLoading(false);
      setError(false);
      //   localStorage.setItem("AdminUserDetails", JSON.stringify(data._id));
      localStorage.setItem("AdimUserId", data.user?._id);
    };

    fetchPosts();
  }, []);
  return (
    <AdminLayout>
      <h3 className="text-center">Admin Roles</h3>
      <ol class="list-group list-group-light list-group-numbered">
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">SuperAdmin</div>
            This is the board head that controls all other subAdmins, He is
            incharge of nafa portal
          </div>
          <span class="badge badge-primary rounded-pill">14</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">NewsCaster & Blog Admin</div>
            This SubAdmin is incharge of blogs, newsletters, & contents.
          </div>
          <span class="badge badge-primary rounded-pill">14</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Games Admin</div>
            This SubAdmin is incharge of NAFA games, both Fixtures and
            LiveGames.
          </div>
        </li>

        <li class="list-group-item d-flex justify-content-between align-items-start">
          {" "}
          <div class="ms-2 me-auto">
            <div class="fw-bold">FA Admin</div>
            This SubAdmin is incharge of Players, Teams, Officials, referees
            registeration and managment.
          </div>
        </li>
        <span class="badge badge-primary rounded-pill">14</span>
      </ol>
      <hr />

      <br />
      <h3 className="text-center">Roles List</h3>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          {news?.roles?.map((usery) => (
            <div>
              <ol class="list-group list-group-light list-group-numbered">
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold " style={{ color: "grey" }}>
                      *{usery.roles}*
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          ))}
        </div>
      )}
    </AdminLayout>
  );
};

export default GetRoles;

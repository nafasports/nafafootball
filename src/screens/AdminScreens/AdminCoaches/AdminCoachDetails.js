import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// import "../../screens/AdminScreens/AdminPlayer/AdminPostPlayers.css";

import { Link } from "react-router-dom";
import { BsArrow90DegLeft } from "react-icons/bs";
import CircularIndeterminate from "../../../components/Progress";
import AdminLayout from "../AdminLayout";

const AdminCoachDetails = () => {
  const [PlayersDetails, setPlayerDetails] = useState({});
  const { coachId } = useParams();
  // const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);
  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get(
        `http://ec2-54-224-226-216.compute-1.amazonaws.com:8080/api/coaches/getcoach/${coachId}`
      );

      setPlayerDetails(data);
      setLoading(false);
      setError(false);
      //   localStorage.setItem("All-Users", JSON.stringify(data));
    };
    fetchUsers();
  }, [coachId]);
  return (
    <AdminLayout>
      <div class="container rounded bg-white mt-5 mb-5">
        {loading && <CircularIndeterminate />}

        <div class="row">
          <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              <div className="form-outline mb-4">
                <img
                  style={{
                    width: "300px",
                    height: "40vh",
                    border: "1px solid grey",
                    objectFit: "cover",
                  }}
                  src={PlayersDetails.photos}
                />
              </div>
              <span class="font-weight-bold">
                {PlayersDetails.firstName}
                {PlayersDetails.lastName}{" "}
              </span>
              <span class="text-black-50">{PlayersDetails.email} </span>
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
                  <div>
                    {PlayersDetails.firstName} {PlayersDetails.lastName}
                  </div>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="labels">Contact Address</label>
                  <div>{PlayersDetails.coachResidence} </div>
                </div>

                <div class="col-md-12">
                  <label class="labels">Coach Lincense</label>
                  <div>{PlayersDetails.coachLiceneId} </div>
                </div>
                <div class="col-md-12">
                  <label class="labels">phone Number</label>
                  <div>{PlayersDetails.phoneNumber} </div>
                </div>

                <div class="col-md-12">
                  <label class="labels">Email Address</label>
                  <div>{PlayersDetails.email} </div>
                </div>
                <div class="col-md-12">
                  <label class="labels">Team</label>
                  <div>{PlayersDetails.coachTeam} </div>
                </div>

                <div class="col-md-6">
                  <label class="labels">Team State </label>
                  <div>{PlayersDetails.teamState} </div>
                </div>
                {/* <div class="col-md-12">
                  <label class="labels">Date</label>
                  <div>{PlayersDetails.date} </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminCoachDetails;

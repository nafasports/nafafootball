import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// import "../../screens/AdminScreens/AdminPlayer/AdminPostPlayers.css";

import { Link } from "react-router-dom";
import { BsArrow90DegLeft } from "react-icons/bs";
import CircularIndeterminate from "../../../components/Progress";
import AdminLayout from "../AdminLayout";

const AdminGetOfficialDetails = () => {
  const [PlayersDetails, setPlayerDetails] = useState({});
  const { id } = useParams();
  // const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);
  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get(
        `https://nafasports.herokuapp.com/api/officials/${id}`
      );

      setPlayerDetails(data);
      setLoading(false);
      setError(false);
      //   localStorage.setItem("All-Users", JSON.stringify(data));
    };
    fetchUsers();
  }, [id]);
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
                  src={PlayersDetails.passport}
                />
              </div>
              <span class="font-weight-bold">{PlayersDetails.name} </span>
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
                  <div>{PlayersDetails.name} </div>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="labels">Contact Address</label>
                  <div>{PlayersDetails.contactAdress} </div>
                </div>

                <div class="col-md-12">
                  <label class="labels">Coach Lincense</label>
                  <div>{PlayersDetails.license} </div>
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
                  <label class="labels">Officiating Role</label>
                  <div>{PlayersDetails.officiatingRole} </div>
                </div>
                <div class="col-md-12">
                  <label class="labels">Category Role</label>
                  <div>{PlayersDetails.categoryRole} </div>
                </div>

                <div class="col-md-6">
                  <label class="labels">Coach Status </label>
                  <div>{PlayersDetails.status} </div>
                </div>
                <div class="col-md-12">
                  <label class="labels">Date</label>
                  <div>{PlayersDetails.date} </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminGetOfficialDetails;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BasicExample from "../../components/navbar/NavBar";
// import "../../screens/AdminScreens/AdminPlayer/AdminPostPlayers.css";

import { Link } from "react-router-dom";
import { BsArrow90DegLeft } from "react-icons/bs";
import CircularIndeterminate from "../Progress";
import Footer from "../Footer/Footer";
// import CircularIndeterminate from "../../../../components/Progress";

const TeamPlayerDetails = () => {
  const [PlayersDetails, setPlayerDetails] = useState({});
  const { id } = useParams();
  // const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);
  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get(
        `https://nafasports.herokuapp.com/api/players/${id}`
      );
      console.log(data);
      setPlayerDetails(data);
      setLoading(false);
      setError(false);
      //   localStorage.setItem("All-Users", JSON.stringify(data));
    };
    fetchUsers();
  }, [id]);
  return (
    <div>
      <BasicExample />
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
                  src={PlayersDetails?.passport}
                />
              </div>
              <span class="font-weight-bold">{PlayersDetails?.surName} </span>
              <span class="text-black-50">{PlayersDetails?.email} </span>
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
                  <label class="labels">Surname</label>
                  <div>{PlayersDetails?.surName} </div>
                </div>
                <div class="col-md-6">
                  <label class="labels">First Name</label>
                  <div>{PlayersDetails?.firstName} </div>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="labels">Other Names</label>
                  <div>{PlayersDetails?.otherNames} </div>
                </div>
                <div class="col-md-12">
                  <label class="labels">Player Category</label>
                  <div>{PlayersDetails?.playerCategory} </div>
                </div>
                <div class="col-md-12">
                  <label class="labels">Team</label>
                  <div>{PlayersDetails?.playerDraftTeams} </div>
                </div>
                <div class="col-md-12">
                  <label class="labels">State of Origin</label>
                  <div>{PlayersDetails?.stateOfOrigin} </div>
                </div>

                <div class="col-md-12">
                  <label class="labels">Residential Address</label>
                  <div>{PlayersDetails?.residence} </div>
                </div>
                <div class="col-md-12">
                  <label class="labels">phone Number</label>
                  <div>{PlayersDetails?.phoneNumber} </div>
                </div>
                <div class="col-md-12">
                  <label class="labels">School</label>
                  <div>{PlayersDetails?.school} </div>
                </div>

                <div class="col-md-12">
                  <label class="labels">Player ID</label>
                  <div>{PlayersDetails?.playerID} </div>
                </div>

                <div class="col-md-12">
                  <label class="labels">Date of Birth</label>
                  <div>{PlayersDetails?.dateOfBirth} </div>
                </div>
                <div class="col-md-12">
                  <label class="labels">FouthyYardDash</label>
                  <div>{PlayersDetails?.fouthyYardDash} </div>
                </div>
                <div class="col-md-12">
                  <label class="labels">Player Position</label>
                  <div>{PlayersDetails?.playerId?.playerPosition} </div>
                </div>
                <div class="col-md-12">
                  <label class="labels">Height</label>
                  <div>{PlayersDetails?.height} </div>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <label class="labels">weight</label>
                  <div>{PlayersDetails?.weight} </div>
                </div>
                <div class="col-md-6">
                  <label class="labels">Squote Weight</label>
                  <div>{PlayersDetails?.squotWeight} </div>
                </div>
                <div class="col-md-6">
                  <label class="labels">Bench Press Weight</label>
                  <div>{PlayersDetails?.benchPressWeight} </div>
                </div>
                <div class="col-md-6">
                  <label class="labels">Player Status </label>
                  <div>{PlayersDetails?.status} </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center experience">
                <span>Player Referee Section</span>
                <span class="border px-3 p-1 add-experience">
                  <i class="fa fa-plus"></i>&nbsp;Player Referee Section
                </span>
              </div>
              <br />
              <div class="col-md-12">
                <label class="labels">Player Referee Name</label>
                <div>{PlayersDetails?.refereeName} </div>
              </div>{" "}
              <br />
              <div class="col-md-12">
                <label class="labels">Player Referee PhoneNumber</label>
                <div>{PlayersDetails?.refereePhoneNumber} </div>
              </div>
              <div class="col-md-12">
                <label class="labels">Player Referee Address</label>
                <div>{PlayersDetails?.refereeContact} </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TeamPlayerDetails;

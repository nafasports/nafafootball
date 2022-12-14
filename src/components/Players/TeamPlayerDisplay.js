import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const TeamPlayerDisplay = ({ players }) => {
  const [filtered, setFiltered] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  return (
    <div
      style={{
        marginLeft: "30px",
        marginRight: "30px",
        marginTop: "30px",
        marginBottom: "30px",
      }}
    >
      <h4 className="text-left mb-4">Players List</h4>
      <input
        className="dsp-input"
        type="text"
        placeholder="Search Player By Name"
        onChange={(e) => setSearchTitle(e.target.value)}
      />

      <div className="div-fl-d-g" style={{ width: "100%" }}>
        {players
          ?.filter((value) => {
            if (filtered === "Team Player") {
              return value;
            } else if (value.playerCategory === "Team Player") {
              return value;
            }
          })
          .filter((value) => {
            if (searchTitle === "") {
              return value;
            } else if (
              value?.surName.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return value;
            }
          })
          .map((usy, index) => (
            <div>
              <div>
                {searchTitle ? (
                  <div className="ch-ply">
                    <div key={usy._id}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <div>
                          <Image
                            src={usy?.passport}
                            fluid
                            thumbnail
                            style={{
                              width: "60px",
                              height: "60px",
                              maxHeight: "60px",
                              objectFit: "cover",
                              marginBottom: "20px",
                            }}
                          />
                        </div>
                        <div>
                          <div>
                            {" "}
                            <h6>
                              {" "}
                              <Link
                                to={`/teamplayerProfile/${usy?._id}`}
                                style={{
                                  textDecoration: "none",
                                  marginLeft: "10px",
                                  color: "black",
                                }}
                              >
                                {usy?.surName} {usy?.firstName}
                              </Link>
                            </h6>
                          </div>
                          <div>
                            <h6
                              style={{
                                textDecoration: "none",
                                marginLeft: "10px",
                                color: "black",
                              }}
                            >
                              {usy?.playerDraftTeams}{" "}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
              <div>
                <div key={index} sm={12} md={6} lg={4} xl={3}>
                  {/* //// */}
                  <div class="col-md-4 mt-4">
                    <div class="card profile-card-5 gh">
                      <div class="card-img-block">
                        <img
                          class="card-img-top"
                          style={{
                            width: "100%",
                            height: "30vh",
                            objectFit: "cover",
                          }}
                          src={usy.passport}
                          alt="Card image cap"
                        />
                      </div>
                      <div class="card-body pt-0">
                        <h5 class="card-title">
                          <Link
                            class="card-title"
                            to={`/teamplayerProfile/${usy._id}`}
                            style={{
                              textDecoration: "none",
                              color: "inherit",
                            }}
                          >
                            {usy.surName} {usy.firstName}
                          </Link>
                        </h5>
                        <p> {usy?.playerDraftTeams}</p>
                      </div>
                    </div>
                  </div>

                  {/* //// */}
                  {/* <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid grey",
                    marginBottom: "20px",
                    backgroundColor: "whitesmoke",
                  }}
                >
                  <div>
                    <img
                      src={usy?.passport}
                      fluid
                      thumbnail
                      style={{
                        width: "100px",
                        height: "100px",
                        maxHeight: "100px",
                        objectFit: "cover",
                        marginBottom: "20px",
                      }}
                    />
                  </div>
                  <div>
                    <div>
                      {" "}
                      <h6>
                        {" "}
                        <Link
                          to={`/teamplayerProfile/${usy?._id}`}
                          style={{
                            textDecoration: "none",
                            marginLeft: "10px",
                            color: "black",
                          }}
                        >
                          {usy?.surName} {usy?.firstName}
                        </Link>
                      </h6>
                    </div>
                    <div>
                      <h6
                        style={{
                          textDecoration: "none",
                          marginLeft: "10px",
                          color: "black",
                        }}
                      >
                        {usy?.playerDraftTeams}{" "}
                      </h6>
                    </div>
                  </div>
                </div> */}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TeamPlayerDisplay;

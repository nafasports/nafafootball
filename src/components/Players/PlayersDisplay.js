import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./PlayerDisplayCard.css";

const PlayersDisplay = ({ users }) => {
  const [filtered, setFiltered] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  return (
    <div style={{ marginLeft: "30px", marginRight: "30px" }}>
      <h4 className="text-left mb-4">Players List</h4>
      <input
        className="dsp-input"
        type="text"
        placeholder="Search Player By Name"
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <Row
        // className="row-mp"
        style={{ width: "100%", marginLeft: "auto", marginRight: "auto" }}
      >
        {users
          ?.filter((value) => {
            if (searchTitle === "") {
              return value;
            } else if (
              value.surName.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return value;
            }
          })
          .filter((value) => {
            if (filtered === "Poll Player") {
              return value;
            } else if (value.playerCategory === "Poll Player") {
              return value;
            }
          })
          .map((usy, index) => (
            <>
              <div>
                {searchTitle ? (
                  <div className="ch-ply">
                    <div key={usy._id}>
                      <div className="dsp-ply">
                        <Image
                          src={usy.passport}
                          fluid
                          thumbnail
                          className="img-dsp"
                        />
                        <h6>
                          {" "}
                          <Link
                            to={`/playerProfile/${usy._id}`}
                            style={{
                              textDecoration: "none",
                              marginLeft: "10px",
                              color: "black",
                            }}
                          >
                            {usy.surName} {usy.firstName}
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
              <Col key={index} sm={12} md={6} lg={4} xl={3}>
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
                          to={`/playerProfile/${usy._id}`}
                          style={{
                            textDecoration: "none",
                            color: "inherit",
                          }}
                        >
                          {usy.surName} {usy.firstName}
                        </Link>
                      </h5>
                    </div>
                  </div>
                </div>

                {/* //// */}
                <div style={{ borderRadius: "15px" }}>
                  <div className="card-body text-center">
                    {/* <div className="dsp-ply">
                      <Image
                        src={usy.passport}
                        fluid
                        thumbnail
                        className="img-dsp"
                      />
                      <h6>
                        {" "}
                        <Link
                          to={`/playerProfile/${usy._id}`}
                          style={{
                            textDecoration: "none",
                            marginLeft: "10px",
                            color: "black",
                          }}
                        >
                          {usy.surName} {usy.firstName}
                        </Link>
                      </h6>
                    </div> */}
                  </div>
                </div>
              </Col>
            </>
          ))}
      </Row>
    </div>
  );
};

export default PlayersDisplay;

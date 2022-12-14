import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
const League = () => {
  const [poster, setPoster] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "https://nafasports.herokuapp.com/api/league/"
      );
      console.log(data);
      setPoster(data);
      setLoading(false);
      setError(false);

      localStorage.setItem("PostId", JSON.stringify(data));
    };

    fetchPosts();
  }, []);

  return (
    <div className="leagues-container">
      <div style={{ marginTop: "30px" }}>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">Failed</Message>
        ) : (
          <div>
            <h6 style={{}}>League</h6>
            <hr className="hr" />
            {/* <Carousel> */}

            {poster?.leagues?.map((posty) => (
              // <div key={posty._id}>
              <div
                className="container"
                style={{
                  display: "flex",
                  marginRight: "center",
                  marginLeft: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "30px",
                  // marginTop: "50px",
                }}
              >
                <div class="col-md-3">
                  <div class="card-sl">
                    <div class="card-image">
                      <img src={posty?.image} alt="ncjj" />
                    </div>

                    <a class="card-action" href="#">
                      <i class="fa fa-heart"></i>
                    </a>
                    <div class="card-heading">{posty?.tournament}</div>
                    <div class="card-text">{posty?.leagueName}</div>
                    <div class="card-text">{posty?.abrv}</div>
                    <a href="#" class="card-button">
                      {posty?.leagueName}
                    </a>
                  </div>
                </div>
              </div>
              // </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default League;

// import axios from "axios";
import axios from "axios";
import React, { useState, useEffect } from "react";

import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  ListGroupItem,
  Container,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Message from "../components/Message";
import Loader from "../components/Loader";
import BasicExample from "../components/navbar/NavBar";
import { useTypewriter, Cursor, Typewriter } from "react-simple-typewriter";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import "../components/Partners/Partners.css";
import Footer from "../components/Footer/Footer";
const NewsDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        `https://nafasports.herokuapp.com/api/posts/${id}`
      );
      console.log(data);
      setDetails(data);
      setLoading(false);
      setError(false);

      localStorage.setItem("PostId", JSON.stringify(data));
    };

    fetchPosts();
  }, [id]);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <BasicExample />
      <div style={{ marginBottom: "40px" }}>
        <Container>
          {/* <Meta title={product.name} /> */}
          <Link className="btn btn-light my-3" to="/">
            Go Back
          </Link>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <>
              <Row>
                <Col md={6}>
                  <Image src={details?.image} alt={details?.name} fluid />
                </Col>
                <Col md={6}>
                  <ListGroup>
                    <ListGroup.Item>
                      <h3>
                        <strong>{details?.caption}</strong>{" "}
                      </h3>
                    </ListGroup.Item>
                    <ListGroup.Item>{details?.desc}</ListGroup.Item>
                    <div
                      style={{
                        Width: "20%",
                        display: "block",
                        flexDirection: "column",
                        height: "80%",

                        objectFit: "contain",
                      }}
                    >
                      {details?.content}
                      {/* <Typewriter
                          className="type-words"
                          words={[details?.content]}
                          loop={5}
                          typeSpeed={70}
                          deleteSpeed={50}
                          delaySpeed={1000}
                        /> */}
                    </div>
                    <ListGroup.Item></ListGroup.Item>
                  </ListGroup>
                </Col>
                {/* <Col md={3}>
         
            </Col> */}
              </Row>
              {/* <Card sx={{ maxWidth: 855 }}>
              <Card.Body>
                {" "}
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                 
                </Typography>
              </Card.Body>
            </Card> */}
              {/* <Card sx={{ maxWidth: 855, maxHeight: 855 }}>
              <CardActionArea>
                <CardContent>
                  <Typewriter
                    className="type-words"
                    words={[details?.content]}
                    loop={5}
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </CardContent>
              </CardActionArea>
            </Card> */}
              {/* <Row>
            <Col md={6}>
              <h2>Reviews</h2>
           
            </Col>
          </Row> */}
            </>
          )}
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default NewsDetails;

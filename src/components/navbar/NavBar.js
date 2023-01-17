import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
import Image from "react-bootstrap/Image";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { useEffect } from "react";
import nafass from "../../assets/images/nafass.png";
import ifaf from "../../assets/images/ifaf.png";
function BasicExample() {
  const navigate = useNavigate();
  // const userId = localStorage.getItem("userId");
  // useEffect(() => {
  //   if (userId) {
  //     navigate("/");
  //   }else {
  //     navigate("/");
  //   }
  // }, [navigate, userId]);
  const username = localStorage.getItem("username");
  const logout = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("name", "");
    localStorage.setItem("userId", "");
    localStorage.setItem("isAdmin", "");
    localStorage.setItem("email", "");
    localStorage.setItem("userId", "");
    localStorage.setItem("username", "");

    navigate("/");
  };
  const youtube = () => {
    window.location.href =
      "https://www.youtube.com/watch?v=z287QVrvmMQ&feature=youtu.be";
  };
  return (
    <div className="navbar-div">
      <Navbar className="main-div-navbar" expand="lg">
        <Container className="div-nav-mg">
          <Navbar.Brand href="#home">
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={nafass} alt="jed" className="nav-img-logo" />{" "}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{
              color: "whitesmoke",
              background: "whitesmoke",
            }}
          />
          <Navbar.Collapse id="basic-navbar-nav" className="toggle-div">
            <Nav className="me-auto">
              <Nav.Link
                style={{
                  color: "whitesmoke",
                }}
                className="n-linkz"
              >
                <Link
                  to="/news"
                  style={{
                    color: "whitesmoke",
                    textDecoration: "none",
                  }}
                  className="n-linkz"
                >
                  News
                </Link>
              </Nav.Link>

              <Nav.Link style={{ color: "whitesmoke" }} className="n-linkz">
                {" "}
                <Link
                  to="/livegames"
                  style={{ textDecoration: "none", color: "whitesmoke" }}
                >
                  Games
                </Link>
              </Nav.Link>
              <Nav.Link style={{ color: "whitesmoke" }} className="n-linkz">
                <Link
                  to="/leagues"
                  style={{ color: "whitesmoke", textDecoration: "none" }}
                >
                  Leagues
                </Link>
              </Nav.Link>
              <Nav.Link
                style={{ color: "whitesmoke" }}
                className="n-linkz"
                onClick={youtube}
              >
                Videos
              </Nav.Link>

              {/* <Nav.Link style={{ color: "whitesmoke" }} className="n-linkz">
                NAFL
              </Nav.Link> */}
              <Dropdown
                style={{
                  marginTop: "auto",
                  marginBottom: "auto",
                  borderColor: "none",
                  border: "none",
                }}
                className="n-linkz"
              >
                <Dropdown.Toggle
                  id="dropdown-basic"
                  className="ncff"
                  style={{
                    borderColor: "gold",
                    borderRadius: "0px",
                  }}
                >
                  NSSFFL
                </Dropdown.Toggle>

                <Dropdown.Menu className="menu-drop">
                  <Dropdown.Item>
                    {" "}
                    <Link
                      to="/players"
                      style={{
                        color: "whitesmoke",
                        textDecoration: "none",
                      }}
                    >
                      Players
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    {" "}
                    <Link
                      to="/teams"
                      style={{
                        color: "whitesmoke",
                        textDecoration: "none",
                      }}
                    >
                      {" "}
                      Teams
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item
                    style={{
                      color: "whitesmoke",
                    }}
                  >
                    Stats
                  </Dropdown.Item>
                  <Dropdown.Item
                    style={{
                      color: "whitesmoke",
                    }}
                  >
                    <Link
                      to="/Nssffltournament"
                      style={{ color: "whitesmoke", textDecoration: "none" }}
                    >
                      Standings
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
            <div className="float-div">
              <Nav className="me-auto" style={{ color: "whitesmoke" }}>
                <Nav.Link style={{ color: "whitesmoke" }} className="n-linkz">
                  <Link
                    to="/tournamentTeams"
                    style={{ color: "whitesmoke", textDecoration: "none" }}
                  >
                    League Teams
                  </Link>
                </Nav.Link>

                <Nav.Link style={{ color: "whitesmoke" }} className="n-linkz">
                  <Link
                    to="/about-us"
                    style={{ textDecoration: "none", color: "whitesmoke" }}
                  >
                    About Us
                  </Link>
                </Nav.Link>
                <Nav.Link style={{ color: "whitesmoke" }} className="n-linkz">
                  <Link
                    to="/contact-us"
                    style={{ color: "whitesmoke", textDecoration: "none" }}
                  >
                    {" "}
                    Contact Us
                  </Link>
                </Nav.Link>
                <Nav.Link style={{ color: "whitesmoke" }} className="n-linkz">
                  <Link
                    to="/nafaRules"
                    style={{ color: "whitesmoke", textDecoration: "none" }}
                  >
                    Rules
                  </Link>
                </Nav.Link>

                {localStorage.getItem("isAdmin") === "true" ? (
                  <Nav.Link
                    style={{
                      textDecoration: "none",
                      color: "whitesmoke",
                      display: "flex",
                      justifyContent: "center",
                      alignItem: "center",
                      textAlign: "cenetr",
                    }}
                    className="n-linkz"
                  >
                    <Link
                      to="/admin/true"
                      style={{
                        textDecoration: "none",
                        color: "whitesmoke",
                        display: "flex",
                        justifyContent: "center",
                        alignItem: "center",
                        textAlign: "cenetr",
                      }}
                    >
                      Admin
                    </Link>
                  </Nav.Link>
                ) : username ? (
                  <Dropdown style={{ backgroudColor: "green" }}>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      style={{ backgroudColor: "green" }}
                    >
                      <div> {localStorage.getItem("username")}</div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>Update Profile</Dropdown.Item>
                      <Dropdown.Item onClick={logout}>Log OUt</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  <Nav.Link
                    style={{
                      textDecoration: "none",
                      color: "whitesmoke",
                      display: "flex",
                      justifyContent: "center",
                      alignItem: "center",
                      textAlign: "cenetr",
                    }}
                    className="n-linkz"
                  >
                    <Link
                      to="/login"
                      style={{
                        textDecoration: "none",
                        color: "whitesmoke",
                        display: "flex",
                        justifyContent: "center",
                        alignItem: "center",
                        textAlign: "cenetr",
                      }}
                    >
                      {" "}
                      Login
                    </Link>
                  </Nav.Link>
                )}
              </Nav>
              {/* <Nav.Link style={{ color: "whitesmoke" }}>
                <img src={ifaf} alt="mmd" className="nav-img-logo2" />
              </Nav.Link> */}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default BasicExample;

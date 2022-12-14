import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./AdminDashBoard.css";
import { Card, CardActionArea, CardContent } from "@mui/material";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineUserAdd } from "react-icons/ai";
import {
  MdAdminPanelSettings,
  MdGames,
  MdFollowTheSigns,
  MdSupervisedUserCircle,
  MdTour,
} from "react-icons/md";
import { GiBabyfootPlayers, GiNewspaper, GiTeamUpgrade } from "react-icons/gi";
import { RiTable2 } from "react-icons/ri";
import { BsCameraVideo, BsFillImageFill } from "react-icons/bs";
import nafas from "../../assets/images/nafas.png";
import Collapsible from "react-collapsible";
import { ImEnvelop, ImProfile } from "react-icons/im";
import { FaUserTie } from "react-icons/fa";
import { HiUserAdd } from "react-icons/hi";
import { TbTournament } from "react-icons/tb";
import { SiMajorleaguehacking } from "react-icons/si";
import UserLIstScreen from "./AdminRoles/UserListScreen";
import UserLIst2Screen from "./AdminRoles/UserList2Screen";
import NewsAdminFetch from "./newsBlog/Fetch/NewsAdminFetch";
import AdminGetPost from "./newsBlog/AdminGetPost";
import AdminProfile from "./AdminProfile";
import AdminLayout from "./AdminLayout";
const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ backgroundColor: "#171744", color: "white" }}>
      <div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            src={nafas}
            alt="hde"
            style={{
              width: "auto",
              height: "auto",
              color: "whitesmoke",

              maxHeight: "72px",
              maxWidth: "250px",

              display: "flex",
              justifyContent: "center",
              alignItem: "center",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "20px",
            }}
          />
        </Link>
      </div>
      {/* <Toolbar /> */}

      <Divider />

      <List style={{ backgroundColor: "#171744", color: "white" }}>
        <ul className="div-ul">
          {/* <div className="home">
            <Link to="/" className="home">
              <AiFillHome />
              Home
            </Link>
          </div> */}
          <li style={{ display: "flex" }}>
            <MdAdminPanelSettings
              style={{
                fontSize: "25px",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            />
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                className="borde-drop"
                style={{
                  backgroundColor: "#171744",
                  border: "#171744",
                }}
              >
                Admin
              </Dropdown.Toggle>

              <Dropdown.Menu className="drop-d">
                <Dropdown.Item>
                  <Link to="/AdminProfile" style={{ textDecoration: "none" }}>
                    Admin Profile
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>

          <li style={{ display: "flex" }}>
            <AiOutlineUserAdd
              style={{
                fontSize: "25px",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            />
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{ backgroundColor: "#171744", border: "#171744" }}
              >
                Admin Roles
              </Dropdown.Toggle>

              <Dropdown.Menu className="drop-d">
                <Dropdown.Item>
                  {" "}
                  <Link to="/createRole" style={{ textDecoration: "none" }}>
                    Create UserRole
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  {" "}
                  <Link to="/userRole" style={{ textDecoration: "none" }}>
                    Get Roles
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  {" "}
                  <Link to="/userRole" style={{ textDecoration: "none" }}>
                    Get User
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li style={{ display: "flex" }}>
            <GiNewspaper
              style={{
                fontSize: "25px",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            />
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{ backgroundColor: "#171744", border: "#171744" }}
              >
                News Blog
              </Dropdown.Toggle>

              <Dropdown.Menu className="drop-d">
                <Dropdown.Item>
                  <Link to="/createPost" style={{ textDecoration: "none" }}>
                    Create News
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  {" "}
                  <Link to="/newsPost" style={{ textDecoration: "none" }}>
                    Fetch News Post
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  {" "}
                  <Link to="/newscatcreate" style={{ textDecoration: "none" }}>
                    Set a News Category
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li style={{ display: "flex" }}>
            <TbTournament
              style={{
                fontSize: "25px",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            />
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{ backgroundColor: "#171744", border: "#171744" }}
              >
                Tournament
              </Dropdown.Toggle>

              <Dropdown.Menu className="drop-d">
                <Dropdown.Item>
                  <Link to="/getTournament" style={{ textDecoration: "none" }}>
                    Get Tournament
                  </Link>{" "}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li style={{ display: "flex" }}>
            <SiMajorleaguehacking
              style={{
                fontSize: "25px",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            />
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{ backgroundColor: "#171744", border: "#171744" }}
              >
                League
              </Dropdown.Toggle>

              <Dropdown.Menu className="drop-d">
                <Dropdown.Item>
                  <Link to="/createLeague" style={{ textDecoration: "none" }}>
                    Create League
                  </Link>{" "}
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/getLeague" style={{ textDecoration: "none" }}>
                    Get League
                  </Link>{" "}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li style={{ display: "flex" }}>
            <MdGames
              style={{
                fontSize: "25px",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            />
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{ backgroundColor: "#171744", border: "#171744" }}
              >
                Games
              </Dropdown.Toggle>

              <Dropdown.Menu className="drop-d">
                <Dropdown.Item>
                  {" "}
                  <Link to="/postGame" style={{ textDecoration: "none" }}>
                    Post Match Fixtures
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  {" "}
                  <Link
                    to="/getGameFixtures"
                    style={{ textDecoration: "none" }}
                  >
                    Get Match fixtures
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  {" "}
                  <Link
                    to="/getGameFixtures"
                    style={{ textDecoration: "none" }}
                  >
                    Update Match
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li style={{ display: "flex" }}>
            <RiTable2
              style={{
                fontSize: "25px",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            />
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{ backgroundColor: "#171744", border: "#171744" }}
              >
                Standings
              </Dropdown.Toggle>

              <Dropdown.Menu className="drop-d">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li style={{ display: "flex" }}>
            <GiTeamUpgrade
              style={{
                fontSize: "25px",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            />
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{ backgroundColor: "#171744", border: "#171744" }}
              >
                Teams
              </Dropdown.Toggle>

              <Dropdown.Menu className="drop-d">
                <Dropdown.Item>
                  <Link to="/createTeam" style={{ textDecoration: "none" }}>
                    Create Teams
                  </Link>{" "}
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/getTeam" style={{ textDecoration: "none" }}>
                    Get Teams
                  </Link>{" "}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li style={{ display: "flex" }}>
            <MdFollowTheSigns
              style={{
                fontSize: "25px",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            />
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{ backgroundColor: "#171744", border: "#171744" }}
              >
                Officials
              </Dropdown.Toggle>

              <Dropdown.Menu className="drop-d">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li style={{ display: "flex" }}>
            <BsFillImageFill
              style={{
                fontSize: "25px",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            />
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{ backgroundColor: "#171744", border: "#171744" }}
              >
                Image Gallery
              </Dropdown.Toggle>

              <Dropdown.Menu className="drop-d">
                <Dropdown.Item>
                  <Link
                    to="/AdminImageGallery"
                    style={{ textDecoration: "none" }}
                  >
                    Create a photo
                  </Link>{" "}
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li style={{ display: "flex" }}>
            <GiBabyfootPlayers
              style={{
                fontSize: "25px",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            />
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{ backgroundColor: "#171744", border: "#171744" }}
              >
                Players
              </Dropdown.Toggle>

              <Dropdown.Menu className="drop-d">
                <Dropdown.Item>
                  {" "}
                  <Link to="/createPlayer" style={{ textDecoration: "none" }}>
                    Create Player Profile
                  </Link>{" "}
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/getPlayers" style={{ textDecoration: "none" }}>
                    Get Player Profile
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/createPlayer" style={{ textDecoration: "none" }}>
                    Update Player Profile
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li style={{ display: "flex" }}>
            <MdTour
              style={{
                fontSize: "25px",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            />
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{ backgroundColor: "#171744", border: "#171744" }}
              >
                Tournament Teams
              </Dropdown.Toggle>

              <Dropdown.Menu className="drop-d">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li style={{ display: "flex" }}>
            <MdSupervisedUserCircle
              style={{
                fontSize: "25px",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            />
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{ backgroundColor: "#171744", border: "#171744" }}
              >
                Coaches
              </Dropdown.Toggle>

              <Dropdown.Menu className="drop-d">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </List>
      <Divider />
      <List></List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <AdminLayout>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            bgcolor: "white",
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon style={{ color: "#171744" }} />
            </IconButton>
            <Typography variant="h6" noWrap component="div" color="#171744">
              My DashBoard
            </Typography>
            {/* <div className="superadmin">SuperAdmin</div> */}
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Typography paragraph>
            <AdminProfile />{" "}
          </Typography>
          {/* <Typography paragraph>
          <div className="dashboard-display">
            <div>
              <div className="class-border">
                <Typography gutterBottom variant="h5" component="div">
                  <ImProfile style={{ fontSize: "40px" }} />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Profile Menu
                </Typography>
              </div>
            </div>
            <div>
              <div className="class-border">
                <Typography gutterBottom variant="h5" component="div">
                  <HiUserAdd style={{ fontSize: "40px" }} />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Admin Profile
                </Typography>
              </div>
            </div>
            <div>
              <div className="class-border">
                <Typography gutterBottom variant="h5" component="div">
                  <FaUserTie style={{ fontSize: "40px" }} />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Administrator
                </Typography>
              </div>
            </div>
            <div>
              <div className="class-border">
                <Typography gutterBottom variant="h5" component="div">
                  <ImEnvelop style={{ fontSize: "40px" }} />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Messages
                </Typography>
              </div>
            </div>
          </div>
        </Typography>
        <Typography paragraph>
          <UserLIst2Screen />
        </Typography> */}
        </Box>
      </Box>
    </AdminLayout>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;

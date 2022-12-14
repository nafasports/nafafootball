import React from "react";
import { FaBars } from "react-icons/fa";
import download from "../../assets/images/download.png";
import "./AdminList.css";
const AdminList = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar-brand">
          <h1>
            <span className="lab la-accusoft"></span>
            Accusoft
          </h1>
        </div>
        <div className="sidebar-menu">
          <ul>
            <li>
              <a href="active">
                <span className="las la-igloo"></span>
                <span>DashBoard</span>{" "}
              </a>
            </li>
            <li>
              <a href="">
                <span className="las la-igloo"></span>
                <span>DashBoard</span>{" "}
              </a>
            </li>
            <li>
              <a href="">
                <span className="las la-igloo"></span>
                <span>My Profile</span>{" "}
              </a>
            </li>
            <li>
              <a href="">
                <span className="las la-users"></span>
                <span>News Letters</span>{" "}
              </a>
            </li>
            <li>
              <a href="">
                <span className="las la-igloo"></span>
                <span>Live Games</span>{" "}
              </a>
            </li>
            <li>
              <a href="">
                <span className="las la-igloo"></span>
                <span>Standing</span>{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* //////main content */}
      <div className="main-content">
        <header>
          <h1>
            <label for="">
              <FaBars />
            </label>
            DashBoard
          </h1>
          <div className="search-wrapper">
            <input type="search" placeholder="Searc here" />
          </div>
          <div className="user-wrapper">
            <img src={download} width="30px" height="30px" alt="ht " />
            <h4> Mr Josie </h4>
            <small>Super Admin</small>
          </div>
        </header>
        <main>
          <div className="cards">
            <div className="card-single">
              <div>
                <h1>54</h1>
                <span>Customers </span>
              </div>
              <div>
                <span className="las la-users"></span>
              </div>
            </div>
            <div className="card-single">
              <div>
                <h1>54</h1>
                <span>Customers </span>
              </div>
              <div>
                <span className="las la-users"></span>
              </div>
            </div>
            <div className="card-single">
              <div>
                <h1>54</h1>
                <span>Orders </span>
              </div>
              <div>
                <span className="las la-users"></span>
              </div>
            </div>
            <div className="card-single">
              <div>
                <h1>54</h1>
                <span>Customers </span>
              </div>
              <div>
                <span className="las la-users"></span>
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* //// */}
    </div>
  );
};

export default AdminList;

// import React from "react";
// import { Link } from "react-router-dom";

// const AdminList = () => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "space-evenly",
//         alignItem: "center",
//         textDecoration: "none",
//       }}
//     >
//       <div>
//         <Link to="/createPost">
//           <div>CreatePost</div>
//         </Link>
//       </div>
//       <div>
//         <Link to="/updatesPost">
//           <div>UpdatePost</div>
//         </Link>
//       </div>
//       <div>
//         <Link to="/deletePost">
//           <div>DeletePost</div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default AdminList;

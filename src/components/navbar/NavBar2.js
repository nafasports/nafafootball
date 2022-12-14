// import { useRef } from "react";
// import { Image } from "react-bootstrap";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";

// import "./NavBar2.css";
// import nafa from "../../assets/images/nafa.jpg";

// function Navbar2() {
//   const navRef = useRef();

//   const showNavbar = () => {
//     navRef.current.classList.toggle("responsive_nav");
//   };

//   return (
//     <header>
//       <div style={{ display: "flex", gap: "10px" }}>
//         <Link to="/" style={{ textDecoration: "none" }}>
//           <Image
//             src={nafa}
//             alt="jed"
//             style={{ width: "auto", height: "10vh", color: "whitesmoke" }}
//           />{" "}
//         </Link>
//       </div>

//       <nav ref={navRef}>
//         <a href="/#">Home</a>
//         <a href="/#">My work</a>
//         <a href="/#">Blog</a>
//         <a href="/#">About me</a>

//         <a href="/#" className="div-pst-tat">
//           Request a demo
//         </a>

//         <button className="nav-btn nav-close-btn" onClick={showNavbar}>
//           <FaTimes />
//         </button>
//       </nav>
//       <button className="nav-btn" onClick={showNavbar}>
//         <FaBars />
//       </button>
//     </header>
//   );
// }

// export default Navbar2;

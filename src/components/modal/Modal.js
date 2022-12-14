// import React, { useEffect, useState } from "react";

// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { Card, CardActionArea } from "@mui/material";
// import "./Modal.css";
// // import Slide from "react-reveal/Slide";
// import UK from "../../assets/images/UK.png";
// import { Image } from "react-bootstrap";

// const Modal = () => {
//   const [modal, setModal] = useState(false);

//   const handleClose = () => {
//     setModal(false);
//   };

//   // const click = () => {
//   //   setModal(!modal);
//   // };

//   useEffect(() => {
//     setModal(!modal);
//   }, []);
//   return (
//     // <Slide right>
//     <div className="modal-main-div">
//       <div>
//         {modal ? (
//           <div className="div-row-mod">
//             {/* </div> */}

//             <div type="button" onClick={handleClose} className="clicker">
//               <strong> X </strong>
//             </div>
//             <div className="wrapper">
//               {/* <Card sx={{ maxWidth: 800, background: "whitesmoke" }}>
//                   <CardActionArea> */}
//               <Image
//                 style={{
//                   width: "auto",
//                   height: "20vh",
//                   display: "flex",
//                   marginRight: "auto",
//                   marginLeft: "auto",
//                   //   objectFit: "cover",
//                 }}
//                 src={UK}
//                 alt="nd"
//               />
//               {/* </CardActionArea>
//                 </Card> */}
//             </div>
//           </div>
//         ) : (
//           ""
//         )}
//       </div>
//     </div>
//     // </Slide>
//   );
// };

// export default Modal;

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./Pagination.css";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {/* <Carousel> */}
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page === currentPage ? "active" : ""}
          >
            {page}
          </button>
        );
      })}
      {/* </Carousel> */}
    </div>
  );
};

export default Pagination;

// import React from "react";
// import "./Pagination.css";
// const Pagination = ({
//   totalPosts,
//   postsPerPage,
//   setCurrentPage,
//   currentPage,
// }) => {
//   let pages = [];
//   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//     pages.push(i);
//   }
//   return (
//     <div className="pagination">
//       {pages.map((page, index) => {
//         return (
//           <button
//             key={index}
//             onClick={() => setCurrentPage(page)}
//             className={page == currentPage ? "active" : ""}
//           >
//             {page}
//           </button>
//         );
//       })}
//     </div>
//   );
// };

// export default Pagination;

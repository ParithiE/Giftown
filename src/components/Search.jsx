// const Search = () => {
//   return (
//     <form action="#" className="search">
//       <div className="input-group">
//         <input
//           id="search"
//           name="search"
//           type="text"
//           className="form-control"
//           placeholder="Search"
//           required
//         />
//         <label className="visually-hidden" htmlFor="search"></label>
//         <button
//           className="btn bg-secondary text-white"
//           type="submit"
//           aria-label="Search"
//         >
//           <i className="bi bi-search" style={{color: "black"}}></i>
//         </button>
//       </div>
//     </form>
//   );
// };
// export default Search;

import React, { useState } from "react";
import "../App.css"

const Search = () => {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(true);
  };

  const handleCloseOverlay = () => {
    setShowSearch(false);
  };

  const handleBackdropClick = (e) => {
    // Close only if the backdrop (not the overlay content) is clicked
    if (e.target.classList.contains("search-backdrop")) {
      handleCloseOverlay();
    }
  };

  return (
    <>
      {/* Search Icon */}
      {!showSearch && (
        // <button
        //   className="btn bg-transparent p-0"
        //   onClick={handleSearchClick}
        //   aria-label="Open Search"
        // >
        //   <i className="bi bi-search" style={{ fontSize: "20px", color: "red" }}></i>
        // </button>

         <button
              className="btn btn-primary"
              type="submit"
              aria-label="Search"
              onClick={handleSearchClick}
            >
              <i className="bi bi-search .text-secondary"></i> Search
            </button>
      )}

      {/* Overlay and Backdrop */}
      {showSearch && (
        <div
          className="search-backdrop position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1050,
          }}
          onClick={handleBackdropClick}
        >
          {/* Compact Search Box */}
          <div
            className="search-overlay bg-white shadow rounded p-4 position-relative"
            style={{
              width: "90%",
              maxWidth: "400px",
            }}
          >
            <form
              action="#"
              className="search-form d-flex align-items-center"
              style={{ gap: "10px" }}
            >
              <input
                id="search"
                name="search"
                type="text"
                className="form-control"
                placeholder="Search"
                required
                autoFocus
              />
              <label className="visually-hidden" htmlFor="search"></label>
              <button
                className="btn bg-secondary text-white"
                type="submit"
                aria-label="Search"
              >
                <i className="bi bi-search" style={{ color: "black" }}></i>
              </button>
            </form>
            <button
              className="btn-close position-absolute top-0 end-0"
              aria-label="Close"
              onClick={handleCloseOverlay}
            ></button>
          </div>
        </div>
      )}
    </>
  );
};

export default Search;

// import { lazy } from "react";
// import { Link } from "react-router-dom";
// import "../App.css"

// const Search = lazy(() => import("./Search"));

// const Header = () => {
//   return (
//     <header className="p-2 border-bottom bg-primary">
//       <div className="container-fluid">
//         <div className="row g-3 align-items-center">
//           <div className="col-md-3 text-center">
//             <Link to="/">
//               <img alt="logo" src="../../images/gtlogo.png" className="img-fluid" style={{height: "60px"}}/>
//             </Link>
//           </div>
//           <div className="col-md-5">
//             <Search />
//           </div>
//           <div className="col-md-4">
//             <div className="position-relative d-inline me-3">
//               <Link to="/cart" className="btn bg-secondary">
//                 <i className="bi bi-cart3"></i>
//                 <div className="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-circle">
//                   2
//                 </div>
//               </Link>
//             </div>
//             <div className="btn-group">
//               <button
//                 type="button"
//                 className="btn bg-secondary rounded-circle border me-3"
//                 data-toggle="dropdown"
//                 aria-expanded="false"
//                 aria-label="Profile"
//                 data-bs-toggle="dropdown"
//               >
//                 <i className="bi bi-person-fill text-dark"></i>
//               </button>
//               <ul className="dropdown-menu">
//                 <li>
//                   <Link className="dropdown-item" to="/account/profile">
//                     <i className="bi bi-person-square"></i> My Profile
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="dropdown-item" to="/star/zone">
//                     <i className="bi bi-star-fill text-warning"></i> Star Zone
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="dropdown-item" to="/account/orders">
//                     <i className="bi bi-list-check text-primary"></i> Orders
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="dropdown-item" to="/account/wishlist">
//                     <i className="bi bi-heart-fill text-danger"></i> Wishlist
//                   </Link>
//                 </li>
//                 <li>
//                   <hr className="dropdown-divider" />
//                 </li>
//                 <li>
//                   <Link className="dropdown-item" to="/account/notification">
//                     <i className="bi bi-bell-fill text-primary"></i>
//                     Notification
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="dropdown-item" to="/support">
//                     <i className="bi bi-info-circle-fill text-success"></i>
//                     Support
//                   </Link>
//                 </li>
//                 <li>
//                   <hr className="dropdown-divider" />
//                 </li>
//                 <li>
//                   <Link className="dropdown-item" to="/">
//                     <i className="bi bi-door-closed-fill text-danger"></i>
//                     Logout
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             {/* <Link to="/account/signin">Sign In</Link> |{" "}
//               <Link to="/account/signup"> Sign Up</Link> */}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };
// export default Header;


// import { lazy } from "react";
// import { Link } from "react-router-dom";
// import "../App.css";

// const Search = lazy(() => import("./Search"));
// const Header = () => {
//   return (
//     <header className="p-2 border-bottom bg-primary">
//       <div className="container-fluid">
//         <div className="row g-3 align-items-center">
//           <div className="col-12 d-flex justify-content-between d-md-none">
//             <Link to="/cart" className="btn bg-secondary position-relative">
//               <i className="bi bi-cart3"></i>
//               <span className="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-circle">
//                 2
//               </span>
//             </Link>
//             <Link to="/">
//               <img alt="logo" src="../../images/gtlogo.png" className="img-fluid" style={{ height: "60px" }} />
//             </Link>
//             <button
//               type="button"
//               className="btn bg-secondary rounded-circle border"
//               aria-expanded="false"
//               aria-label="Profile"
//               data-bs-toggle="dropdown"
//             >
//               <i className="bi bi-person-fill text-dark"></i>
//             </button>
//           </div>

//           <div className="col-12 col-md-3 text-center d-none d-md-block">
//             <Link to="/">
//               <img alt="logo" src="../../images/gtlogo.png" className="img-fluid" style={{ height: "60px" }} />
//             </Link>
//           </div>

//           <div className="col-12 col-md-5 mt-3 mt-md-0">
//             <Search />
//           </div>

//           <div className="col-12 col-md-4 text-end mt-3 mt-md-0 d-none d-md-flex justify-content-end">
//             <div className="d-inline position-relative me-3">
//               <Link to="/cart" className="btn bg-secondary position-relative">
//                 <i className="bi bi-cart3"></i>
//                 <span className="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-circle">
//                   2
//                 </span>
//               </Link>
//             </div>
//             <div className="btn-group">
//               <button
//                 type="button"
//                 className="btn bg-secondary rounded-circle border"
//                 aria-expanded="false"
//                 aria-label="Profile"
//                 data-bs-toggle="dropdown"
//               >
//                 <i className="bi bi-person-fill text-dark"></i>
//               </button>
//               <ul className="dropdown-menu dropdown-menu-end">
//                 <li>
//                   <Link className="dropdown-item" to="/account/profile">
//                     <i className="bi bi-person-square"></i> My Profile
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="dropdown-item" to="/star/zone">
//                     <i className="bi bi-star-fill text-warning"></i> Star Zone
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="dropdown-item" to="/account/orders">
//                     <i className="bi bi-list-check text-primary"></i> Orders
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="dropdown-item" to="/account/wishlist">
//                     <i className="bi bi-heart-fill text-danger"></i> Wishlist
//                   </Link>
//                 </li>
//                 <li>
//                   <hr className="dropdown-divider" />
//                 </li>
//                 <li>
//                   <Link className="dropdown-item" to="/account/notification">
//                     <i className="bi bi-bell-fill text-primary"></i> Notification
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="dropdown-item" to="/support">
//                     <i className="bi bi-info-circle-fill text-success"></i> Support
//                   </Link>
//                 </li>
//                 <li>
//                   <hr className="dropdown-divider" />
//                 </li>
//                 <li>
//                   <Link className="dropdown-item" to="/">
//                     <i className="bi bi-door-closed-fill text-danger"></i> Logout
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;



import { lazy } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { navLinks, supportLinks } from "../data/links";
import TopMenu from "./TopMenu";

const Search = lazy(() => import("./Search"));

const Header = () => {
  return (
    <div>
      <header className="bg-primary border-bottom position-relative">
        {/* Main Header */}
        <div className="container-fluid py-2" style={{ width: "80%" }}>
          <div className="row align-items-baseline g-3">
            {/* Left Section: Logo */}
            <div className="col-12 col-md-3 text-center text-md-start">
              <Link to="/">
                <img alt="logo" src="../../images/gtlogo.png" className="img-fluid" style={{ height: "60px" }} />
              </Link>
            </div>

            {/* Center Section: Search Bar */}
            <div className="col-12 col-md-6 mt-3 mt-md-0">
              <Search />
            </div>

            {/* Right Section: User and Cart */}
            <div className="col-12 col-md-3 text-end mt-3 mt-md-0 d-flex justify-content-end justify-content-md-evenly">
              <div className="position-relative me-3">
                <Link to="/cart" className="text-secondary position-relative">
                  <span style={{ fontSize: "xx-large" }}>
                    <i class="bi bi-cart3"></i>
                    <span className="position-absolute fs-6 translate-half badge bg-danger rounded-circle">
                      2
                    </span>
                  </span>
                </Link>
              </div>
              <div className="">
                <span
                  // type="button"
                  style={{ fontSize: "xx-large" }}
                  className="text-secondary"
                  aria-expanded="false"
                  aria-label="Profile"
                  data-bs-toggle="dropdown"
                >
                  <i className="bi bi-person-fill"></i>
                </span>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <Link className="dropdown-item" to="/account/profile">
                      <i className="bi bi-person-square"></i> My Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/star/zone">
                      <i className="bi bi-star-fill text-warning"></i> Star Zone
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/account/orders">
                      <i className="bi bi-list-check text-primary"></i> Orders
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/account/wishlist">
                      <i className="bi bi-heart-fill text-danger"></i> Wishlist
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/account/notification">
                      <i className="bi bi-bell-fill text-primary"></i> Notification
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/support">
                      <i className="bi bi-info-circle-fill text-success"></i> Support
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      <i className="bi bi-door-closed-fill text-danger"></i> Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <TopMenu />
    </div>
  );
};

export default Header;


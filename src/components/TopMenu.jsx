import { Link } from "react-router-dom";
import { navItems } from "../data/links";
import React, { useState } from 'react';
import '../App.css'

const TopMenu = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    
    <div className="\">
    <nav className="navbar navbar-expand-lg bg-primary-v1 p-0">
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">
          E-Commerce
        </Link> */}
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            {navItems.map((item, index) => (
                <li
                    className="nav-item"
                    key={index}
                    onMouseEnter={() => setHoveredCategory(item.text)}
                    onMouseLeave={() => setHoveredCategory(null)}
                >
                    <Link className="nav-link text-secondary" to={item.link}>
                        {item.text}
                    </Link>
                    {hoveredCategory === item.text && item.subCategories && (
                        <ul className="nav-dropdown-menu">
                            {item.subCategories.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                    <Link className="nav-dropdown-item" to={subItem.link}>
                                        {subItem.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
            {/* <li className="nav-item dropdown">
              <button
                className="btn nav-link dropdown-toggle fw-bold"
                id="navbarDropdown"
                data-toggle="dropdown"
                aria-expanded="false"
                data-bs-toggle="dropdown"
              >
                All Pages
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/account/signin">
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/account/signup">
                    Sign Up
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/checkout">
                    Checkout Page
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/contact-us">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/blog/detail">
                    Blog Detail
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/fsafasf">
                    404 Page Not Found
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/500">
                    500 Internal Server Error
                  </Link>
                </li>
              </ul>
            </li> */}
            {/* {navItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <Link className={`nav-link text-secondary` } to={item.link}>
                  {item.text}
                </Link>
              </li>))}
          </ul> */}
        </div>
      </div>
    </nav>
    </div>
  );
};

export default TopMenu;

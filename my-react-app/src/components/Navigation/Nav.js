import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Navigation/Nav.css";
const Nav = () => {
  // sets the variable menuIsVisible to a false state
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  // updates menuIsVisible
  const toggleVisibility = () => setMenuIsVisible(!menuIsVisible);
  return (
    <div className="Nav">
      <header>
        <h1>
          Ariel's Beauty
          {/* toggles visibility between hamburger icon and X icon */}
          <span onClick={toggleVisibility}>
          {/* Hamburger icon is set to false/true based on conditions */}
            {!menuIsVisible && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            )}
            {/* X icon is set to false/true based on conditions*/}
            {menuIsVisible && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            )}
          </span>
        </h1>
        <div>
        {/* opens/closes navigation base on condition */}
          {menuIsVisible && (
            <nav onClick={toggleVisibility}>
              <ul>
                <li>
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="nav-link">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="nav-link">
                    About Us
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>
    </div>
  );
};

export default Nav;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Navigation/Nav.css";
const Nav = () => {
  const [navVisible, setNavVisible] = useState(false);
  const menu = () => {
    setNavVisible(!navVisible)
    let x = document.querySelector(".menuX")
    let hamburger = document.querySelector(".hamburger")
    if(!navVisible){
      x.style.display = 'inline'
      hamburger.style.display = 'none'
    }else{
      x.style.display = "none"
      hamburger.style.display = 'inline'
    }
  };
  return (
    <div className="Nav">
      <header>
        <h1>
          Ariel's Beauty
          <span onClick={menu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-list hamburger"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-x-lg menuX"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </span>
        </h1>

        <div className={`element ${navVisible ? "visible" : "hidden"}`}>
          <nav>
            <ul onClick={menu}>
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
        </div>
      </header>
    </div>
  );
};

export default Nav;

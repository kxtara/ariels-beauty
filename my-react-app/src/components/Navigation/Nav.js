import React, { useState } from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  // sets the variable menuIsVisible to a false state
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  // updates menuIsVisible
  const toggleVisibility = () => setMenuIsVisible(!menuIsVisible);
  return (
    <div className="Nav">
      <header className="fixed w-full -mt-[.4rem] pb-[.6rem] z-[1]">
        <h1 className="bg-[#f8f8f8] pt-[.7rem] pr-0 pb-[.5rem] pl-[.7rem] font-['Lily_Script_One'] text-[1.5625rem]">
          Ariel's Beauty
          {/* toggles visibility between hamburger icon and X icon */}
          <span className="mt-[.3rem] mr-6 ml-0 mb-0 float-right text-[#6c705f]" onClick={toggleVisibility}>
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
        <div className="bg-white -mt-2">
        {/* opens/closes navigation base on condition */}
          {menuIsVisible && (
            <nav onClick={toggleVisibility}>
              <ul className="mt-2 mx-[auto] mb-[auto] list-none bg-[#6c705fe6] text-center text-[2rem] font-['Katibeh'] font-semibold tracking-[3px] p-0 shadow-[0px_2px_3px_1px_rgba(0,0,0,.2)]">
                <li className="pt-[7px]">
                  <Link to="/" className="text-[#f8f8f8] hover:text-[#272525]">
                    Home
                  </Link>
                </li>
                <li className="pt-[7px]">
                  <Link to="/services" className="text-[#f8f8f8] hover:text-[#272525]">
                    Services
                  </Link>
                </li>
                <li className="pt-[7px]">
                  <Link to="/contact" className="text-[#f8f8f8] hover:text-[#272525]">
                    Contact
                  </Link>
                </li>
                <li className="pt-[7px]">
                  <Link to="/about" className="text-[#f8f8f8] hover:text-[#272525]">
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

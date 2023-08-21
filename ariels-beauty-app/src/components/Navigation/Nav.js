import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
const Nav = () => {
  // Sets the variable menuIsVisible to a false state
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  // Updates menuIsVisible
  const toggleVisibility = () => setMenuIsVisible(!menuIsVisible);
  return (
    <div className="Nav">
      <header className="fixed w-full -mt-[.4rem] pb-[.6rem] z-[1]">
        <h1 className="bg-[#f8f8f8] pt-[.7rem] pr-0 pb-[.5rem] pl-[.7rem] font-['Lily_Script_One'] text-[1.5625rem]">
          Ariel's Beauty
          {/* Toggles visibility between hamburger icon and X icon */}
          <span
            className="mr-6 mt-1 float-right text-[#6c705f]"
            onClick={toggleVisibility}
          >
            {/* Hamburger icon is set to false/true based on conditions */}
            {!menuIsVisible && (
              <i className="bi bi-list w-8 cursor-pointer"></i>
            )}
            {/* X icon is set to false/true based on conditions*/}
            {menuIsVisible && <i className="bi bi-x-lg w-8 cursor-pointer"></i>}
          </span>
        </h1>
        <div
          onClick={toggleVisibility}
          className={menuIsVisible ? "fadeIn" : "fadeOut"}
        >
          {/* Opens/closes navigation based on condition */}
          {menuIsVisible && (
            <nav className="bg-[#6c705f] -mt-2">
              <ul className="mt-2 mx-[auto] mb-[auto] list-none text-center text-[2rem] font-['Katibeh'] font-semibold tracking-[3px] p-0 shadow-[0px_2px_3px_1px_rgba(0,0,0,.2)]">
                <li className="pt-[7px]">
                  <Link to="/" className="text-[#f8f8f8] hover:text-[#272525]">
                    Home
                  </Link>
                </li>
                <li className="pt-[7px]">
                  <Link
                    to="/services"
                    className="text-[#f8f8f8] hover:text-[#272525]"
                  >
                    Services
                  </Link>
                </li>
                <li className="pt-[7px]">
                  <Link
                    to="/contact"
                    className="text-[#f8f8f8] hover:text-[#272525]"
                  >
                    Contact
                  </Link>
                </li>
                <li className="pt-[7px]">
                  <Link
                    to="/about"
                    className="text-[#f8f8f8] hover:text-[#272525]"
                  >
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

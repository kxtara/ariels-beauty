import { useState } from "react";
import Navigation from "./Navigation";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
const Header = () => {
  // Sets the variable menuIsVisible to a false state
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  // Updates menuIsVisible
  const toggleVisibility = () => setMenuIsVisible(!menuIsVisible);

  return (
      <header className="fixed w-full -mt-[.4rem] pb-[.6rem] z-[1]">
        <h1 className="bg-[#f8f8f8] pt-[.7rem] pr-0 pb-[.5rem] pl-[.7rem] font-['Lily_Script_One'] text-[1.5625rem]">
        <Link
        to='/'
        >
          Ariel's Beauty
        </Link>
          
        </h1>
        {/* Toggles visibility between hamburger icon and X icon */}
          <span
            className="mr-6 -mt-10 float-right text-[#828b67]"
            onClick={toggleVisibility}
          >
            {/* Displays the hamburger icon if menuIsVisibile is true otherwise X icon */}
            {!menuIsVisible ? (
              <i className="bi bi-list cursor-pointer text-2xl"></i>
            ) : (
              <i className="bi bi-x-lg w-[10rem] cursor-pointer text-2xl"></i>
            )}
          </span>
        {/* Hamburger Menu */}
        <Navigation toggleVisibility={toggleVisibility} menuIsVisible={menuIsVisible}/>
      </header>
  );
};

export default Header;
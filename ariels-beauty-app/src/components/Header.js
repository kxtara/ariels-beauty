import { useState } from "react";
import Navigation from "./Navigation";
import "bootstrap-icons/font/bootstrap-icons.css";
const Header = () => {
  // Sets the variable menuIsVisible to a false state
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  // Updates menuIsVisible
  const toggleVisibility = () => setMenuIsVisible(!menuIsVisible);
  return (
      <header className="fixed w-full -mt-[.4rem] pb-[.6rem] z-[1]">
        <h1 className="bg-[#f8f8f8] pt-[.7rem] pr-0 pb-[.5rem] pl-[.7rem] font-['Lily_Script_One'] text-[1.5625rem]">
          Ariel's Beauty
          {/* Toggles visibility between hamburger icon and X icon */}
          <span
            className="mr-6 mt-1 float-right text-[#6c705f]"
            onClick={toggleVisibility}
          >
            {/* Displays the hamburger icon if menuIsVisibile is true otherwise X icon */}
            {!menuIsVisible ? (
              <i className="bi bi-list w-8 cursor-pointer"></i>
            ) : (
              <i className="bi bi-x-lg w-8 cursor-pointer"></i>
            )}
          </span>
        </h1>
        <Navigation toggleVisibility={toggleVisibility} menuIsVisible={menuIsVisible}/>
      </header>
  );
};

export default Header;
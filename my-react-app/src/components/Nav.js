import React,{useState} from "react";
import {Link} from 'react-router-dom'
import "./Nav.css";


const Nav = () => {
  const [navVisible,setNavVisible] = useState(false)
  function menu(){
    setNavVisible(!navVisible)
}
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
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </span>
        </h1>

        <div className={`element ${navVisible ? 'visible' : 'hidden'}`}>
        <nav>
          <ul>
            <li><Link to='/' className="nav-link">Home</Link></li>
            <li><Link to='/services' className="nav-link">Services</Link></li>
            <li><Link to='/contact' className="nav-link">Contact</Link></li>
            <li><Link to='/about' className="nav-link">About Us</Link></li>
          </ul>
        </nav>
        </div>
        {/* } */}
        
      </header>
    </div>
  );
};

export default Nav;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import Nav from "../components/Navigation/Nav";
import More from "../pages/More";
import Error from "../pages/404";
function Menu() {
  return (
      <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/more" element={<More/>}/>
          <Route path="*" element={<Error />} />
        </Routes>
        </div>
      </Router>
  );
}
export default Menu;
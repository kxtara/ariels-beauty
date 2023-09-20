import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import Header from "../components/Header"
import Footer from "../components/Footer";
import Booking from "../pages/Booking";
import Error from "../pages/404";
function AppRouter() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<Booking/>}/>
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
  );
}
export default AppRouter;
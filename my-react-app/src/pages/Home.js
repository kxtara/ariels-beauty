import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Subtitle from "../components/Subtitle/Subtitle";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import braidedpony from "../assets/images/braidedpony.jpg";
import heroImage from "../assets/images/hero.jpg";
function Home() {
  return (
    <div className="Home">
      <div className="hero-div">
        <img
          className="hero"
          src={heroImage}
          alt="Two ladies with their eyes closed"
        />
        <h3 className="hero-text">
          Celebrating the beauty of women, one strand at a time.
          <Link className="cta-link" to="/services">
            Our Services
          </Link>
        </h3>
      </div>
      <Subtitle title="Featured Styles" />
      <Card
        image={braidedpony}
        imageAlt="Woman with braided ponytail"
        title="Braided Ponytail"
        description="Our in-house expert in braids will perfect that ponytail to
        Pinterest-worthy levels."
      />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;

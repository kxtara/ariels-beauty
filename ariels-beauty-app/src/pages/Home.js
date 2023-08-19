import React from "react";
import { Link } from "react-router-dom";
import Subtitle from "../components/Subtitle/Subtitle";
import Card from "../components/Card/Card";
import braidedpony from "../assets/images/braidedpony.jpg";
import heroImage from "../assets/images/hero.jpg";
function Home() {
  return (
    <div className="w-full">
      <div>
        <img
          className="w-full z-[-1]"
          src={heroImage}
          alt="Two ladies with their eyes closed"
        />
        <div>
          
        </div>
        {/* <h3 className="absolute top-20 left-[30%] m-0 text-lg font-['Kameron'] font-bold text-right w-[15rem] text-[#f8f8f8d9]">
          Celebrating the beauty of women, one strand at a time.
          <Link className="mt-2 mr-0 ml-24 mb-0 block font-black font-['inter'] text-center w-36 p-[.4rem] bg-[#545842c2] rounded-[12px] hover:text-[#272525]" to="/services">
            Our Services
          </Link>
        </h3> */}
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

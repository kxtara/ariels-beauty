import React from "react";
import { Link } from "react-router-dom";
import Subtitle from "../components/Subtitle/Subtitle";
import heroImage from "../assets/images/hero.jpg";
import ServiceCards from "../components/ServiceCards/ServiceCards";
import { featured } from "../components/ServiceCards/ServicesInfo";
import { useState } from "react";
function Home() {
  // will change display if more/X is clicked
  const [showMore, setShowMore] = useState(false);
  
  return (
    <div className="flex flex-col">
      <div className="relative">
        <img
          className="w-full z-[-1]"
          src={heroImage}
          alt="Two ladies with their eyes closed"
        />
        <h3 className="absolute top-1/3 right-8 text-lg font-['Kameron'] font-bold text-right w-[15rem] text-[#f8f8f8d9]">
          Celebrating the beauty of women, one strand at a time.
          <Link
            className="mt-2 ml-24 block font-black font-['inter'] text-center w-36 p-[.4rem] bg-[#545842c2] rounded-2xl hover:text-[#272525]"
            to="/services"
          >
            Our Services
          </Link>
        </h3>
      </div>
      <Subtitle title="Featured Styles" />
      <ServiceCards service={featured} showMore={showMore} setShowMore={setShowMore}/>
    </div>
  );
}

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import Subtitle from "../components/Subtitle/Subtitle";
import Card from "../components/Card/Card";
import braidedpony from "../assets/images/braidedpony.jpg";
import heroImage from "../assets/images/hero.jpg";
function Home() {
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
      <Card
        image={braidedpony}
        imageAlt="Woman with braided ponytail"
        title="Braided Ponytail"
        description="Our in-house expert in braids will perfect that ponytail to
        Pinterest-worthy levels."
        price = '$120'
        detailedDescription = 'Our braided ponytail offers a simple yet elegant style that suits various occasions. For more intricate and elaborate designs, our pricing may vary depending on the level of intricacy and the additional time involved.'
      />
    </div>
  );
}

export default Home;

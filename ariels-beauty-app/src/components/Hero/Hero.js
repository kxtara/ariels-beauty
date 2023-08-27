import React from "react";
import heroImage from "../../assets/images/hero.jpg";

function Hero(props) {
  const { title , className } = props
  return (
    <div className="relative flex items-center">
      <img
        className="w-full z-[-1] h-[16.9rem]"
        src={heroImage}
        alt="Two ladies with their eyes closed"
      />
      <h3 className={`absolute font-['Kameron'] font-bold w-[15rem] text-[#f8f8f8d9] ${className}`}>
        {title}
      </h3>
    </div>
  );
}
export default Hero;
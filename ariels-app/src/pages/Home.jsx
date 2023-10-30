import React, {useState} from "react";
import { Link } from "react-router-dom";
import Subtitle from "../components/Subtitle";
import ServiceCards from "../components/ServiceCards";
import Hero from "../components/Hero";
function Home() {
  // will change display if more/X is clicked
  const [showMore, setShowMore] = useState(false);
  return (
    <>
    <main className="flex flex-col">
      <Hero
        title="Celebrating the beauty of women, one strand at a time."
        className="absolute top-1/3 right-8 text-lg font-['Kameron'] font-bold text-right w-[15rem] text-[#f8f8f8d9]"
      />
      <Link
        className="mt-2 ml-24 block font-black font-['inter'] text-center w-36 p-[.4rem] bg-[#545842c2] rounded-2xl hover:text-[#272525] absolute top-44 right-8 text-lg text-[#f8f8f8d9]"
        to="/services"
      >
        Our Services
      </Link>
      <Subtitle title="Featured Styles" />
      <ServiceCards
        service='Featured'
        showMore={showMore}
        setShowMore={setShowMore}
      />
    </main>
    </>
  );
}

export default Home;

import Hero from "../components/Hero";
import Subtitle from "../components/Subtitle";
import Braid from "../assets/images/boxbraid.jpg";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import twitter from "../assets/images/twitter.png";

function About() {
  return (
    <>
      <Hero
        className="left-1/3 top-[45%]"
        title="Unleash your beauty potential. Welcome to  Ariel’s Beauty."
      />

      <Subtitle title="About" />
      <div className="flex justify-center">
        <img src={Braid} className="w-[8.3rem]" alt="Image of owner" />
        <p className="font-['IM_FELL_Great_Primer_SC'] text-center flex flex-col border-2 w-[11rem] border-[#6C705F] h-[9rem] mt-7 -ml-3 bg-white">
          <span className="">Ariel Bushun</span>
          <span>CEO</span>
          Ariel started out doing hair in her moms house at the age of 16.
        </p>
      </div>
      <Subtitle title="Follow" />
      <div className="font-['Grenze']">
        <span className="flex mb-7 justify-center">
          <img src={facebook} alt="facebook logo" className="w-8" />
          <a href="#" className="mt-1 ml-3 text-lg font-bold">
            @arielsbeauty
          </a>
        </span>
        <span className="flex mb-7 justify-center">
          <img src={twitter} alt="twitter logo" className="w-8" />
          <a href="#" className="mt-1 ml-3 text-lg font-bold">
            @arielsbeauty
          </a>
        </span>
        <span className="flex mb-7 justify-center">
          <img src={instagram} alt="instagram logo" className="w-8" />
          <a href="#" className="mt-1 ml-3 text-lg font-bold">
            @arielsbeauty
          </a>
        </span>
      </div>
    </>
  );
}

export default About;

import heroImage from "../assets/images/hero.jpg";

export default function Hero({title,className}) {
  return (
    <div className="relative flex items-center">
      <img
        className="w-full z-[-1] h-[16.9rem]"
        src={heroImage}
        alt="Two ladies with their eyes closed"
      />
      <h3 className={`absolute font-['Kameron'] font-bold w-[15rem] text-[#f8f8f8d9] ${className} md:text-2xl md:w-[18rem]`}>
        {title}
      </h3>
    </div>
  );
}
// Import the necessary dependencies.
import { useSearchParams } from "react-router-dom";
import Hero from "../components/Hero";
import Calendar from "../components/Calendar";

// Define the Booking component.
export default function Booking() {
  // Retrieve search parameters from the URL.
  const [searchParams] = useSearchParams();

  // Extract data from the search parameters.
  const { title, price, image, imageAlt} = Object.fromEntries(
    searchParams.entries()
  );


  // Calculate the deposit amount based on the price.
  const BookedDeposit = () => {
    if (typeof price !== "number") {
      let regex = /[0-9]/g;
      let match = parseInt(price.match(regex).join(""));
      return Math.floor(match * 0.25) < 15
        ? ""
        : `Deposit: $${Math.floor(match * 0.25)}`;
    }
  };

  // TODO Terms (consider adding terms to firebase database)
  const termsAndServices = () => {
    return title !== 'Wash' ? 'Please arrive on time with clean,washed hair for the best results. We understand that unexpected delays can occur, so there is a 15-minute grace period for late arrivals.' : 'We understand that unexpected delays can occur, so there is a 15-minute grace period for late arrivals.'
  }
  // Render the Booking component.
  return (
    <>
      {/* Display a Hero component with a title */}
      <Hero
        title="Celebrating the beauty of women, one strand at a time."
        className='absolute top-[45%] right-8 font-bold text-right w-[15rem] text-[#f8f8f8d9] font-["Kameron"] text-xl'
      />
      <div className="flex flex-col w-[15rem] m-auto mt-8 md:flex-row md:m-0 md:ml-24 md:mt-20 md:w-[22rem]">
        {/* Display the title */}
        <h2 className="font-semibold uppercase text-lg text-center md:text-2xl  md:text-left md:absolute md:left-[30rem] md:mt-11">{title}</h2>
        {/* Display the product image */}
        <img className="w-[100%] mt-5" src={image} alt={imageAlt} />
        <div className="md:ml-9 md:mt-24">
          <h3 className="mt-4 mb-3 md:absolute font-semibold md:text-lg md:-mt-[.2rem]">
            {/* Display the deposit amount */}
            {BookedDeposit()}
          </h3>
          <p className="font-thin text-xs md:absolute md:mt-12 md:text-base md:pr-16">
            {/* Display "Terms:" */}
            <span className="font-semibold mt-2 pr-2">Terms:</span>
            {termsAndServices()}
          </p>
          </div>
      </div>
      <div className="">
        <h3 className="text-xs text-center mt-10 font-bold -mb-2 md:text-base">Choose date and time here:</h3>
      <Calendar deposit={BookedDeposit}/>
      </div>
      
    </>
  );
}

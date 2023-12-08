import Hero from "../components/Hero";
import Calendar from "../components/Calendar";
import { useBookingContext } from "../components/BookingContext";
// Define the Booking component.
export default function Booking() {
  const {bookingData} = useBookingContext()
  const {title,id,price,image,imageAlt,serviceType} = bookingData

  // Calculate the deposit amount based on the price.
  const BookedDeposit = () => {
    if (typeof price !== "number") {
      let regex = /[0-9]/g;
      let match = price.match(regex);
      // Check if there is a match before attempting to join and perform calculations
    if (match) {
      let numberValue = parseInt(match.join(""));
      return Math.floor(numberValue * 0.25) < 15
        ? ""
        : `Deposit: $${Math.floor(numberValue * 0.25)}`;
    } else {
      return ""; // Handle the case where there is no match
    }
    }
  };

  // Terms
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
      <div className="flex flex-col w-[15rem] m-auto mt-8">
        {/* Display the title */}
        <h2 className="font-semibold uppercase text-lg text-center">{title}</h2>
        {/* Display the product image */}
        <img className="w-[100%] mt-5" src={image} alt={imageAlt} />
          <h3 className="mt-4">
            {/* Display the deposit amount */}
            <span className="font-semibold">{BookedDeposit()}</span>
          </h3>
          <p className="font-thin text-xs mt-2">
            {/* Display "Terms:" */}
            <span className="font-semibold mt-2 pr-2">Terms:</span>
            {termsAndServices()}
          </p>
      </div>
      <h3 className="text-xs text-center mt-10 font-bold -mb-2">Choose date and time here:</h3>
      <Calendar deposit={BookedDeposit} serviceId={id} serviceType={serviceType}/>
    </>
  );
}

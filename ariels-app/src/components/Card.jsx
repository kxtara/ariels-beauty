import { useState } from "react";
import { Link } from "react-router-dom";
import { useBookingContext } from "./BookingContext";
function Card({
  image,
  imageAlt,
  title,
  description,
  detailedDescription,
  price,
  id,
  serviceType
}) {
  const [showMore, setShowMore] = useState(false);
  const handleVisibility = () => setShowMore(!showMore);
  const {setData} = useBookingContext()
  return (
    <div className="bg-[#fffdfd] border-[1px] border-[rgba(30, 30, 30, 43%)] rounded-[0.75rem] flex flex-col  justify-center items-center w-[19rem] mx-[auto] mt-[auto] mb-8 font-['inter'] md:w-[25rem]">
      <img
        className="w-[85%] mt-4 rounded-[0.3125rem]"
        src={image}
        alt={imageAlt}
      />
      <h4 className="mt-4 w-[84%] font-bold uppercase md:text-lg">{title}</h4>

      {/* Display the price only when showMore is true */}
      {showMore && <h3 className="w-[84%] font-bold">{price}</h3>}

      {/* Display the detailedDescrition only when showMore is true */}
      <p className="mt-4 w-[84%] pl-1 font-medium md:text-lg">
        {!showMore ? description : detailedDescription}
      </p>

      {/* Changes the state of showMore */}
      {!showMore ? (
        <button
          onClick={handleVisibility}
          className="text-[#f8f8f8] bg-[rgb(108,112,95)] rounded-[15px] mx-0 mt-8 mb-[1.2rem] font-bold text-xl px-12 py-[.4rem]"
        >
          More
        </button>
      ) : (
        <div className="mt-8 mb-[1.2rem]">
          {/* Link takes you to booking page & passes some props */}
          <Link
            className="text-[#f8f8f8] bg-[#6C705F] rounded-[15px]   font-bold text-xl px-12 py-[.4rem]"
            to="/booking"
            onClick={() => setData(title,price,image,imageAlt,id,serviceType)}
          >
            Book Now
          </Link>
          {/* Exit button to switch back to original display */}
          <button
            onClick={handleVisibility}
            className="rounded-[15px] font-bold text-base text-red-600 px-[.4rem] ml-3 cursor-pointer bg-transparent border-2 border-red-600 relative -top-[.1rem]"
          >
            X
          </button>
        </div>
      )}
    </div>
  );
}
export default Card;

import { Link } from "react-router-dom";
export default function Confirmation({ isPopupOpen, setPopupOpen,booking }) {
    const handleClick = () => setPopupOpen(false);
    
    return (
      // displays a popup after a form is clicked
      isPopupOpen && (
        <div className="w-full h-[120%] flex flex-col items-center justify-center absolute  top-0 z-10 bg-[#ffffff85]">
        <div
          className='bg-[#4D4D4D] text-white z-10 py-11 top-1/2 left-[10%]'
        >
          <h2 className="text-xs">
            <span className="text-[#dee6c3] text-base">Confirmed booking: </span>{booking}
            <span
              className="text-xs"
              onClick={handleClick}
            >
              &#10005;
            </span>
          </h2>
        </div>
        </div>
      )
    );
  }
  
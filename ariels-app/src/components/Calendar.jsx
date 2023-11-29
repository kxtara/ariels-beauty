import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { getDay, setHours, setMinutes, format } from "date-fns";
import Confirmation from "./Confirmation";

import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

export default function Calendar({ deposit }) {
  // Initialize state for the selected date and time
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 7)
  );

  // Initialize state for available time slots
  const [timeSlots, setTimeSlots] = useState([]);

  // State to control the visibility of the popup component
  const [isPopupOpen, setPopupOpen] = useState(false);

  // Initialize state to disable/enable a date and time whether a customer completes payment
  const [isDisabled, setIsDisabled] = useState(false);

  // Initialize state to track paid time slots
  const [paidTimeSlots,setPaidTimeSlots] = useState([])

  // This effect recalculates available time slots when the selected date changes.
  useEffect(() => {
    const times = [];

    // Loop that pushes available time slots to an array
    for (let i = 7; i < 20; i++) {
      if (i !== 12 && i !== 13) {
        // Create Date objects for each selectable time and add them to the array
        let time = setHours(setMinutes(startDate, 0), i);

        // If you push a formatted string you'll get an error because `includeTimes` is expecting a date object not a string
        times.push(time);
      }
    }
    setTimeSlots(times);
  }, []);


 const handlePaymentSuccess = () => {
  // Update paidTimeSlots with the selected time on the selected day
  setPaidTimeSlots([...paidTimeSlots,startDate])
  setIsDisabled(true)
 }

  // calculate the first day of the month
  const firstDayOfMonth = new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    1
  );

  // calculate the last day of the month
  const lastDayOfMonth = new Date(
    startDate.getFullYear(),
    startDate.getMonth() + 1,
    0
  );

  // Function to filter weekdays (exclude weekends)
  const isWeekday = (date) => {
    const currentDay = new Date().getDate() // Get the current y of the month
    const day = getDay(date);

    // Disable weekends and days before the current day
    return day !== 0 && day !== 6 && date.getDate() > currentDay;
  };

  // Format the selected date, time, and month using date-fns
  const formattedTime = format(startDate, "MMM EEE d, yyyy - h:mm aa");

  // Function to handle button click and display a confirmation message
  const handleClick = () =>
    deposit ? console.log(formattedTime) : setPopupOpen(true);

  return (
    <>
      {isPopupOpen && (
        <Confirmation
          isPopupOpen={isPopupOpen}
          setPopupOpen={setPopupOpen}
          booking={formattedTime}
        />
      )}
      <DatePicker
        minDate={firstDayOfMonth}
        maxDate={lastDayOfMonth}
        className="flex flex-col m-auto mt-6 mb-4 rounded-md border-[.01rem] text-center"
        calendarClassName="text-[#6C705F]" // Style for time slots
        showTimeSelect // Show time slots
        timeIntervals={60} // Time intervals (e.g., 10 AM, 11 AM)
        selected={startDate} // Display the currently selected date and time
        onChange={(date) => setStartDate(date)} // Update the selected date and time
        filterDate={isWeekday} // Disable weekends
        withPortal // Display the calendar as a popup
        portalId="root-portal"
        includeTimes={timeSlots} // Include the filtered times
        excludeTimes={isDisabled ? paidTimeSlots.filter((time) => time.getDate() === startDate.getDate()) : []} // Exclude only the selected time on the selected day
        value={startDate} // Set the initial input value
      />
      {deposit ? (
        <Link
          className="border-[1px] py-1 px-5 rounded-md flex m-auto mb-8 text-white bg-[#6C705F] w-[4.2rem] md:w-[8rem] md:pl-12 md:text-center md:text-lg"
          to={`/payment?date=${formattedTime}&deposit=${deposit}`}
          onClick={handlePaymentSuccess}
        >
          Pay
        </Link>
      ) : (
        <button
          type="button"
          className="border-[1px] px-11 py-1 rounded-md flex m-auto mb-8 text-white bg-[#6C705F]"
          onClick={handleClick}
        >
          Confirm
        </button>
      )}
    </>
  );
}

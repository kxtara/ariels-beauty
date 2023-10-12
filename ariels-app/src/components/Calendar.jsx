import { useState } from "react";
import DatePicker from "react-datepicker";
import { getDay, setHours, setMinutes, format } from "date-fns";

import "react-datepicker/dist/react-datepicker.css";

export default function Calendar({ deposit }) {
  // Initialize state for the selected date and time
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 7)
  );

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

  // Function to filter available times
  const filterTime = () => {
    // Create an array to store distinct Date objects for each selectable time
    const includeTimes = [];

    // Loop through hours from 7 AM to 7 PM (excluding 12 PM and 1 PM)
    for (let i = 7; i < 20; i++) {
      if (i !== 12 && i !== 13) {
        // Create Date objects for each selectable time and add them to the array
        let time = setHours(setMinutes(new Date(), 0), i)
        includeTimes.push(format(time,"MMM EEE d, yyyy - h:mm aa"));
      }
    }
    console.log(includeTimes)
    return includeTimes;
  };

  // Function to filter weekdays (exclude weekends)
  const isWeekday = (date) => {
    const day = getDay(date);
    return day !== 0 && day !== 6; // Returns true for weekdays (Monday to Friday)
  };

  // Function to handle button click and display a confirmation message
  const handleClick = (e) => {
    e.preventDefault();

    // Format the selected date, time, and month using date-fns
    const formattedTime = format(startDate, "MMM EEE d, yyyy - h:mm aa");

    // Display a confirmation alert with the formatted date and time
    if (!deposit) {
      alert(
        `Your appointment on ${formattedTime} has been successfully booked.`
      );
    } else {
      console.log(formattedTime);
    }
  };

  return (
    <>
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
        includeTimes={filterTime()} // Include the filtered times
        value={startDate} // Set the initial input value
      />
      {deposit ? (
        <button
          type="submit"
          className="border-[1px] px-11 py-1 rounded-md flex m-auto mb-8 text-white bg-[#6C705F]"
          onClick={handleClick}
        >
          Pay
        </button>
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
